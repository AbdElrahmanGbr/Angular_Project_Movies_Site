import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { SendmessageComponent } from './reviews/sendmessage/sendmessage.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tv', component: TvComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'contacts', component: ContactsComponent },
  {path: 'messages', component: SendmessageComponent},
  {path: 'reviews', loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule)},
  { path: '**', redirectTo: '/home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
