import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  router: Router = inject(Router);
  
  //Función que redirige al menú de apadrina y dona.
  goToSponsor() {
    this.router.navigate(['/apadrina-y-dona']);
  }
}
