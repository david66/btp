import { Injectable } from '@angular/core';
import { Media } from "../interfaces/media.interface";
import 'rxjs/Rx';
import { AppSettings } from '../config/settings';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MediaService {

    // mediaURL:string = "https://api.obs.tv/media?tag=";
    // image_collectionURL:string = "https://api.obs.tv/media/image-collection/";
    // imageURL:string = "https://api.obs.tv/media/image/";
    // video_collectionURL:string = "https://api.obs.tv/media/video-collection/";
    // videoURL:string = "https://api.obs.tv/media/video/";
    // mediaFilterURL:string = "https://api.obs.tv/categories/media";

  constructor( public http: HttpClient ) { }

  //MEDIA
  getMedia(key$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'media?tag='}${key$}`;
      console.log(url);
      return this.http.get(url);
  }
  //FILTER
  getFilterMedia(): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'categories/media'}`;
      console.log(url);
      return this.http.get(url)
  }
  //FILTER SELECTED
  getFilterSelectedMedia(key$: string, filter$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'media?tag='}${key$}&category=${filter$}`;
      console.log(url);
      return this.http.get(url)
  }
  //IMAGES
  getImageCollection(key$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'media/image-collection'}/${key$}`;
      console.log(url);
      return this.http.get(url)
  }
  //IMAGE
  getImage(key$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'media/image'}/${key$}`;
      return this.http.get(url)
  }
  //VIDEOS
  getVideoCollection(key$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'media/video-collection'}/${key$}`;
      return this.http.get(url)
  }
  //VIDEO
  getVideo(key$: string): Observable<any>{
      let url = `${AppSettings.API_ENDPOINT+'media/video'}/${key$}`;
      console.log(url);
      return this.http.get(url)
  }
}
