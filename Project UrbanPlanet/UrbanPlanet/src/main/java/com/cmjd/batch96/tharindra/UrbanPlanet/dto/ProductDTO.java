package com.cmjd.batch96.tharindra.UrbanPlanet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;


@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProductDTO {
    private Long id;
    private String title;;
    private String price;
    private String description;
    private String category;
    private String gender;
    private byte[] image;

}
