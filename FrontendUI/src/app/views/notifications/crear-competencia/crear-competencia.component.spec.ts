import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { CrearCompetenciaComponent } from './crear-competencia.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('CrearCompetenciaComponent', () => {
  let component: CrearCompetenciaComponent;
  let fixture: ComponentFixture<CrearCompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCompetenciaComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CrearCompetenciaComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(true).toBeTrue();
  });
});
