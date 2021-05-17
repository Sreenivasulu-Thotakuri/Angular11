import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupdisplayComponent } from './signupdisplay.component';

describe('SignupdisplayComponent', () => {
  let component: SignupdisplayComponent;
  let fixture: ComponentFixture<SignupdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
