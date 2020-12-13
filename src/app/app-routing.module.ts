import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuItemFormComponent } from './add-menu-item-form/add-menu-item-form.component';
import { AddRestaurantFormComponent } from './add-restaurant-form/add-restaurant-form.component';
import { EditMenuItemFormComponent } from './edit-menu-item-form/edit-menu-item-form.component';
import { EditRestaurantFormComponent } from './edit-restaurant-form/edit-restaurant-form.component';
import { ListAllRestarantsComponent } from './list-all-restarants/list-all-restarants.component';
import { ListMenuItemsComponent } from './list-menu-items/list-menu-items.component';
import { ListOrderedMenuItemsComponent } from './list-ordered-menu-items/list-ordered-menu-items.component';
import { ListOrdersComponent } from './list-orders/list-orders.component';

const routes: Routes = [
  {path:'add_item/:resid/:menuid', component: AddMenuItemFormComponent},
  {path: 'add_restaurant', component: AddRestaurantFormComponent },
  {path:'edit_menu_item/:resid/:id', component:EditMenuItemFormComponent},
  {path:'edit_restaurant/:id', component:EditRestaurantFormComponent},
  {path:'list_restaurants', component:ListAllRestarantsComponent},
  {path: 'list_menu_items/:resid', component: ListMenuItemsComponent },
  {path: 'list_ordered_menu_items', component: ListOrderedMenuItemsComponent },
  {path:'list_orders/:resid', component:ListOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
