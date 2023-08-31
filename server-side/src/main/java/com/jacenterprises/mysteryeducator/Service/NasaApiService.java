package com.jacenterprises.mysteryeducator.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class NasaApiService {
    private final String apiUrl = "https://images-api.nasa.gov";
    /* "PgIxMhxq2yQK8VoiD9c26gAtFt4hVdWG3p3enpkE"; */
    @Autowired
    private RestTemplate restTemplate;
    private ObjectMapper objectMapper;

    public ResponseEntity<String> searchImages(String query) {
        String Url = apiUrl + "/search?q=" + query;
        return restTemplate.getForEntity(Url, String.class);
    }

    public ResponseEntity<String> searchNasaId(String nasa_id) {
        String Url = apiUrl + "/asset/" + nasa_id;
        return restTemplate.getForEntity(Url, String.class);
    }

}
