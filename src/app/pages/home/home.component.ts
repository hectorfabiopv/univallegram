import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { videoModel } from '../../models/video.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos: videoModel[] = [];

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
    this.cargarVideos();
  }

  cargarVideos() {
    /*this.youtubeService.getVideos()
    .subscribe(resp => {
      this.videos.push(...resp);
      //console.log(resp);
    }); */
  }

  mostrarVideo(video: videoModel) {
    /*console.log(video);
    const videoId = video.resourceId.videoId;
    const urlVideo = "https://www.youtube.com/embed/"+videoId;
    document.getElementById('univalle-gram-iframe-play-video').setAttribute("src", urlVideo);
    document.getElementById('univalle-gram-btn-trigger-modal-play-video').click();*/
  }
}