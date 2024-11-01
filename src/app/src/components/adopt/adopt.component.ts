import { NgClass, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { DogModel } from './models';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-adopt',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule, NgClass],
  templateUrl: './adopt.component.html',
  styleUrl: './adopt.component.scss',
})

export class AdoptComponent {

 
  selectedOption: string = 'Todos'; // Valor inicial
  dogList: DogModel[] = [
    {
      id: 1,
      age: 4,
      name: 'Tommy',
      pathImg: 'assets/images/dog-1.jpg',
      description: '',
    },
    {
      id: 2,
      age: 8,
      name: 'Reina',
      pathImg: 'assets/images/dog-3.jpg',
      description: '',
    },
    {
      id: 3,
      age: 7,
      name: 'Steven',
      pathImg: 'assets/images/dog-2.jpg',
      description: '',
    },
    {
      id: 4,
      age: 2,
      name: 'Milo',
      pathImg: 'assets/images/dog-4.jpg',
      description: '',
    },
    {
      id: 5,
      age: 2,
      name: 'Rocky',
      pathImg: 'assets/images/dog-5.jpg',
      description: '',
    },
    {
      id: 6,
      age: 3,
      name: 'zeus',
      pathImg: 'assets/images/dogs-6.jpg',
      description: '',
    },
    {
      id: 7,
      age: 1,
      name: 'loby',
      pathImg: 'assets/images/dog-7.jpg',
      description: '',
    },
    {
      id: 8,
      age: 5,
      name: 'Braulio',
      pathImg: 'assets/images/dog-8.jpg',
      description: '',
    },
    {
      id: 9,
      age: 5,
      name: 'mario',
      pathImg: 'assets/images/perro-para-adoptar-1.jpg',
      description: '',
    },
    {
      id: 10,
      age: 7,
      name: 'juaquin',
      pathImg: 'assets/images/dog-9.jpg',
      description: '',
    },
    {
      id: 11,
      age: 3,
      name: 'mara',
      pathImg: 'assets/images/dog-10.webp',
      description: '',
    },
    {
      id: 12,
      age: 5,
      name: 'doncan',
      pathImg: 'assets/images/dog-13.webp',
      description: '',
    },
    {
      id: 13,
      age: 6,
      name: 'firulais',
      pathImg: 'assets/images/dog-14.webp',
      description: '',
    },
    {
      id: 14,
      age: 8,
      name: 'marco',
      pathImg: 'assets/images/dog-15.webp',
      description: '',
    },
    {
      id: 15,
      age: 5,
      name: 'chispa',
      pathImg: 'assets/images/cat-1.jpg',
      description: '',
    },
    {
      id: 16,
      age: 2,
      name: 'luna',
      pathImg: 'assets/images/dog-17.jpg',
      description: '',
    },
    {
      id: 17,
      age: 3,
      name: 'coco',
      pathImg: 'assets/images/dog-20.jpg',
      description: '',
    },
    {
      id: 18,
      age: 2,
      name: 'pluton',
      pathImg: 'assets/images/dog-25.jpg',
      description: '',
    },
  ];
  filteredDogs: DogModel[] = [];

  ngOnInit() {
    // Inicializa con todos los perros al cargar el componente.
    this.filteredDogs = [...this.dogList];
  }

  onOptionChange(option: string) {
    this.selectedOption = option;
    this.filterByAge(option);
  }

  filterByAge(ageType: string) {
    switch (ageType) {
      case 'Todos':
        this.filteredDogs = [...this.dogList].sort((a, b) => a.age - b.age); // Mostrar todos y ordenar de menor a mayor.
        break;
      case 'Jovenes':
        this.filteredDogs = this.dogList
          .filter((dog) => dog.age >= 1 && dog.age <= 3)
          .sort((a, b) => a.age - b.age); // Filtrar perros jóvenes y ordenar de menor a mayor.
        break;
      case 'Mayores':
        this.filteredDogs = this.dogList
          .filter((dog) => dog.age > 3)
          .sort((a, b) => a.age - b.age); // Filtrar perros mayores y ordenar de menor a mayor.
        break;
      default:
        this.filteredDogs = [...this.dogList].sort((a, b) => a.age - b.age); // Mostrar todos y ordenar de menor a mayor.
        break;
    }
  }
  
}


