import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumohojeComponent } from './resumohoje.component';

describe('ResumohojeComponent', () => {
  let component: ResumohojeComponent;
  let fixture: ComponentFixture<ResumohojeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumohojeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumohojeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
