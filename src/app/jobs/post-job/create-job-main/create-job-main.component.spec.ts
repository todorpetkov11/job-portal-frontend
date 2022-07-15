import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobMainComponent } from './create-job-main.component';

describe('CreateJobMainComponent', () => {
  let component: CreateJobMainComponent;
  let fixture: ComponentFixture<CreateJobMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
