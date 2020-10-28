import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { FormsComponent } from './forms/forms.component';
import { FlexboxGridsComponent } from './flexbox-grids/flexbox-grids.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DemoComponent } from './demo/demo.component';



@NgModule({
  declarations: [
    AlertsComponent,
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    FlexboxGridsComponent,
    NavigationComponent,
    DemoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertsComponent,
    ButtonsComponent,
    CardsComponent,
    FormsComponent,
    FlexboxGridsComponent,
    NavigationComponent,
    DemoComponent
  ],
})
export class ComponentesModule { }
