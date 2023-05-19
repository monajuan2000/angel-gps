import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardThreeComponent } from './home-card-three.component';

describe('HomeCardThreeComponent', () => {
  let component: HomeCardThreeComponent;
  let fixture: ComponentFixture<HomeCardThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
