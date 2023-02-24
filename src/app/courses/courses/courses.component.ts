import { Courses } from './../model/courses';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

courses: Courses [] = [];
displayedColumns = ['nome', 'categoria']

coursesService: CoursesService;

  constructor() {
   // pode ser feito o costrutor assim também this.courses = [];
this.coursesService = new CoursesService();
 this.courses = this.coursesService.list();

  }


  ngOnInit(): void {

  }

}
