import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private youtube: YoutubeService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(form.invalid) {return;}
    this.youtube.subirVideo((<HTMLInputElement>document.getElementById('fileVideo')).files[0])
    .subscribe(resp => {
      console.log(resp);
    });
  }
}
