package com.jacenterprises.mysteryeducator.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.jacenterprises.mysteryeducator.Service.MetropolitanMuseumService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MetropolitanMuseumController {

    @Autowired
    private MetropolitanMuseumService metropolitanMuseumService;

    @GetMapping("metromuseum/search-objects")
    public ResponseEntity<List<Integer>> searchObjects() {
        List<Integer> objectIds = metropolitanMuseumService.getObjectIds();
        return ResponseEntity.ok(objectIds);
    }

    @GetMapping("metromutroseum/search-objectid/{object_id}")
    public ResponseEntity<String> searchObjectId(@PathVariable String object_id) {
        return metropolitanMuseumService.searchObjectId(object_id);
    }

    @GetMapping("metromuseum/search-object-details")
    public ResponseEntity<String> searchObjectDetails() {
        List<Integer> objectIds = metropolitanMuseumService.getObjectIds();
        List<String> objectResponses = new ArrayList<>();
        int count = 0;

        for (Integer objectId : objectIds) {
            ResponseEntity<String> objectResponse = searchObjectId(objectId.toString());
            objectResponses.add(objectResponse.getBody());
            count++;

            if (count >= 50) {
                break;
            }
        }

        String jsonResponse = "[" + String.join(",", objectResponses) + "]";
        return ResponseEntity.ok(jsonResponse);
    }

}
