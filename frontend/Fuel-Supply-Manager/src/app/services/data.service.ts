import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {BehaviorSubject} from 'rxjs';

import {FuelSupply} from '../models/fuelSupply';
import { ToasterService } from './toaster.service';

@Injectable()
export class DataService {
  private readonly API_URL = 'http://localhost:8080/api/v1';
  private readonly API_URL_SUPPLY = 'supply';

  dataChange: BehaviorSubject<FuelSupply[]> = new BehaviorSubject<FuelSupply[]>([]);

  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): FuelSupply[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllSupplies(): void {
    this.httpClient.get<FuelSupply[]>(`${this.API_URL}/${this.API_URL_SUPPLY}`).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  addSupply (fuelSupply: FuelSupply): void {
    this.httpClient.post(`${this.API_URL}/${this.API_URL_SUPPLY}`, fuelSupply).subscribe(data => {
        this.dialogData = data;
      },
      ({ error }: HttpErrorResponse) => {
        console.log("addSupply - error", error.apierror.message);
      }
    );
  }

  deleteSupply (id: number): void {
    console.log(id);
    this.httpClient.delete(`${this.API_URL}/${this.API_URL_SUPPLY}/${id}`).subscribe(data => {
      console.log("deleteSupply - data", data);
        // this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        // this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




