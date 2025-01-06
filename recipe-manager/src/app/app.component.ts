import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RecipeModel } from './core/recipe/model/recipe.model';
import { RecipeDetailComponent } from './ui/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './ui/recipe-list/recipe-list.component';
import { RecipeTemplateFormComponent } from './ui/recipe-template-form/recipe-template-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailComponent, RecipeTemplateFormComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipe-manager';

  selectedRecipe: RecipeModel | null = null;

  onRecipeSelected(recipe: RecipeModel | null) {
    this.selectedRecipe = recipe;
  }
}
