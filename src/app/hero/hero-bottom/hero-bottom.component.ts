import { Component, OnInit } from '@angular/core';
import { faReceipt, faPeopleGroup, faAward, faSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-bottom',
  templateUrl: './hero-bottom.component.html',
  styleUrls: ['./hero-bottom.component.css']
})
export class HeroBottomComponent implements OnInit {

  constructor() { }

  public resume = faReceipt
  public people = faPeopleGroup
  public awards = faAward
  public suitcase = faSuitcase

  ngOnInit(): void {
  }

}
