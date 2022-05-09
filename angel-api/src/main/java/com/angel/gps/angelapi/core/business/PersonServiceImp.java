package com.angel.gps.angelapi.core.business;

import com.angel.gps.angelapi.core.mappers.PersonMapper;
import com.angel.gps.angelapi.core.models.PersonModel;
import com.angel.gps.angelapi.core.services.PersonService;
import com.angel.gps.angelapi.infrastucture.persistence.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class PersonServiceImp extends PersonMapper implements PersonService {

   @Autowired
   PersonRepository personRepository;

   @Override
   public Mono<PersonModel> findByUsername(String username) {
      return Mono.just(
              this.convertToModel(
                      this.personRepository.findByUsername(username))
      );
   }

}
