package com.sandermendes.springboot.supplyFuel;

import java.time.LocalDate;

public abstract class SupplyFuelInit {

    public static SupplyFuel createFuelSupply() {
        return SupplyFuel.builder()
                .licensePlate("AAA1234")
                .odometer("123456")
                .supplyDate(LocalDate.of(2023, 1, 25))
                .totalCostSupply(1000)
                .build();

    }
}