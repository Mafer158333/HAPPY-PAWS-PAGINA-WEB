import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MenuModel } from '../models';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgOptimizedImage, NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  router: Router = inject(Router);
  currentUrl: string = ''; // Variable para almacenar la URL actual
  pathImg: string = 'assets/images/huella.png';
  menu: MenuModel[] = [
    {
      id: 1,
      description: 'Inicio',
      url: 'home',
    },
    {
      id: 2,
      description: 'Adopta',
      url: 'adopta',
    },
    {
      id: 3,
      description: 'Apadrina y Dona',
      url: 'apadrina-y-dona',
    },
    {
      id: 4,
      description: 'Apoyanos',
      url: 'apoyanos',
    },
    {
      id: 5,
      description: 'Hogares de paso',
      url: 'hogares-de-paso',
    },
    {
      id: 6,
      description: 'Blog',
      url: 'blog',
    },
    {
      id: 7,
      description: 'Contactanos',
      url: 'contactanos',
    },
    {
    id: 8,
    description: 'Formulario',
    url: 'Formulario'
    },
    {
      id: 9,
      description: 'Fundaciones',
      url: 'Fundaciones'
      },

  ];

  ngOnInit(): void {
    // Suscribirse a los eventos de navegación.
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentUrl = this.router.url; // Actualiza la URL actualf
      });
  }

  // Método para verificar si la ruta actual coincide con el menú
  isActive(menuItem: string): boolean {
    //Omitimos el origen de la ruta.
    if (this.currentUrl === '/') {
      return false;
    } else {
      // Asegúrate de que la comparación sea exacta
      return this.currentUrl === '/' + menuItem || this.currentUrl === menuItem;
    }
  }
}
