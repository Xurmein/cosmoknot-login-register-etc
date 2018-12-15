import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewUserDiagBoxComponent } from './create-new-user-diag-box.component';

describe('CreateNewUserDiagBoxComponent', () => {
  let component: CreateNewUserDiagBoxComponent;
  let fixture: ComponentFixture<CreateNewUserDiagBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewUserDiagBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewUserDiagBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
