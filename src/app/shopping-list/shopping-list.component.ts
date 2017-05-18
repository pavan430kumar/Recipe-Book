import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/_shared/ingredient";
import { ShoppingListService } from "app/_services/shopping-list.service";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  constructor( private sls : ShoppingListService) { }

  items : Ingredient[] = [];

  ngOnInit() {
    this.items =  this.sls.GetItems();
  }
}
