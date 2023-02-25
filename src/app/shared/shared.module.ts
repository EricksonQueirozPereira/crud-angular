import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './app-material/app-material.module';

import { ErroDialogComponent } from './components/erro-dialog/erro-dialog.component';
import { CategoriaPipe } from './pipes/categoria.pipe';
import { CategoryPipe } from './pipes/category.pipe';



@NgModule({
  declarations: [
    ErroDialogComponent,
    CategoriaPipe,
    CategoryPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule

  ],
  exports: [
      CategoriaPipe,
      CategoryPipe,
    ErroDialogComponent]
})
export class SharedModule { }
