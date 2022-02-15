import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-play-home',
  templateUrl: './play-home.component.html',
  styleUrls: ['./play-home.component.scss']
})
export class PlayHomeComponent implements OnInit {

  public timeNow = (new Date().getUTCHours())
  public minNow = (new Date().getMinutes())
  public songs : any

  constructor(private service : MusicService) { }

  ngOnInit(): void {
    this.getAllAlbuns()
  }

  getAllAlbuns(){
    return this.service.getAllbuns().subscribe(data => {
      this.songs = data
    })
  }

}
