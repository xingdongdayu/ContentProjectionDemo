import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("child组件被销毁");
  }

  constructor() { }

  ngOnInit() {
  }

}
