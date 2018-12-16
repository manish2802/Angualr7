import { Component, OnInit } from '@angular/core';
import { User } from '../tdf/user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  //styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  //name : string="manish";

  user = new User('', '', '');
  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.user);
  }

}
