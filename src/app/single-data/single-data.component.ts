import { MusicService } from 'src/app/music.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.scss']
})
export class SingleDataComponent implements OnInit {

  public idMusic : any
  public song : any

  constructor(private service : MusicService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.idMusic = this.route.snapshot.paramMap.get('id');
    this.getItemAlbum()
  }

  getItemAlbum(){
    return this.service.getUnique(this.idMusic).subscribe(data => {
      this.song = data
      console.log(data);
      
    })
  }

}
