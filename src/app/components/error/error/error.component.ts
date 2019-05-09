import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

    errorId: string;
    error_Description: string;

  constructor( private route: ActivatedRoute,
                public router: Router  ) { }

  ngOnInit() {

      this.route.params.subscribe(
          params => {
              this.errorId = params['id'];
              console.log(this.errorId);
          })

      switch (this.errorId) {
          case '403': {
              this.error_Description = "Sorry, you do not have access to this resource.";
              break;
          }
          case '404': {
              this.error_Description = "Sorry, we cannot find that page.";
              break;
          }
          case '500': {
              this.error_Description = "Server error. Please try again later.";
              break;
          }
          default:
          this.error_Description = "Sorry, we cannot find that page.";
      }
  }

}
