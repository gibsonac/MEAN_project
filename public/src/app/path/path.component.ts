import { Component, OnInit, Input, Sanitizer, SecurityContext } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';



@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent implements OnInit {
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
    this.SearchAround(this.theArray, 6, 3, 0)
  }
  // setStart(val) {
  //   (document.querySelector(`#${val}`) as HTMLElement).style.background = "black";
  // }
  displayGrid() {
    var output1 = [];
    for (var x = 0; x < this.theArray.length; x++) {
      var output2 = [];
      for (var i = 0; i < this.theArray[x].length; i++) {
        output2.push(`babyBox${x}${i}`)
      }
      output1.push(output2);
    }
    console.log(output1[6][3])
    output1[4][8] = 'endBox48'
    // this.theArray[4][8] = 10;
    this.theArray[4][8].value = 10;
    output1[6][3] = 'startBox63';
    // this.theArray[6][3] = 5;
    this.theArray[6][3].value = 5;
    console.log(output1[6][3])
    console.log(output1);
    this.theDivs = output1;
  }

  MouseDown(divId) {
    console.log("we ran the function!");
    this.mousedown = true;
    // (document.querySelector(`#${divId}`) as HTMLElement).style.border = "2px solid red";
    // console.log('hi', divId);
  }
  clickNhover(divId) {
    if (this.mousedown) {
      if (divId != 'startBox63' && divId != 'endBox48') {
        var x = divId[divId.length - 2]
        var y = divId[divId.length - 1]
        // this.theArray[x][y] = 2;
        this.theArray[x][y].value = 2;
        console.log(this.theArray);
        if ((document.querySelector(`#${divId}`) as HTMLElement).style.background == "red") {
          (document.querySelector(`#${divId}`) as HTMLElement).style.background = "white";
        }
        else {
          (document.querySelector(`#${divId}`) as HTMLElement).style.background = "red";
          console.log((document.querySelector(`#${divId}`) as HTMLElement));
          // this.currentNumber = 2;
          var div = (document.querySelector(`#${divId}`) as HTMLElement);

        }
      }
    }
  }
  MouseUp() {
    this.mousedown = false;
  }
  SearchAround(ArrayofObjects, x, y, count) {
    console.log(x)
    console.log(y)
    if (x > 0) {
      if (ArrayofObjects[x - 1][y].value == 0 && ArrayofObjects[x - 1][y].hasVisited == "false") {
        ArrayofObjects[x - 1][y].hasVisited = "true";
        ArrayofObjects[x - 1][y].count = count + 1;
        this.SearchAround(ArrayofObjects, x - 1, y, count + 1)
      }
      if (ArrayofObjects[x - 1][y].value == 2) {
        console.log("we hit a wall, waht do we do?");
      }
      if (ArrayofObjects[x - 1][y].value == 10 && ArrayofObjects[x - 1][y].hasVisited == "false") {
        console.log("we found it!!!!")
      }
    }
    ////now we do x + 1
    if (x < ArrayofObjects.length - 1) {
      if (ArrayofObjects[x + 1][y].value == 0 && ArrayofObjects[x + 1][y].hasVisited == "false") {
        ArrayofObjects[x + 1][y].hasVisited = "true";
        ArrayofObjects[x + 1][y].count = count + 1;
        this.SearchAround(ArrayofObjects, x + 1, y, count + 1)
      }
      if (ArrayofObjects[x + 1][y].value == 2) {
        console.log("we hit a wall, waht do we do?")
      }
      if (ArrayofObjects[x + 1][y].value == 10 && ArrayofObjects[x + 1][y].hasVisited == "false") {
        console.log("we found it!!!!")
      }
    }
    ////now we do y+1
    if (y < ArrayofObjects[x].length - 1) {
      if (ArrayofObjects[x][y + 1].value == 0 && ArrayofObjects[x][y + 1].hasVisited == "false") {
        ArrayofObjects[x][y + 1].hasVisited = "true";
        ArrayofObjects[x][y + 1].count = count + 1;
        this.SearchAround(ArrayofObjects, x, y + 1, count + 1)
      }
      if (ArrayofObjects[x][y + 1].value == 2) {
        console.log("we hit a wall, waht do we do?")
      }
      if (ArrayofObjects[x][y + 1].value == 10 && ArrayofObjects[x][y + 1].hasVisited == "false") {
        console.log("we found it!!!!")
      }

    }
    ////now we do y+1
    if (y > 0) {
      if (ArrayofObjects[x][y - 1].value == 0 && ArrayofObjects[x][y - 1].hasVisited == "false") {
        ArrayofObjects[x][y - 1].hasVisited = "true";
        ArrayofObjects[x][y - 1].count = count + 1;
        this.SearchAround(ArrayofObjects, x, y - 1, count + 1)
      }
      if (ArrayofObjects[x][y - 1].value == 2) {
        console.log("we hit a wall, waht do we do?")
      }
      if (ArrayofObjects[x][y - 1].value == 10 && ArrayofObjects[x][y - 1].hasVisited == "false") {
        console.log("we found it!!!!")
      }
    }
  }
}

