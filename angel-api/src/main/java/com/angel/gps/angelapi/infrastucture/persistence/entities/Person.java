package com.angel.gps.angelapi.infrastucture.persistence.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "person")
public class Person {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "id", unique = true)
   private Long id;

   @Column(name = "username")
   private String username;

   @Column(name = "password")
   private String password;
}
