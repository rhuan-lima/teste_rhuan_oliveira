import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { SidenavComponent } from "./components/template/sidenav/sidenav.component";
import { HomeComponent } from "./views/home/home.component";
import { ProductsComponent } from "./views/products/products.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ProductReadComponent } from "./components/product/product-read/product-read.component";
import { ProductRead2Component } from "./components/product/product-read2/product-read2.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
import { ProductUpdateComponent } from "./components/product/product-update/product-update.component";
import { ProductDeleteComponent } from "./components/product/product-delete/product-delete.component";
import { OrdersComponent } from './views/orders/orders.component';
import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import { OrderReadComponent } from './components/order/order-read/order-read.component';
import { OrderUpdateComponent } from './components/order/order-update/order-update.component';
import { OrderDeleteComponent } from './components/order/order-delete/order-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent,
    ProductDeleteComponent,
    OrdersComponent,
    OrderCreateComponent,
    OrderReadComponent,
    OrderUpdateComponent,
    OrderDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-br",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
