import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  isActive: boolean = false;
  isShow: boolean = false;
  roles: any [ ] = [ ];
  selectedIndex: number;

  constructor ( private route: ActivatedRoute,
                public router: Router,
                private _rolesService: RolesService ) { }

  ngOnInit() {
    this.roles = this._rolesService.getFindRoles();
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }
  removeIndex(index: number) {
    this.selectedIndex = null;
  }

  //ToggleClass function functionality
  toggleClass(){
      this.isActive = !this.isActive;
  }

  toggleShow(){
    this.isShow = !this.isShow;
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
      this.isActive = !this.isActive;
    }
  }
}
