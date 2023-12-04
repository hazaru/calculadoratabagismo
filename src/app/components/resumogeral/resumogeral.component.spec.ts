import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumogeralComponent } from './resumogeral.component';

describe('ResumogeralComponent', () => {
  let component: ResumogeralComponent;
  let fixture: ComponentFixture<ResumogeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumogeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumogeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
