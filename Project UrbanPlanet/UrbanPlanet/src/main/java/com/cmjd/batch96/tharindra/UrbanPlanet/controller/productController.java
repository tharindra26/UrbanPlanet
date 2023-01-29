package com.cmjd.batch96.tharindra.UrbanPlanet.controller;

import com.cmjd.batch96.tharindra.UrbanPlanet.dto.ProductDTO;
import com.cmjd.batch96.tharindra.UrbanPlanet.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "api/v1/product")
@CrossOrigin
public class productController {
    @Autowired
    private ProductService productService;

    private byte[] bytes;

    @GetMapping("/getProducts")
    public List<ProductDTO> getProduct(){
        return productService.getAllProducts();
    }

    @PostMapping("/upload")
    public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
        productService.uploadImage(file);
    }

    @PostMapping("/saveProduct")
    public void saveProduct(@RequestBody ProductDTO productDTO){
        productService.saveProduct(productDTO);
    }

    @DeleteMapping(path = { "/{id}" })
    public boolean deleteProduct(@PathVariable("id") long id)
    {
        return productService.deleteProduct(id);
    }

    @PutMapping("/update")
    public void updateProduct(@RequestBody ProductDTO productDTO) {
        productService.updateProduct(productDTO);
    }

}
