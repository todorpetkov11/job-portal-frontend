import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateJobFormComponent } from './post-job/create-job-form/create-job-form.component';
import { CreateJobAsideComponent } from './post-job/create-job-aside/create-job-aside.component';
import { CreateJobMainComponent } from './post-job/create-job-main/create-job-main.component';



@NgModule({
  declarations: [
    CreateJobFormComponent,
    CreateJobAsideComponent,
    CreateJobMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateJobMainComponent
  ]
})
export class JobsModule { }
