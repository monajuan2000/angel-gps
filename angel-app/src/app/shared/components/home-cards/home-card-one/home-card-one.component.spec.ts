import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardOneComponent } from './home-card-one.component';

describe('HomeCardOneComponent', () => {
  let component: HomeCardOneComponent;
  let fixture: ComponentFixture<HomeCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
