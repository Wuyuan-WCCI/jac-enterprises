package com.jacenterprises.mysteryeducator.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class MetropolitanMuseumService {
    private final String apiUrl = "https://collectionapi.metmuseum.org/";
    @Autowired
    private RestTemplate restTemplate;

    public ResponseEntity<String> searchObjects() {
        String Url = apiUrl + "public/collection/v1/objects";
        return restTemplate.getForEntity(Url, String.class);
    }

    public ResponseEntity<String> searchObjectId(int objectId) {
        String Url = apiUrl + "public/collection/v1/objects/" + objectId;
        return restTemplate.getForEntity(Url, String.class);
    }

    public ResponseEntity<String> searchObject(String query) {
        String Url = apiUrl + "public/collection/v1/search?q=" + query;
        return restTemplate.getForEntity(Url, String.class);
    }

    public String getObjectDetails(int objectId) {
        ResponseEntity<String> response = searchObjectId(objectId);
        return response.getBody();
    }

    public List<Integer> getObjectIds() {
        ResponseEntity<String> response = searchObjects();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonResponse;
        List<Integer> objectIds = new ArrayList<>();

        try {
            jsonResponse = objectMapper.readTree(response.getBody());
            JsonNode objectIdsNode = jsonResponse.get("objectIDs");

            if (objectIdsNode != null && objectIdsNode.isArray()) {
                objectIdsNode.forEach(node -> objectIds.add(node.asInt()));
            }
        } catch (IOException e) {
            e.printStackTrace();

        }

        return objectIds;
    }

}
