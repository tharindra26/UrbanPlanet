package com.cmjd.batch96.tharindra.UrbanPlanet.controller;

import com.cmjd.batch96.tharindra.UrbanPlanet.dto.UserDTO;
import com.cmjd.batch96.tharindra.UrbanPlanet.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin
public class userController {

    @Autowired
    private UserService userService;

    @GetMapping("/getUsers")
    public List<UserDTO> getUser(){
        return userService.getAllUsers();
    }

    @PostMapping("/saveUser")
    public UserDTO saveUser(@RequestBody UserDTO userDTO){
        return userService.saveUser(userDTO);
    }

    @PutMapping("/updatetUser")
    public String updateUser(){
        return "Simple-Root";
    }

    /*@DeleteMapping("/deleteUser")
    public boolean deleteUser(@RequestBody UserDTO userDTO)
    {
        return userService.deleteUser(userDTO);
    }*/

    @DeleteMapping(path = { "/{id}" })
    public boolean deleteUser(@PathVariable("id") long id)
    {
        return userService.deleteUser(id);
    }
}
