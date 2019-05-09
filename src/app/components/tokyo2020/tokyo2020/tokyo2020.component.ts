import { Component, OnInit } from '@angular/core';
import { FaqsService } from '../../../services/faqs.service';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-tokyo2020',
  templateUrl: './tokyo2020.component.html',
  styleUrls: ['./tokyo2020.component.scss']
})
export class Tokyo2020Component implements OnInit {

  expanded: boolean = false;
  isOpen: boolean = false;
  faqs: any [ ] = [ ];
  selectedIndex: number;
  role: any = { };


  constructor( private _faqsService: FaqsService,
               private _rolesService: RolesService, ) { }

  ngOnInit() {
    this.faqs = this._faqsService.getQuestions();
    this.role = this._rolesService.getRole('2');
  }

  toggleIndex( index: number ){
    if (this.isOpen === true ) {
      this.selectedIndex = index;
    } else {
      this.selectedIndex = null;
    }
  }

  toggleOpen(faq) {
    faq.isOpen = !faq.isOpen;
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }
  removeIndex(index: number) {
    this.selectedIndex = null;
  }

}

