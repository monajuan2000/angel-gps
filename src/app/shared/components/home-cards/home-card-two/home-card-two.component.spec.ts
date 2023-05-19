import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardTwoComponent } from './home-card-two.component';

describe('HomeCardTwoComponent', () => {
  let component: HomeCardTwoComponent;
  let fixture: ComponentFixture<HomeCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
