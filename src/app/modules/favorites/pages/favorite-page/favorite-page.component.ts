import { Component } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";

@Component({
    selector: 'app-favorite-page',
    standalone: true,
    templateUrl: './favorite-page.component.html',
    styleUrl: './favorite-page.component.css',
    imports: [SharedModule]
})
export class FavoritePageComponent {

}
