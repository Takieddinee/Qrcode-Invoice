import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import { TextLibreComponent } from './text-libre/text-libre.component';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './facture/facture.component';

const appRoutes: Routes = [
  { path: 'facture', component: FactureComponent },
  {path: '', redirectTo:'/facture', pathMatch:'full'},
  { path: 'libre',      component: TextLibreComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    TextLibreComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    NgxQRCodeModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
