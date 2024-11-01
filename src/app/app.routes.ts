import { Routes } from '@angular/router';
import { AdoptComponent } from './src/components/adopt/adopt.component';
import { SupportUsComponent } from './src/components/support-us/support-us.component';
import { HomeComponent } from './src/components/home/home.component';
import { SponsorAndDonateComponent } from './src/components/sponsor-and-donate/sponsor-and-donate.component';
import { ContactUsComponent } from './src/components/contact-us/contact-us.component';
import { PassageHomesComponent } from './src/components/passage-homes/passage-homes.component';
import { BlogComponent } from './src/components/blog/blog.component';
import { NuevoComponenteComponent } from './src/components/Formulario/nuevo-componente.component';
import { FundacionesComponent } from './src/components/fundaciones/fundaciones.component';



export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adopta', component: AdoptComponent },
  { path: 'apadrina-y-dona', component: SponsorAndDonateComponent },
  { path: 'apoyanos', component: SupportUsComponent },
  { path: 'hogares-de-paso', component: PassageHomesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contactanos', component: ContactUsComponent },
  { path: 'Formulario', component:NuevoComponenteComponent},
  {path: 'Fundaciones',component:FundacionesComponent },
  { path: '*', redirectTo: 'home' },
  
];
