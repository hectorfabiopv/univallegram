import { Component, OnInit } from '@angular/core';
import { videoModel } from '../../models/video.models';
import { VideoService } from '../../services/video.service';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  video: videoModel;
  uploadPercent: Observable<number>;
  urlVideo: Observable<string>;

  constructor(private storage: AngularFireStorage, private videoService: VideoService) { }

  ngOnInit(): void { 
    this.video = new videoModel();
    this.video.url = "undefined";
  }

  onSubmit(form: NgForm) {
    if(form.invalid) {return;}
    const id = Math.random().toString(36).substring(2);
    const file = (<HTMLInputElement>document.getElementById('fileVideo')).files[0];
    const filePath = `videos/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlVideo = ref.getDownloadURL() ) ).subscribe(
      resp => {
        if(resp.state == "success") {
          ref.getDownloadURL().subscribe(url => {
            //Setear los datos del usuario en la propiedad Author del modelo video
          this.video.author = { nombreCompleto: "Hector" };
          this.video.playList = "uploads";

          //AQUI ES DONDE ME GUSTARIA CAPTURAR LA URL
          //this.video.url = (<HTMLInputElement>document.getElementById("urlLastUploadedVideo")).value;
          this.video.url = url;

          this.videoService.uploadVideo(this.video)
          .subscribe(resp => {
            console.log(resp); 
          }, (err)=>{
            console.log(err.error.error.message);
          });
          });
        }
      }  
    );
  }
}
