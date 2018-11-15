import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDbComponent } from './quiz-db.component';

describe('QuizDbComponent', () => {
  let component: QuizDbComponent;
  let fixture: ComponentFixture<QuizDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
