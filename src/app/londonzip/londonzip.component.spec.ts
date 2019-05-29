import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LondonzipComponent } from './londonzip.component';

describe('LondonzipComponent', () => {
  let component: LondonzipComponent;
  let fixture: ComponentFixture<LondonzipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LondonzipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LondonzipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
