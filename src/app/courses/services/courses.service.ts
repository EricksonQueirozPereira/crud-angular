import { Courses } from './../model/courses';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  list(): Courses[]{
    return[
      { _id: '1', nome: 'Meu Primeiro Angular Crud', categoria: 'Front end AngularSpring'}
    ];
  }

}
