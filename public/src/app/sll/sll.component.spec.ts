import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SllComponent } from './sll.component';

describe('SllComponent', () => {
  let component: SllComponent;
  let fixture: ComponentFixture<SllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
