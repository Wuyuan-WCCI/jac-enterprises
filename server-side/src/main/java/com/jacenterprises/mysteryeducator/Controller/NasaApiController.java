package com.jacenterprises.mysteryeducator.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jacenterprises.mysteryeducator.Service.NasaApiService;

@RestController
public class NasaApiController {

    private final NasaApiService nasaApiService;

    @Autowired
    public NasaApiController(NasaApiService nasaApiService) {
        this.nasaApiService = nasaApiService;
    }

    @GetMapping("nasa/search-images")
    public ResponseEntity<String> searchImages(@RequestParam String query) {
        return nasaApiService.searchImages(query);
    }

    @GetMapping("nasa/search-nasa_id/{nasa_id}")
    public ResponseEntity<String> searchNasaId(@PathVariable String nasa_id) {
        return nasaApiService.searchNasaId(nasa_id);
    }

}
