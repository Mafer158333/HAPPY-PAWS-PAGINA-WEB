import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-passage-homes',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './passage-homes.component.html',
  styleUrl: './passage-homes.component.scss'
})
export class PassageHomesComponent {
  pathIm: string = 'assets/images/perro-para-adoptar-1.jpg';
}
