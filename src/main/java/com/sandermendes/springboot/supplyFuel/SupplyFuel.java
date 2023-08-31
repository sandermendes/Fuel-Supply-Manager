package com.sandermendes.springboot.supplyFuel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;
import org.springframework.format.annotation.NumberFormat.Style;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

@Entity
public class SupplyFuel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "license_plate")
    @Size(min = 2)
    @Size(max = 15)
    @NotNull
    private String licensePlate;

    @Column(name = "odometer")
    @Positive()
    @Size(max = 15)
    @NotNull
    private String odometer;

    @Column(name = "supply_date")
    @DateTimeFormat()
    @NotNull
    private LocalDate supplyDate;

    @Column(name = "total_cost_supply")
    @NumberFormat(style = Style.CURRENCY)
    @NotNull
    private Number totalCostSupply;

    // @Column(name = "MASS")
    // @NotNull
    // @Max(104000)
    // private Double mass;

    // @Column(name = "LENGTH")
    // @NotNull
    // @Max(210)
    // private Integer length;

}
