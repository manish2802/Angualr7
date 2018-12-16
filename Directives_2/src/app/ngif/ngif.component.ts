import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html'
 // styleUrls: ['./ngif.component.scss']
})
export class NgifComponent implements OnInit {
  
  public but="gggg";
 
  public isDisabled=false;
  
  public con=false;

  constructor() { }

  ngOnInit() {
  }

}
