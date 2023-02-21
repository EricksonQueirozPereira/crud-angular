import { Courses } from './../model/courses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

courses: Courses [] = [
{ _id: '1', nome: 'AngularCrud', categoria: 'Front end Angular'}

];
displayedColumns = ['nome', 'categoria']

  constructor() {
   // pode ser feito o costrutor assim também this.courses = [];
  }


  ngOnInit(): void {

  }

}
