package com.angel.gps.angelapi.application.controllers;

import com.angel.gps.angelapi.core.models.PersonModel;
import com.angel.gps.angelapi.core.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/angel-gps/persons")
public class PersonController {

   @Autowired
   private PersonService personService;

   @GetMapping(value = "/login/{username}")
   public Mono<PersonModel> findByUsername(@PathVariable String username){
      return personService.findByUsername(username);
   }
}
