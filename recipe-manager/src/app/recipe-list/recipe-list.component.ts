import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes = [
  { title: 'Spaghetti Carbonara', description: 'Klasyczne danie włoskie' },
  { title: 'Pancakes', description: 'Puszyste naleśniki z miodem' },
  { title: 'Tacos', description: 'Meksykanskie tacoś z wołowiną' }
  ];

  author : string = "Wojciech Podest Amaro";
}
