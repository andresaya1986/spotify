import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SharedModule,
    RouterOutlet
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
export class HomeRoutingModule { }