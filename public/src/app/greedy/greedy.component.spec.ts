import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreedyComponent } from './greedy.component';

describe('GreedyComponent', () => {
  let component: GreedyComponent;
  let fixture: ComponentFixture<GreedyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreedyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
