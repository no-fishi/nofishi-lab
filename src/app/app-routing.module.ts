import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Imported by no-fishi
import { HomeComponent } from './components/home/home.component';

// Handle the routes of Angular with the component to load according to the path
const routes : Routes = [
  {
    path       : '',
    redirectTo : 'home',
    pathMatch  : 'full'
  },
  {
    path      : 'home',
    component : HomeComponent,
    data      : { title : 'home' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
