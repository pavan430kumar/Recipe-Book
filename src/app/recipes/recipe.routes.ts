import { RouterModule, Routes, ROUTER_CONFIGURATION } from "@angular/router"
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipestartComponent } from "app/recipes/recipestart.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";


export const recipeRoutes : any = [
    {path:'', component: RecipestartComponent},
    {path:'new', component: RecipeEditComponent},
    {path:':id', component: RecipeDetailComponent },
    {path:':id/edit', component: RecipeEditComponent}
];

//This is not used, as there is some issue with routers version mismatch

