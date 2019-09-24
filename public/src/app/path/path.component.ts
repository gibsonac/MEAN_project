import { Component, OnInit, Input, Sanitizer, SecurityContext } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
  theDivs: any;
  mousedown: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.displayGrid();
  }
  // setStart(val) {
  //   (document.querySelector(`#${val}`) as HTMLElement).style.background = "black";
  // }
  displayGrid() {
    var output1 = [];
    for (var x = 0; x < 10; x++) {
      var output2 = [];
      // output2.push(`row`)
      for (var i = 0; i < 10; i++) {
        output2.push(`babyBox${x}${i}`)
      }
      output1.push(output2);
    }
    console.log(output1[6][3])
    output1[6][3] = 'startBox63';
    console.log(output1[6][3])
    this.theDivs = output1;
    // this.setStart('startBox63');
  }

  MouseDown(divId) {
    console.log("we ran the function!");
    this.mousedown = true;
    // (document.querySelector(`#${divId}`) as HTMLElement).style.border = "2px solid red";
    // console.log('hi', divId);
  }
  clickNhover(divId) {
    if (this.mousedown) {
      if (divId != 'startBox63') {
        (document.querySelector(`#${divId}`) as HTMLElement).style.background = "red";
      }
    }
  }
  MouseUp() {
    this.mousedown = false;
  }
}

