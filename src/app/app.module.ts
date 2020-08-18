import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', redirectTo: '/exchange', pathMatch: 'full' },
  { path: 'exchange', component: ExchangeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
