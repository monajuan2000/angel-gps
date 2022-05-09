package com.angel.gps.angelapi.core.services;

import com.angel.gps.angelapi.core.models.PersonModel;
import reactor.core.publisher.Mono;

public interface PersonService {

   Mono<PersonModel> findByUsername(String username);
}
