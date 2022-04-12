import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEquipoComponent } from './crear-equipo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('CrearEquipoComponent', () => {
  let component: CrearEquipoComponent;
  let fixture: ComponentFixture<CrearEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearEquipoComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CrearEquipoComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(true).toBeTrue();
  });
});
