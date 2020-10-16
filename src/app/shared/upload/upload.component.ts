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
  uploadPercentImage: Observable<number>;
  urlVideo: Observable<string>;
  urlImage: Observable<string>;

  constructor(private storage: AngularFireStorage, private videoService: VideoService) { }

  ngOnInit(): void { 
    this.video = new videoModel();
    this.video.url = "undefined";
  }

  onSubmit(form: NgForm) {
    if(form.invalid) {return;}

    //Con respecto al video
    const id = Math.random().toString(36).substring(2);
    const file = (<HTMLInputElement>document.getElementById('fileVideo')).files[0];
    const filePath = `videos/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();

    //Con respecto a la miniatura
    const idImage = Math.random().toString(36).substring(2);
    const fileImage = (<HTMLInputElement>document.getElementById('miniatura')).files[0];
    const filePathImage = `picsVideos/${idImage}`;
    const refImage = this.storage.ref(filePathImage);
    const taskImage = this.storage.upload(filePathImage, fileImage);
    this.uploadPercentImage = taskImage.percentageChanges();

    //Seteo propiedades del video
    this.video.author = JSON.parse(localStorage.getItem("userLogged"));
    this.video.playList = "uploads";

    taskImage.snapshotChanges().pipe( finalize(() => this.urlImage = refImage.getDownloadURL()) ).subscribe(
      resp => {
        if(resp.state == "success") {
          refImage.getDownloadURL().subscribe(url => {
            //Seteo la url de la miniatura
            this.video.pic = url;
          });
        }
      } 
    );

    task.snapshotChanges().pipe( finalize(() => this.urlVideo = ref.getDownloadURL() ) ).subscribe(
      resp => {
        if(resp.state == "success") {
          ref.getDownloadURL().subscribe(url => {
          //Seteo la url del video
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
