import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardFourComponent } from './home-card-four.component';

describe('HomeCardFourComponent', () => {
  let component: HomeCardFourComponent;
  let fixture: ComponentFixture<HomeCardFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
