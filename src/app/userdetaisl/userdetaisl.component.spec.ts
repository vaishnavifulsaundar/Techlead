import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetaislComponent } from './userdetaisl.component';

describe('UserdetaislComponent', () => {
  let component: UserdetaislComponent;
  let fixture: ComponentFixture<UserdetaislComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetaislComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserdetaislComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
