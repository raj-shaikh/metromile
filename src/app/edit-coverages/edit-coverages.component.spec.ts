import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoveragesComponent } from './edit-coverages.component';

describe('EditCoveragesComponent', () => {
  let component: EditCoveragesComponent;
  let fixture: ComponentFixture<EditCoveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCoveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
