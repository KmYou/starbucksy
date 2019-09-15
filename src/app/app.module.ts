import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
// import { ProductsService } from './products.service';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LastpageComponent } from './lastpage/lastpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent,
    HomeComponent,
    LastpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // providers: [ProductsService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
