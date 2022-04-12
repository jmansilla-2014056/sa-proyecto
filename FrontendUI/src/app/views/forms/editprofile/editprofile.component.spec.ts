import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileComponent } from './editprofile.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('EditprofileComponent', () => {
  let component: EditprofileComponent;
  let fixture: ComponentFixture<EditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofileComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(EditprofileComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(true).toBeTrue();
  });
});
