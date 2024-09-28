import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  //standalone: true,
  //imports: [],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit { 
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d00001e02a91c10fe9472d9bd89802e5a',
    album: 'brutal',
    name:'Olivia Rodrigo',
    url:'localhost:3000/track.mp3',
    _id: 1
  }
  
  ngOnInit(): void {
      
  }

}
