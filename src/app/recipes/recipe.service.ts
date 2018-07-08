import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shopping-list/shoping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Brushetta',
    'A super tasty tomato brushetta',
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/10/9/0/NY1004H_tomato-bruschetta_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371600462491.jpeg'
    ,[
      new Ingredient('Meat', 1),
      new Ingredient('French Fries',20)
    ]),
    new Recipe('Big Fat Burger',
    'What else do you need?',
    'http://thehauterfly.com/wp-content/uploads/2017/04/140317_Dudleys.jpg'
    ,[
      new Ingredient('Buns', 2),
      new Ingredient('Meat',4)
    ])
  ]

  getRecipe(){
    return this.recipes.slice();
  }

  constructor(private slService : ShopingListService) { }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
