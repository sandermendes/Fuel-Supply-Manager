import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';

import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { FuelSupply } from './models/fuelSupply';
import { DataService } from './services/data.service';
import { AddDialogComponent } from './dialogs/add/add.dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  displayedColumns = ['id', 'licensePlate', 'odometer', 'supplyDate', 'totalCostSupply', 'actions'];
  database: DataService;
  dataSource: FuelSupplyDataSource | null;
  index: number;
  id: number;

  toasts: { icon: string; message: string }[] = [];

  constructor(public httpClient: HttpClient, public dialog: MatDialog, public dataService: DataService) {}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: { fuelSupply: FuelSupply }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.database.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }

  deleteItem(i: number, id: number, licensePlate: string, odometer: string, supplyDate: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { id, licensePlate, odometer, supplyDate }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.database.dataChange.value.findIndex(x => x.id === this.id);

        this.database.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }


  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }

  public loadData() {
    this.database = new DataService(this.httpClient);
    this.dataSource = new FuelSupplyDataSource(this.database, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

export class FuelSupplyDataSource extends DataSource<FuelSupply> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: FuelSupply[] = [];
  renderedData: FuelSupply[] = [];

  constructor(public _database: DataService, public _paginator: MatPaginator, public _sort: MatSort) {
    super();

    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<FuelSupply[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._database.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._database.getAllSupplies();


    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        this.filteredData = this._database.data.slice().filter((fuelSupply: FuelSupply) => {
          if (!fuelSupply) return;

          const searchStr = (fuelSupply.id + fuelSupply.licensePlate + fuelSupply.odometer + fuelSupply.supplyDate).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });

        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());

        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
        return this.renderedData;
      }
    ));
  }

  disconnect() {}


  /** Returns a sorted copy of the database data. */
  sortData(data: FuelSupply[]): FuelSupply[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
        case 'licensePlate': [propertyA, propertyB] = [a.licensePlate, b.licensePlate]; break;
        case 'odometer': [propertyA, propertyB] = [a.odometer, b.odometer]; break;
        case 'supplyDate': [propertyA, propertyB] = [a.supplyDate, b.supplyDate]; break;
        case 'totalCostSupply': [propertyA, propertyB] = [a.totalCostSupply, b.totalCostSupply]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
