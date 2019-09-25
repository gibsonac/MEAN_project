import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-greedy',
  templateUrl: './greedy.component.html',
  styleUrls: ['./greedy.component.css']
})
export class GreedyComponent implements OnInit {
  theDivs: any;
  mousedown: boolean = false;
  currentNumber: Number = 1;
  // theArray = [
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // ]
  theArray = [
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
    [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }]
  ]
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.displayGrid();

  }
  displayGrid() {
    var output1 = [];
    for (var x = 0; x < this.theArray.length; x++) {
      var output2 = [];
      for (var i = 0; i < this.theArray[x].length; i++) {
        output2.push(`smallBox${x}${i}`)
      }
      output1.push(output2);
    }
    // console.log(output1[6][3])
    output1[4][8] = 'endBox48'
    // this.theArray[4][8] = 10;
    this.theArray[4][8].value = 10;
    output1[6][3] = 'startBox63';
    // this.theArray[6][3] = 5;
    this.theArray[6][3].value = 5;
    // console.log(output1[6][3])
    // console.log(output1);
    this.theDivs = output1;
  }

  MouseDown(divId) {
    // console.log("we ran the function!");
    this.mousedown = true;
    this.clickNhover(divId);
    // (document.querySelector(`#${divId}`) as HTMLElement).style.border = "2px solid red";
    // console.log('hi', divId);
  }
  clickNhover(divId) {
    if (this.mousedown) {
      if (divId != 'startBox63' && divId != 'endBox48') {
        var x = divId[divId.length - 2]
        var y = divId[divId.length - 1]
        // this.theArray[x][y] = 2;
        // console.log(this.theArray);
        if ((document.querySelector(`#${divId}`) as HTMLElement).style.background == "red") {
          (document.querySelector(`#${divId}`) as HTMLElement).style.background = "white";
          this.theArray[x][y].value = 0;
        }
        else {
          (document.querySelector(`#${divId}`) as HTMLElement).style.background = "red";
          // console.log((document.querySelector(`#${divId}`) as HTMLElement));
          // this.currentNumber = 2;
          var div = (document.querySelector(`#${divId}`) as HTMLElement);
          this.theArray[x][y].value = 2;

        }
      }
    }
  }
  MouseUp() {
    this.mousedown = false;
  }
  SearchBest() {
    var start = [6, 3]
    var end = [4, 8]
    var arrayPath = [];
    while (start[0] != end[0] && start[0] != end[0]) {
      if (start[0] > end[0]) {
        while (start[0] > end[0]) {
          console.log("!!!!!!!!!!!!", this.theArray[start[0] - 1][start[1]].value);
          if (this.theArray[start[0] - 1][start[1]].value == 2) {
            break;
          }
          arrayPath.push([start[0] - 1, start[1]]);
          start[0] -= 1;
          console.log(arrayPath)
          var location = start[0]*10;
          location =+ start[1]
          var ending = end[0]*10;
          ending += end[1];
          if (location != ending) {
            (document.querySelector(`#smallBox${start[0]}${start[1]}`) as HTMLElement).style.background = "purple";
          }
        }
      }
      if (start[1] > end[1]) {
        while (start[1] > end[1]) {
          console.log("@@@@@@@@@", this.theArray[start[0]][start[1] - 1].value);
          if (this.theArray[start[0]][start[1] - 1].value == 2) {
            break;
          }
          arrayPath.push([start[0], start[1] - 1])
          start[1] -= 1;
          console.log(arrayPath)
          var location = start[0]*10;
          location =+ start[1]
          var ending = end[0]*10;
          ending += end[1];
          if (location != ending) {
            (document.querySelector(`#smallBox${start[0]}${start[1]}`) as HTMLElement).style.background = "purple";
          }
        }
      }
      if (start[0] < end[0]) {
        while (start[0] < end[0]) {
          console.log("##########", this.theArray[start[0] + 1][start[1]].value);
          if (this.theArray[start[0] + 1][start[1]].value == 2) {
            break;
          }
          arrayPath.push([start[0] + 1, start[1]])
          start[0] += 1;
          console.log(arrayPath)
          var location = start[0]*10;
          location =+ start[1]
          var ending = end[0]*10;
          ending += end[1];
          if (location != ending) {
            (document.querySelector(`#smallBox${start[0]}${start[1]}`) as HTMLElement).style.background = "purple";
          }
        }
      }
      if (start[1] < end[1]) {
        while (start[1] < end[1]) {
          console.log("$$$$$$$$$", this.theArray[start[0]][start[1] + 1].value);
          if (this.theArray[start[0]][start[1] + 1].value == 2) {
            break;
          }
          arrayPath.push([start[0], start[1] + 1]);
          start[1] += 1;
          console.log(arrayPath)
          var location = start[0]*10;
          location =+ start[1]
          var ending = end[0]*10;
          ending += end[1];
          if (location != ending) {
            (document.querySelector(`#smallBox${start[0]}${start[1]}`) as HTMLElement).style.background = "purple";
          }
        }
      }
      console.log("found it!");
      return;
    }
  }
}
