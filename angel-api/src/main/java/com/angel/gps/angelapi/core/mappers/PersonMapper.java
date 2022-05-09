package com.angel.gps.angelapi.core.mappers;

import com.angel.gps.angelapi.core.models.PersonModel;
import com.angel.gps.angelapi.infrastucture.persistence.entities.PersonEntity;

public class PersonMapper {

   protected PersonModel convertToModel(PersonEntity personEntity) {
      return  new PersonModel(
              personEntity.getUsername(),
              personEntity.getPassword(),
              personEntity.getEmail()
      );
   }
}
