import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumomesComponent } from './resumomes.component';

describe('ResumomesComponent', () => {
  let component: ResumomesComponent;
  let fixture: ComponentFixture<ResumomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumomesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
