import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuItem } from '../models/MenuItem';
import { MenuItemsDataService } from '../services/menu-items-data.service';

@Component({
  selector: 'app-edit-menu-item-form',
  templateUrl: './edit-menu-item-form.component.html',
  styleUrls: ['./edit-menu-item-form.component.css']
})
export class EditMenuItemFormComponent implements OnInit {

  res_id:number;
  id:number;
  newMenuItem:MenuItem;
  constructor(
    private MenuItemService: MenuItemsDataService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
  this.route.params.subscribe(
    (params: Params) => {this.res_id = +params['resid'];
                         this.id= +params['id']}
  );
  }

  editMenuItem(f:NgForm){

    this.newMenuItem=new MenuItem(f.value.MIName,f.value.price,f.value.description,f.value.image,this.id,this.res_id,10,false);
    this.MenuItemService.setMenuItem(this.res_id,this.id,this.newMenuItem);
    this.router.navigateByUrl(`list_menu_items/${this.res_id}`);
  }
}
