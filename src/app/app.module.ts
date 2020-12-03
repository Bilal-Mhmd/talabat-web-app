import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditRestaurantFormComponent } from './edit-restaurant-form/edit-restaurant-form.component';
import { AddRestaurantFormComponent } from './add-restaurant-form/add-restaurant-form.component';
import { AddMenuItemFormComponent } from './add-menu-item-form/add-menu-item-form.component';
import { EditMenuItemFormComponent } from './edit-menu-item-form/edit-menu-item-form.component';
import { ListAllRestarantsComponent } from './list-all-restarants/list-all-restarants.component';
import { ListMenuItemsComponent } from './list-menu-items/list-menu-items.component';
import { ListOrderedMenuItemsComponent } from './list-ordered-menu-items/list-ordered-menu-items.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    EditRestaurantFormComponent,
    AddRestaurantFormComponent,
    AddMenuItemFormComponent,
    EditMenuItemFormComponent,
    ListAllRestarantsComponent,
    ListMenuItemsComponent,
    ListOrderedMenuItemsComponent,
    ListOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCnHbqTR0R1FCPrpCMTLPTyfugGcshC_BA",
      authDomain: "bilal-demo-43131.firebaseapp.com",
      databaseURL: "https://bilal-demo-43131.firebaseio.com",
      projectId: "bilal-demo-43131",
      storageBucket: "bilal-demo-43131.appspot.com",
      messagingSenderId: "615697632077",
      appId: "1:615697632077:web:69788f2be2c61e70468504",
      measurementId: "G-FLCTRTD514"
    }),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
