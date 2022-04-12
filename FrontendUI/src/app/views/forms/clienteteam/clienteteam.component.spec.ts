import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClienteteamComponent } from './clienteteam.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('ClienteteamComponent', () => {
  let component: ClienteteamComponent;
  let fixture: ComponentFixture<ClienteteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteteamComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
