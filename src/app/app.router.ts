import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipesComponent } from "app/recipes/recipes.component";
import { RecipestartComponent } from "app/recipes/recipestart.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children:
            [
                { path: '', component: RecipestartComponent },
                { path: 'new', component: RecipeEditComponent },
                { path: ':id', component: RecipeDetailComponent },
                { path: ':id/edit', component: RecipeEditComponent }
            ]
    },
    { path: 'shoppinglist', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);