package com.sandermendes.springboot.supplyFuel;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SupplyFuelRepository extends JpaRepository<SupplyFuel, Long> {
    @Query(value = "SELECT sf FROM SupplyFuel sf WHERE sf.licensePlate = :licensePlate ORDER BY sf.odometer DESC")
    List<SupplyFuel> findByLicensePlate(@Param("licensePlate") String licensePlate);
}
