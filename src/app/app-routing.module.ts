import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { AlertsComponent } from './componentes/alerts/alerts.component';
import { ButtonsComponent } from './componentes/buttons/buttons.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { FormsComponent } from './componentes/forms/forms.component';
import { FlexboxGridsComponent } from './componentes/flexbox-grids/flexbox-grids.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { DemoComponent } from './componentes/demo/demo.component';




const routes: Routes = [
  { path: '',   redirectTo: '/demos', pathMatch: 'full' },
  { path: 'alert', component: AlertsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'flexboxes', component: FlexboxGridsComponent },
  { path: 'navigations', component: NavigationComponent },
  { path: 'demos', component: DemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
