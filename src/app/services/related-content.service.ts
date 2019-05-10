import { Injectable } from '@angular/core';
import { NewsService } from '../services/news.service';
import { MediaService } from '../services/media.service';
import { DocumentsService } from '../services/documents.service';
import { CalendarEventsService } from '../services/calendar-events.service';

@Injectable()
export class RelatedContentService {

    related_data: any = { };
    media_image_collection: any = { };
    media_video_collection: any = { };
    video: any = { };
    new: any = { };
    document: any = { };
    event: any = { };
    rel_results_Array: any [ ] = [ ];
    id:string;

  constructor ( private _newsService:NewsService,
                private _mediaService:MediaService,
                private _documentsService:DocumentsService,
                private _calendarEventsService:CalendarEventsService ) { }

    getRelatedContent(related_data) {

        this.related_data = related_data;
        let idCollection = Object.values(this.related_data);
        console.log(idCollection);
        for (let entry of idCollection) {
            console.log(entry.type);
            this.rel_results_Array = [ ];

            switch(entry.type) {
                case "image-collection": {
                    this.rel_results_Array = [ ];
                    this._mediaService.getImageCollection(entry.id)
                    .subscribe(media_image_collection => {
                        this.media_image_collection = media_image_collection;
                        console.log(this.media_image_collection);
                        this.media_image_collection.type = entry.type;
                        this.media_image_collection.follow = "Following";
                        this.rel_results_Array.push(this.media_image_collection);
                    });
                    break;
                }
                case "video-collection": {
                    this._mediaService.getVideoCollection(entry.id)
                    .subscribe(media_video_collection => {
                        this.media_video_collection = media_video_collection;
                        console.log(this.media_video_collection);
                        this.media_video_collection.type = entry.type;
                        this.media_video_collection.follow = "Following";
                        this.rel_results_Array.push(this.media_video_collection);
                    });
                    break;
                }
                case "video": {
                    this._mediaService.getVideo(entry.id)
                    .subscribe(video => {
                        this.video = video;
                        console.log(this.video);
                        this.video.type = entry.type;
                        this.video.follow = "Following";
                        this.rel_results_Array.push(this.video);
                    });
                    break;
                }
                case "news": {
                    this._newsService.getNew(entry.id)
                    .subscribe(not => {
                      this.new = not;
                      console.log(this.new);
                      this.new.type = entry.type;
                      this.new.follow = "Following";
                      this.rel_results_Array.push(this.new);
                    });
                    break;
                }
                case "document": {
                    this._documentsService.getDocument(entry.id)
                    .subscribe(document => {
                        this.document = document;
                        console.log(this.document);
                        this.document.type = entry.type;
                        this.document.follow = "Following";
                        this.rel_results_Array.push(this.document);
                    });
                    break;
                }
                case "event": {
                    this._calendarEventsService.getEvent(entry.id)
                    .subscribe(event => {
                        this.event = event.results;
                        for (let entry of this.event) {
                            entry.type = "event";
                            entry.follow = "Following";
                            this.rel_results_Array.push(entry);
                            console.log(entry);
                        }
                    });
                    break;
                }
            }
        }
        return this.rel_results_Array;
    }
}
