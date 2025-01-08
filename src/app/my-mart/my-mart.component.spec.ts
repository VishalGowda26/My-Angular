import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMartComponent } from './my-mart.component';

describe('MyMartComponent', () => {
  let component: MyMartComponent;
  let fixture: ComponentFixture<MyMartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyMartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
