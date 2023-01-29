package com.cmjd.batch96.tharindra.UrbanPlanet.service;

import com.cmjd.batch96.tharindra.UrbanPlanet.dto.UserDTO;
import com.cmjd.batch96.tharindra.UrbanPlanet.entity.User;
import com.cmjd.batch96.tharindra.UrbanPlanet.repo.UserRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ModelMapper modelMapper;

    public UserDTO saveUser(UserDTO userDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    public List<UserDTO> getAllUsers(){
        List<User> userList=userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>(){}.getType());
    }

    /*public boolean deleteUser(UserDTO userDTO){
        userRepo.delete(modelMapper.map(userDTO, User.class));
       return true;
    }*/

    public boolean deleteUser(long id){
        userRepo.deleteById(id);
        return true;
    }
}
