import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  title : string="manish";

  constructor() { }

  ngOnInit() {

    this.title="xyz";
  }

}
