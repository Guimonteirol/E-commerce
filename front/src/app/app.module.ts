import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { NewCollectionComponent } from './components/new-collection/new-collection.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FooterComponent } from './components/footer/footer.component';
import { TopComponent } from './components/top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CallToActionComponent,
    NewCollectionComponent,
    CartComponent,
    FooterComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
