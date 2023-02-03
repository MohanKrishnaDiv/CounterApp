import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() hero:number=0;
 @Output() parentFun:EventEmitter<any> = new EventEmitter()

constructor(){}
ngOnInit(): void {
    
}
Encoder(){
  this.hero++;
  this.parentFun.emit(this.hero);
  console.log(this.hero)
}
Decoder(){
  this.hero--;
  this.parentFun.emit(this.hero);
  console.log(this.hero)
}
reset(){
  this.hero=0;
  this.parentFun.emit(this.hero);
}
ngOninit():void{
  this.parentFun.emit(this.hero)
}

}
