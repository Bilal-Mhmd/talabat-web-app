import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-list-menu-items',
  templateUrl: './list-menu-items.component.html',
  styleUrls: ['./list-menu-items.component.css']
})
export class ListMenuItemsComponent implements OnInit {

  menuItems : Observable<any[]>;
  _menuItems: MenuItem[]=[];
  constructor(db: AngularFireDatabase) { 
    this.menuItems = db.list('/menuItems').valueChanges();
    console.log(this.menuItems);
  }

  ngOnInit(): void {
  }

}
