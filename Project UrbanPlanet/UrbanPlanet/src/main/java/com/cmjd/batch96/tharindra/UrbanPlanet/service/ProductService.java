package com.cmjd.batch96.tharindra.UrbanPlanet.service;

import com.cmjd.batch96.tharindra.UrbanPlanet.dto.ProductDTO;
import com.cmjd.batch96.tharindra.UrbanPlanet.entity.Product;
import com.cmjd.batch96.tharindra.UrbanPlanet.repo.ProductRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;

@Service
@Transactional
public class ProductService {
    @Autowired
    private ProductRepo productRepo;
    @Autowired
    private ModelMapper modelMapper;

    private byte[] bytes;

    /*public ProductDTO saveProduct(ProductDTO productDTO){
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }*/

    public List<ProductDTO> getAllProducts(){
        List<Product> productList=productRepo.findAll();
        return modelMapper.map(productList, new TypeToken<List<ProductDTO>>(){}.getType());
    }

    public void uploadImage(MultipartFile file) throws IOException {
        this.bytes = file.getBytes();
    }

    public ProductDTO saveProduct(ProductDTO productDTO){
        productDTO.setImage(this.bytes);
        productRepo.save(modelMapper.map(productDTO, Product.class));
        this.bytes=null;
        return productDTO;
    }

    public void updateProduct(ProductDTO productDTO) {
        productRepo.save(modelMapper.map(productDTO, Product.class));
    }

    public boolean deleteProduct(long id){
        productRepo.deleteById(id);
        return true;
    }

    /*public boolean deleteUser(UserDTO userDTO){
        userRepo.delete(modelMapper.map(userDTO, User.class));
       return true;
    }*/

    /*public boolean deleteUser(long id){
        userRepo.deleteById(id);
        return true;
    }*/
}

