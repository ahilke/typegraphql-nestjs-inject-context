import { Inject, Injectable, Scope } from "@nestjs/common";
import { CONTEXT } from "@nestjs/graphql";
import { Recipe } from "./types";

@Injectable()
export default class RecipeService {
  private readonly recipes: Recipe[] = [];

  constructor(@Inject(CONTEXT) context) {
    console.log('Request Headers:', context?.req?.headers);
  } 

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
