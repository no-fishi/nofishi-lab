import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imported by no-fishi: modules
import { MatToolbarModule         } from '@angular/material/toolbar';
import { MatTabsModule            } from '@angular/material/tabs';
import { MatIconModule            } from '@angular/material/icon';
import { MatCardModule            } from '@angular/material/card';
import { MatButtonModule          } from '@angular/material/button';
import { HttpClientModule         } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIconsModule            } from '@ng-icons/core';
import {
  simpleDeviantart, // Icon of Deviantart
  simpleBluesky,    // Icon of Bluesky
  simpleX,          // Icon of X
  simpleGithub,     // Icon of GitHub
} from '@ng-icons/simple-icons';

// Imported by no-fishi: components
import { HomeComponent        } from './components/home/home.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocialmediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Imported by no-fishi
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgIconsModule,
    NgIconsModule.withIcons( {
      simpleDeviantart, // Icon of Deviantart
      simpleBluesky,    // Icon of Bluesky
      simpleX,          // Icon of X
      simpleGithub,     // Icon of GitHub
    } ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
