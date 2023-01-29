package com.cmjd.batch96.tharindra.UrbanPlanet;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class UrbanPlanetApplication {

	public static void main(String[] args) {
		SpringApplication.run(UrbanPlanetApplication.class, args);
	}
	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

}
