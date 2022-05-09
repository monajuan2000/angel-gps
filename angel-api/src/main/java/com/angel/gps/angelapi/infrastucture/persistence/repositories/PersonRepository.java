package com.angel.gps.angelapi.infrastucture.persistence.repositories;

import com.angel.gps.angelapi.infrastucture.persistence.entities.PersonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PersonRepository extends JpaRepository<PersonEntity,Long> {

   @Query(value = "select username from person where username=?1", nativeQuery = true)
   PersonEntity findByUsername(String username);

}
