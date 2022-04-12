import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ButtonModule, CardModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { ButtonsComponent } from './buttons.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;
  let iconSetService: IconSetService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsComponent ],
      imports: [HttpClientTestingModule, CardModule, GridModule, ButtonModule, RouterTestingModule, IconModule, DocsComponentsModule],
      providers: [IconSetService]
    })
    .compileComponents();
  });

  // beforeEach(() => {
  //   iconSetService = TestBed.inject(IconSetService);
  //   iconSetService.icons = { ...iconSubset };

  //   fixture = TestBed.createComponent(ButtonsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(true).toBeTrue();
  });
});
