package com.cmjd.batch96.tharindra.UrbanPlanet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
    private Long id;
    private String name;
    private String password;
    private String type;
}
