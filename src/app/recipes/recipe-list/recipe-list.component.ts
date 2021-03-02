import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] =[

    new Recipe('Galette des Rois', 'The galette celebrates Epiphany',
    'https://static01.nyt.com/images/2017/12/24/magazine/24mag-ondessert1/24mag-24ondessert-t_CA0-articleLarge.jpg'),
    new Recipe('Chocolate Cake', 'Little cake with a melting heart',
    'https://static01.nyt.com/images/2016/11/21/dining/21COOKING-CHOCOLATECAKE1/21COOKING-CHOCOLATECAKE1-articleLarge.jpg'),
    new Recipe('Potatoes au gratin', 'Like a gratin dauphinois',
    'https://static01.nyt.com/images/2020/04/26/dining/mb-gratin/merlin_147141342_5554df8b-75f7-4e2e-b7ed-7284671a6426-articleLarge.jpg'),
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {

    this.recipeWasSelected.emit(recipe);

  }
}
