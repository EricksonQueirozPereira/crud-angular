import { ErroDialogComponent } from './../../shared/components/erro-dialog/erro-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { CoursesService } from '../services/courses.service';
import { Courses } from './../model/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Courses[]>;
  displayedColumns = ['nome', 'categoria'];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    // pode ser feito o costrutor assim também this.courses = [];

    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError(' Erro ao Carregar Cursos Abestado. !!! ');
        return of([]);
      })
    );
  }
  onError(erroMsg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: erroMsg,
    });
  }

  ngOnInit(): void {}
}
