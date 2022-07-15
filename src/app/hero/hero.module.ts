import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroMainComponent } from './hero-main/hero-main.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroBottomComponent } from './hero-bottom/hero-bottom.component';



@NgModule({
  declarations: [
    HeroMainComponent,
    HeroSearchComponent,
    HeroBottomComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HeroMainComponent
  ]
})
export class HeroModule { }
