import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-findyourrole',
  templateUrl: './findyourrole.component.html',
  styleUrls: ['./findyourrole.component.scss']
})
export class FindyourroleComponent implements OnInit {

  roles: any [ ] = [ ];
  isActive:boolean = false;
  selectedIndex: number;

  constructor( private _rolesService: RolesService ) { }

  ngOnInit() {

    this.roles = this._rolesService.getFindRoles();
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }
  removeIndex(index: number) {
    this.selectedIndex = null;
  }
}
