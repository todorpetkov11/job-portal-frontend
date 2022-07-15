import { Component, OnInit } from '@angular/core';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  public location = faLocationPin
  public phone = faPhone
  public envelope = faEnvelope

  ngOnInit(): void {
  }

}
