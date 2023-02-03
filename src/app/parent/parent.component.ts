import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  count:number=0;
  parentFun(count:any){
    this.count=count;
  }
  getcolor()
  {
    if(this.count>0)return 'green';
    else if(this.count<0)return 'red'
    else return 'black'
  }
  
}
