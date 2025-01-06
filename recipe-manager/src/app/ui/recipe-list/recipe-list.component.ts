
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeListElementComponent } from '../recipe-list-element/recipe-list-element.component';
import { RecipeService } from '../../core/recipe/service/recipe.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RecipeModel } from '../../core/recipe/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeListElementComponent, RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {
  selectedRecipeTitle: string | null = '';
  recipes: RecipeModel[] = [];

  @Output() recipeSelected = new EventEmitter<RecipeModel | null>();

  constructor(private recipeService: RecipeService) {

  }
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onDeleteRecipe(id: number | undefined): void {
    if (id) {
      this.recipeService.deleteRecipe(id);  // Usuwanie przepisu
      this.recipes = this.recipeService.getRecipes();  // Odśwież listę
    }
  }
}
