package com.angel.gps.angelapi.core.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PersonModel {

   private String username;
   private String password;
   private String email;
}
