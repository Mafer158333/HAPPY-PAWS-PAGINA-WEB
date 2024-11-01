import { Component } from '@angular/core';
import { CradModel } from './models';
import { NgFor, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgOptimizedImage, NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  cards: CradModel[] = [
    {
      id: 1,
      description:
        'Ven y disfruta de las festiviades con tus mascotas y pasala muy bien con los demas peluditos.',
      pathImg: 'assets/images/disfraz.jpg',
      title: 'Halloween en manada',
    },
    {
      id: 2,
      description:
        'Les daremos homenaje a aquellos que han prestado sus hogares para acoger a los peluditos',
      pathImg: 'assets/images/hogar.png',
      title: 'Hogares de paso',
    },
    {
      id: 3,
      description:
        'Ven y celebra un neuvo año con neustros peluditos y mascotas y celebra un año mas con ellos',
      pathImg: 'assets/images/año nuevo.jpeg',
      title: 'Feliz año nuevo en manada',
    },
  
  ];
  
}
