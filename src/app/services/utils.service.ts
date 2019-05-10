import { Injectable } from '@angular/core';
import { parse, format } from 'date-fns';

@Injectable()
export class UtilsService {

    results: any [ ] = [ ];

  constructor() { }

      getResults(results) {
          this.results = results;
          for (let entry of this.results) {
              switch(entry.privilege_codes) {
                  case "yog2018": {
                      entry.badge = "Buenos Aires 2018";
                      break;
                  }
                  case "yog2020": {
                      entry.badge = "Lausanne 2020";
                      break;
                  }
                  case "og2020": {
                      entry.badge = "Tokyo 2020";
                      break;
                  }
                  case "pg2020": {
                      entry.badge = "Tokyo 2020";
                      break;
                  }
                  case "og2022": {
                      entry.badge = "Beijing 2022";
                      break;
                  }
                  case "pg2022": {
                      entry.badge = "Beijing 2022";
                      break;
                  }
                  case "og2024": {
                      entry.badge = "Paris 2024";
                      break;
                  }
                  case "pg2024": {
                      entry.badge = "Paris 2024";
                      break;
                  }
                  case "og2028": {
                      entry.badge = "Los Angeles 2028";
                      break;
                  }
                  case "pg2028": {
                      entry.badge = "Los Angeles 2028";
                      break;
                  }
                  default:
                  entry.badge = "General";
              }
              if (entry.resource_type == "document"){
                  entry.document_type = entry.file.split('.').pop();
              }
              if (entry.resource_type == "event"){
                  entry.month = format(entry.start_date,'MMM');
                  entry.day = format(entry.start_date,'DD');
              }
              entry.date_format = entry.date_published.substring(0, 10);
          }
          return this.results;
      }
}
