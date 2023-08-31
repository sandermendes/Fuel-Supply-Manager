package com.sandermendes.springboot.supplyFuel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sandermendes.springboot.exception.EntityNotFoundException;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/supply")
public class SupplyFuelController {

    @Autowired
    private SupplyFuelService supplyFuelService;

    @GetMapping()
    public ResponseEntity<List<SupplyFuel>> getAll() {
        return ResponseEntity.ok().body(supplyFuelService.findAll());
    }

    @GetMapping(value = "/{supplyFuelId}")
    public SupplyFuel getSupplyFuel(@PathVariable("supplyFuelId") Long supplyFuelId) throws EntityNotFoundException {
        return supplyFuelService.getSupplyFuelId(supplyFuelId);
    }

    @PostMapping
    public SupplyFuel createSupplyFuel(@Valid @RequestBody SupplyFuel supplyFuel) {
        return supplyFuelService.createSupplyFuel(supplyFuel);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable final long id) {
        return ResponseEntity.ok().body(Map.of("message", supplyFuelService.deleteById(id)));
    }
}
