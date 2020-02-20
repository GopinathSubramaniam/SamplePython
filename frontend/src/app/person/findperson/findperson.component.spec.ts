import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpersonComponent } from './findperson.component';

describe('FindpersonComponent', () => {
  let component: FindpersonComponent;
  let fixture: ComponentFixture<FindpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
