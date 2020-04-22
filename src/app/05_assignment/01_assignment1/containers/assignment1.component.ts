import { Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {

  constructor(){
  }
  dynContent : string = ""
  handler1(value : string) : void{
    this.dynContent = value
  }

  }
  



  
  

