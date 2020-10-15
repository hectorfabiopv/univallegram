import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    //if(form.invalid) {return;}
    const id = Math.random().toString(36).substring(2);
    const file = (<HTMLInputElement>document.getElementById('fileVideo')).files[0];
    const filePath = `videos/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    
  }
}
