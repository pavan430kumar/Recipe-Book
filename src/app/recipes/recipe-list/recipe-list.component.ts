import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "app/recipes/recipe";
import { RecipeService } from "app/_services/recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  recipes: Recipe[] = [];
  //@Output() recipeSelected = new EventEmitter<Recipe>();

  ngOnInit() {
    this.recipes = this.recipeService.GetAllRecipes();
  }

  // onSelected(selectedRecipe: Recipe) {
  //   this.recipeSelected.emit(selectedRecipe);
  // }

   onSelected(selectedRecipe: Recipe) {
    this.recipeService.EmitSelectedRecipe(selectedRecipe);
  }
}
