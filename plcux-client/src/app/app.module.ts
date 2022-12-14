import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PricesComponent } from './prices/prices.component';
import { PageComponent } from './page/page.component';
import { PriceComponent } from './price/price.component';
import { HttpClientModule } from '@angular/common/http';
import { ReplacePipe } from './replace.pipe';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    PricesComponent,
    PageComponent,
    PriceComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
