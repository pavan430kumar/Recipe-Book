import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "app/recipes/recipe";
import { RecipeService } from "app/_services/recipe.service";
import { ShoppingListService } from "app/_services/shopping-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService, private sls: ShoppingListService, private router: Router) { }

  @Input() selectedRecipe: Recipe;
  private RecipeIndex : number = 1;

  ngOnInit() {
    this.recipeService.emitSelectedRecipe.subscribe(data =>
      this.selectedRecipe = data
    );
  }
  
  onAddToShoppingList() {
    this.sls.AddItems(this.selectedRecipe.ingredients);
  }

  onEdit(){
    this.router.navigate(['/recipes', this.RecipeIndex, 'edit']);
  }

  onDelete(){
    this.router.navigate(['/recipes'])
  }
}
