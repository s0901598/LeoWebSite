import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillcardsComponent } from './skillcards.component';

describe('SkillcardsComponent', () => {
  let component: SkillcardsComponent;
  let fixture: ComponentFixture<SkillcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
