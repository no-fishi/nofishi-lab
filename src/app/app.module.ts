import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imported by no-fishi
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule    } from '@angular/material/tabs';
import { MatIconModule    } from '@angular/material/icon';
import { MatCardModule    } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Imported by no-fishi
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
