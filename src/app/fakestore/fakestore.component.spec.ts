import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakestoreComponent } from './fakestore.component';

describe('FakestoreComponent', () => {
  let component: FakestoreComponent;
  let fixture: ComponentFixture<FakestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakestoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
