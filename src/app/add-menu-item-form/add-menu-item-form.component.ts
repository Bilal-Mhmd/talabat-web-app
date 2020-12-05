import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuItemsDataService } from '../menu-items-data.service';
import { MenuItem } from '../MenuItem';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-add-menu-item-form',
  templateUrl: './add-menu-item-form.component.html',
  styleUrls: ['./add-menu-item-form.component.css']
})
export class AddMenuItemFormComponent implements OnInit {

 _id : number;
  constructor(private MenuItemsService:MenuItemsDataService, private route:ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
        (params: Params) => {this._id = +params['resid'];}
      );
  }

  addMenuItem(f:NgForm)
  {
    this.MenuItemsService.addMenuItem(
      new MenuItem(
        f.value.MIName,
        f.value.price,
        f.value.description,
        f.value.image,
        1000,
        this._id));
    this._router.navigateByUrl(`list_menu_items/${this._id}`);
  }
}
