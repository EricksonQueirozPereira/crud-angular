import { Courses } from './../model/courses';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

courses$: Observable <Courses[]>;
displayedColumns = ['nome', 'categoria']



  constructor( private coursesService: CoursesService) {
   // pode ser feito o costrutor assim também this.courses = [];

 this.courses$ = this.coursesService.list();

  }


  ngOnInit(): void {

  }

}
