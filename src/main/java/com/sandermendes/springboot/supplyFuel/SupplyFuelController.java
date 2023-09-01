package com.sandermendes.springboot.supplyFuel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sandermendes.springboot.exception.EntityNotFoundException;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@Api(tags = "FuelSupply")
@RestController
@RequestMapping("api/v1/supply")
@CrossOrigin(origins = "http://localhost:4200")
public class SupplyFuelController {

    @Autowired
    private SupplyFuelService supplyFuelService;

    @ApiOperation(value = "This method is used to list all the FuelSupply.")
    @GetMapping()
    public ResponseEntity<List<SupplyFuel>> getAll() {
        return ResponseEntity.ok().body(supplyFuelService.findAll());
    }

    @ApiOperation(value = "This method is used to get one FuelSupply by ID")
    @GetMapping(value = "/{supplyFuelId}")
    public SupplyFuel getSupplyFuel(@PathVariable("supplyFuelId") Long supplyFuelId) throws EntityNotFoundException {
        return supplyFuelService.getSupplyFuelId(supplyFuelId);
    }

    @ApiOperation(value = "This method is used to create one FuelSupply")
    @PostMapping
    public SupplyFuel createSupplyFuel(@Valid @RequestBody SupplyFuel supplyFuel) {
        return supplyFuelService.createSupplyFuel(supplyFuel);
    }

    @ApiOperation(value = "This method is used to delete one FuelSupply by id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable final long id) {
        return ResponseEntity.ok().body(Map.of("message", supplyFuelService.deleteById(id)));
    }
}
