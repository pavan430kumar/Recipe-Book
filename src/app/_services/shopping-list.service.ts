import { Ingredient } from "app/_shared/ingredient";

export class ShoppingListService {

  constructor() { }

  private items: Ingredient[] = [];

  GetItems() {
    return this.items;
  }

  AddItems(items: Ingredient[]) {
    this.items = Array.prototype.push.apply(this.items, items);
  }

}
