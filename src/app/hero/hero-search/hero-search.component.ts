import { Component, OnInit } from '@angular/core';
import { faLocationPin, faSuitcase, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  constructor() { }

  public suitcase = faSuitcase
  public arrow = faArrowDownWideShort
  public location = faLocationPin
  public showJob: boolean = true
  public showCandidate: boolean = false




  ngOnInit(): void {
  }

  public toggleSearch() {
    
    this.showCandidate = !this.showCandidate
    this.showJob = !this.showJob
  }

}
