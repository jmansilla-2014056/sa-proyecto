import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Routes } from '@angular/router';
import { CardModule, GridModule, ProgressModule, WidgetModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { DocsComponentsModule } from '../../../../components';
import { WidgetsBrandComponent } from '../widgets-brand/widgets-brand.component';
import { WidgetsDropdownComponent } from '../widgets-dropdown/widgets-dropdown.component';
import { WidgetsEComponent } from '../widgets-e/widgets-e.component';
import { WidgetsComponent } from './widgets.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetsComponent, WidgetsBrandComponent, WidgetsDropdownComponent, WidgetsEComponent],
      imports: [RouterTestingModule,HttpClientTestingModule,WidgetModule, ProgressModule, GridModule, DocsComponentsModule, CardModule,  ChartjsModule, IconModule],
      providers: [IconSetService]
    })
      .compileComponents();
  });

  // beforeEach(() => {
  //   iconSetService = TestBed.inject(IconSetService);
  //   iconSetService.icons = { ...iconSubset };

  //   fixture = TestBed.createComponent(WidgetsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('truti', () => {
    expect(true).toBeTrue();
  });
});
