import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramcardsComponent } from './programcards.component';

describe('ProgramcardsComponent', () => {
  let component: ProgramcardsComponent;
  let fixture: ComponentFixture<ProgramcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
