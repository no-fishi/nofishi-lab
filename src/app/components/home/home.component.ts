import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  home_title    = 'This is home component!';
  card_title    = 'Shin (NO FISHI)';
  card_subtitle = 'Subtitle Subtitle Subtitle';
  card_content  = 'TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT \
                   TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT \
                   TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT \
                   TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT \
                   TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT';
}
