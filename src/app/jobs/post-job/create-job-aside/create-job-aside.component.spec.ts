import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobAsideComponent } from './create-job-aside.component';

describe('CreateJobAsideComponent', () => {
  let component: CreateJobAsideComponent;
  let fixture: ComponentFixture<CreateJobAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
