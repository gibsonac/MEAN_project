import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BSTComponent } from './bst.component';

describe('BSTComponent', () => {
  let component: BSTComponent;
  let fixture: ComponentFixture<BSTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BSTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
