import { Component, OnInit, Input, Sanitizer, SecurityContext } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';
import { delay } from 'rxjs/operators'


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
        console.log(this.theArray);
        if ((document.querySelector(`#${divId}`) as HTMLElement).style.background == "red") {
          (document.querySelector(`#${divId}`) as HTMLElement).style.background = "white";
          this.theArray[x][y].value = 0;
        }
        else {
          (document.querySelector(`#${divId}`) as HTMLElement).style.background = "red";
          console.log((document.querySelector(`#${divId}`) as HTMLElement));
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

  SearchAround(ArrayofObjects, x, y, count, array, foundit) {
    console.log(x)
    console.log(y)
    console.log(foundit)
    if (foundit == null) {
      foundit = false;
    }
    if (foundit == true) {
      return;
    }
    if (array == null) {
      array = [];
    }
    if (array[array.length - 1] == [4, 8]) {
      return array;
    }
    if (foundit == false) {

      if (x > 0) {
        if (ArrayofObjects[x - 1][y].value == 0 && ArrayofObjects[x - 1][y].hasVisited == "false") {
          ArrayofObjects[x - 1][y].hasVisited = "true";
          ArrayofObjects[x - 1][y].count = count + 1;
          (document.querySelector(`#babyBox${x - 1}${y}`) as HTMLElement).style.background = "purple";
          array.push([x - 1, y]);
          setTimeout(() => {
            foundit = this.SearchAround(ArrayofObjects, x - 1, y, count + 1, array, foundit)
          }, 1000);
        }
        if (ArrayofObjects[x - 1][y].value == 2) {
          console.log("we hit a wall, waht do we do?");
        }
        if (ArrayofObjects[x - 1][y].value == 10 && ArrayofObjects[x - 1][y].hasVisited == "false") {
          foundit = true;
          console.log("we found it!!!!", x - 1, y, array, foundit)
          return foundit;
        }
      }
      ////now we do x + 1
      if (x < ArrayofObjects.length - 1) {
        if (ArrayofObjects[x + 1][y].value == 0 && ArrayofObjects[x + 1][y].hasVisited == "false") {
          ArrayofObjects[x + 1][y].hasVisited = "true";
          ArrayofObjects[x + 1][y].count = count + 1;
          array.push([x + 1, y]);
          (document.querySelector(`#babyBox${x + 1}${y}`) as HTMLElement).style.background = "purple";
          setTimeout(() => {
            foundit = this.SearchAround(ArrayofObjects, x + 1, y, count + 1, array, foundit)

          }, 1000);
        }
        if (ArrayofObjects[x + 1][y].value == 2) {
          console.log("we hit a wall, waht do we do?")
        }
        if (ArrayofObjects[x + 1][y].value == 10 && ArrayofObjects[x + 1][y].hasVisited == "false") {
          foundit = true;
          console.log("we found it!!!!", x + 1, y, array, foundit)
          return foundit;
        }
      }
      ////now we do y+1
      if (y < ArrayofObjects[x].length - 1) {
        if (ArrayofObjects[x][y + 1].value == 0 && ArrayofObjects[x][y + 1].hasVisited == "false") {
          ArrayofObjects[x][y + 1].hasVisited = "true";
          ArrayofObjects[x][y + 1].count = count + 1;
          array.push([x, y + 1]);
          (document.querySelector(`#babyBox${x}${y + 1}`) as HTMLElement).style.background = "purple";
          setTimeout(() => {
            foundit = this.SearchAround(ArrayofObjects, x, y + 1, count + 1, array, foundit)

          }, 1000);
        }
        if (ArrayofObjects[x][y + 1].value == 2) {
          console.log("we hit a wall, waht do we do?")

        }
        if (ArrayofObjects[x][y + 1].value == 10 && ArrayofObjects[x][y + 1].hasVisited == "false") {
          foundit = true;
          console.log("we found it!!!!", x, y + 1, array, foundit);

          return foundit;
        }

      }
      ////now we do y+1
      if (y > 0) {
        if (ArrayofObjects[x][y - 1].value == 0 && ArrayofObjects[x][y - 1].hasVisited == "false") {
          ArrayofObjects[x][y - 1].hasVisited = "true";
          ArrayofObjects[x][y - 1].count = count + 1;
          array.push([x, y - 1]);
          (document.querySelector(`#babyBox${x}${y - 1}`) as HTMLElement).style.background = "purple";
          setTimeout(() => {
            foundit = this.SearchAround(ArrayofObjects, x, y - 1, count + 1, array, foundit)

          }, 1000);
        }
        if (ArrayofObjects[x][y - 1].value == 2) {
          console.log("we hit a wall, waht do we do?")
        }
        if (ArrayofObjects[x][y - 1].value == 10 && ArrayofObjects[x][y - 1].hasVisited == "false") {
          foundit = true;
          console.log("we found it!!!!", x, y - 1, array, foundit)
          return foundit;
        }
      }
    }
  }

  GoHome(ArrayofObjects, x, y, count) {
    if (count == 0) {
      console.log("we found back home!")
    }

  }

}

