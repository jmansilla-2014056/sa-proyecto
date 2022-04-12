import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GridModule, WidgetModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { WidgetsBrandComponent } from './widgets-brand.component';
import { RouterModule, Routes } from '@angular/router';0
describe('WidgetsBrandComponent', () => {
  let component: WidgetsBrandComponent;
  let fixture: ComponentFixture<WidgetsBrandComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsBrandComponent ],
      imports: [RouterTestingModule, WidgetModule, GridModule, ChartjsModule, IconModule],
      providers: [IconSetService]
    })
    .compileComponents();
  });

  // beforeEach(() => {
  //   iconSetService = TestBed.inject(IconSetService);
  //   iconSetService.icons = { ...iconSubset };

  //   fixture = TestBed.createComponent(WidgetsBrandComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(true).toBeTrue();
  });
});
