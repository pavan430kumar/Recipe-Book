import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from "app/recipes/recipe";
import { Ingredient } from "app/_shared/ingredient";

@Injectable()
export class RecipeService {

  constructor() { }

  @Output() emitSelectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Chicken Curry", "This is chicken curry with all masalas", "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
     [new Ingredient("Chicken", 1), new Ingredient("Onions",2), new Ingredient("Tomato", 3)]),
    new Recipe("Chicken Biryani", "Basmati rice cooked with chicken", "http://www.infoinformations.com/wp-content/uploads/2016/11/maxresdefault-21.jpg", 
    [new Ingredient("Basmathi Rice", 1), new Ingredient("Chicken", 1)]),
    new Recipe("Sambar", "Dal cooked with tamdrin", "http://2.bp.blogspot.com/-p0S3PZKtGKA/U1dqP-9sRtI/AAAAAAAA1wI/ufV1aWOe4_o/s1600/v+four.jpg", [
      new Ingredient("Dal", 0.5), new Ingredient("Onions", 1), new Ingredient("Salt",1)
    ]),
    new Recipe("Papad", "Its crunchy side dish for sambar", "http://ksmartstatic.sify.com/cmf-1.0.0/appflow/bawarchi.com/Image/oetlspajcgcdh_bigger.jpg", [
      new Ingredient("Papadas", 5)
    ]),
  ];

  GetAllRecipes(): Recipe[] {
    return this.recipes;
  }

  EmitSelectedRecipe(selectedRecipe : Recipe) {
    this.emitSelectedRecipe.emit(selectedRecipe);
  }
}
