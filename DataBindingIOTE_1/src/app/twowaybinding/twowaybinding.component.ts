import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add an Item';
  goalText: string = 'My first life goal';    // Add this

  constructor() { }

  ngOnInit() {
  }

}
