package com.cmjd.batch96.tharindra.UrbanPlanet.repo;

import com.cmjd.batch96.tharindra.UrbanPlanet.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
}
