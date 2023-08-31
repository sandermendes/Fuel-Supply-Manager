package com.sandermendes.springboot.supplyFuel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.sandermendes.springboot.exception.EntityNotFoundException;

import java.util.List;
import java.util.Optional;

@Service
public class SupplyFuelService {

    @Autowired
    private SupplyFuelRepository supplyFuelRepository;

    public List<SupplyFuel> findAll() {
        return (List<SupplyFuel>) supplyFuelRepository.findAll();
    }

    public SupplyFuel getSupplyFuelId(Long supplyFuelId) {
        Optional<SupplyFuel> supplyFuel = supplyFuelRepository.findById(supplyFuelId);

        if (supplyFuel.isEmpty()) {
            throw new EntityNotFoundException(SupplyFuel.class);
        }
        return supplyFuel.get();
    }

    public SupplyFuel createSupplyFuel(SupplyFuel supplyFuel) {
        SupplyFuel newSupplyFuel = new SupplyFuel();
        newSupplyFuel.setLicensePlate(supplyFuel.getLicensePlate());
        newSupplyFuel.setOdometer(supplyFuel.getOdometer());
        newSupplyFuel.setSupplyDate(supplyFuel.getSupplyDate());
        newSupplyFuel.setTotalCostSupply(supplyFuel.getTotalCostSupply());

        return supplyFuelRepository.save(newSupplyFuel);
    }

    public String deleteById(@PathVariable final long supplyFuelId) {
        Optional<SupplyFuel> supplyFuel = supplyFuelRepository.findById(supplyFuelId);
        if (supplyFuel.isEmpty())
            throw new EntityNotFoundException(SupplyFuel.class, "supplyFuelId", Long.toString(supplyFuelId));

        supplyFuelRepository.deleteById(supplyFuelId);
        return "Supply deleted with success";
    }

    // private Boolean _getLastSupplyByLicence
}
