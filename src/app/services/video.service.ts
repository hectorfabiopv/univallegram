import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private url = 'https://univallegram-1920a.firebaseio.com/';

  constructor(private http: HttpClient) { }

  uploadVideo(video: any) {
    return this.http.post(`${this.url}/videos.json`, video);
  }
}
