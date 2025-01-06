
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { tap } from 'rxjs';
import { HighlightOnHoverDirective } from '@core/recipe/directives/highlight-on-hover.directive';
import { DifficultyPipe } from '@core/recipe/pipes/difficulty.pipe';
import { IngredientPipe } from '@core/recipe/pipes/ingredient.pipe';
import { PreparationTimePipe } from '@core/recipe/pipes/preparation-time.pipe';
import { RecipeModel } from '@core/recipe/model/recipe.model';
import { RecipeService } from '@core/recipe/service/recipe.service';
import { RecipeListElementComponent } from '@ui/recipe-list-element/recipe-list-element.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeListElementComponent, RouterLink, MatCardModule, MatButtonModule, HighlightOnHoverDirective, PreparationTimePipe, DifficultyPipe, IngredientPipe],
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
    this.getRecipes();
  }

  onDeleteRecipe(id: number | undefined): void {
    if (id) {
      this.recipeService.deleteRecipe(id).subscribe(() => {
        this.getRecipes();  // Odśwież listę

      });  // Usuwanie przepisu
    }
  }

  private getRecipes(): void {
    // metoda zwraca strumień, za pomocą operatora pipe jesteśmy w stanie wykonać dodatkowe operacje na danych które w nim "płyną"
    this.recipeService.getRecipes().pipe(
      // operator tap służy do wykonania działań na danych, ale bez wpływu na zwracany model
      tap((recipesFromGetRecipesMethod: RecipeModel[]) => {
        //przypisanie modelu do zmiennej
        this.recipes = recipesFromGetRecipesMethod;
      })
      // gdy wykonamy metodę subscribe() strumień zwróci nam dane gdy tylko będą dostępne
    ).subscribe();
  }
}
