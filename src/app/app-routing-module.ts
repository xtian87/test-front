import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeComponent } from './pages/exchange/exchange.component';

const routes: Routes = [
    {path: 'exchange', component: ExchangeComponent},
    {path: '**', redirectTo: 'exchange', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }