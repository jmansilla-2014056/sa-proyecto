import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPartidosComponent } from './usuario-partidos.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('UsuarioPartidosComponent', () => {
  let component: UsuarioPartidosComponent;
  let fixture: ComponentFixture<UsuarioPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPartidosComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
