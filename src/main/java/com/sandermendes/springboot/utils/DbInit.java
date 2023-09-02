package com.sandermendes.springboot.utils;

import com.sandermendes.springboot.supplyFuel.SupplyFuelInit;
import com.sandermendes.springboot.supplyFuel.SupplyFuelRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@AllArgsConstructor
public class DbInit implements ApplicationRunner {

    private SupplyFuelRepository supplyFuelRepository;

    public void run(ApplicationArguments args) {
        log.info("Populating database with sample data...");
        supplyFuelRepository.save(SupplyFuelInit.createFuelSupply());
    }
}