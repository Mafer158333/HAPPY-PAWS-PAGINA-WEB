import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  router: Router = inject(Router);

  //Funcción que redirige al menú de adopta.
  goToAdopt() {
    this.router.navigate(['/adopta']);
  }

  //Función que redirige al menú de apadrina y dona.
  goToSponsor() {
    this.router.navigate(['/apadrina-y-dona']);
  }
}
