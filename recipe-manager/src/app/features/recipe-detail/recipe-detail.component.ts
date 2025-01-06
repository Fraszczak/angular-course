
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PreparationTimePipe } from '@core/recipe/pipes/preparation-time.pipe';
import { DifficultyPipe } from '@core/recipe/pipes/difficulty.pipe';
import { IngredientPipe } from '@core/recipe/pipes/ingredient.pipe';
import { RecipeModel } from '@core/recipe/model/recipe.model';
import { RecipeService } from '@core/recipe/service/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, PreparationTimePipe, DifficultyPipe, IngredientPipe],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(+id).subscribe(result => {
        this.recipe = result;
      });
    }
  }
}