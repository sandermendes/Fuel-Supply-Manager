package com.sandermendes.springboot.supplyFuel;

public abstract class SupplyFuelObjectMother {

    public static SupplyFuel createSupply() {
        return SupplyFuel.builder()
                .licensePlate("123456")
                .odometer("123")
                .build();

    }
}
