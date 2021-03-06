import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  theDivs: any;
  mousedown: boolean = false;
  currentNumber: Number = 1;
  theArray = [];
  // theArray = [
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }],
  //   [{ value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }, { value: 0, hasVisited: "false", count: 0 }]
  // ]

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    // this.displayGrid();
    this.makeGrid();
  }

  makeGrid(rows = 12, cols = 19) {
    for (var i = 0; i < rows; ++i) {
      var row = [];
      for (var j = 0; j < cols; ++j) {
        row.push({ value: 0, hasVisited: "false", count: 0, id: `babyBox${i}-${j}` });
      }
      console.log(row);
      this.theArray.push(row);
    }
    console.log(this.theArray);
    this.theArray[6][15].id = 'endBox6-15'
    this.theArray[6][15].value = 10;
    this.theArray[6][3].id = 'startBox6-3';
    this.theArray[6][3].value = 5;
    this.theDivs = this.theArray
  }

  MouseDown(div) {
    console.log("we ran the function!");
    this.mousedown = true;
    this.clickNhover(div);

  }
  clickNhover(div) {
    if (this.mousedown) {
      if (div.id != 'startBox6-3' && div.id != 'endBox6-15') {
        var id = div.id;
        var random = id.split('-');
        var left = random[0].split('Box');
        var parse = left[1]
        var x = parseInt(parse);
        var parse = random[1]
        var y = parseInt(parse);
        if ((document.querySelector(`#${div.id}`) as HTMLElement).style.background == "red") {
          (document.querySelector(`#${div.id}`) as HTMLElement).style.background = "white";
          this.theArray[x][y].value = 0;
        }
        else {
          (document.querySelector(`#${div.id}`) as HTMLElement).style.background = "red";
          console.log((document.querySelector(`#${div.id}`) as HTMLElement));
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
    if (foundit == false) {
      //we move upwards first
      if (x > 0) {
        if (ArrayofObjects[x - 1][y].value == 0 && ArrayofObjects[x - 1][y].hasVisited == 'false') {
          ArrayofObjects[x - 1][y].hasVisited = 'true';
          ArrayofObjects[x - 1][y].count = count + 1;
          (document.querySelector(`#babyBox${x - 1}-${y}`) as HTMLElement).style.background = "purple";
          array.push([x - 1, y])
          foundit = this.SearchAround(ArrayofObjects, x - 1, y, count + 1, array, foundit)
        }
        if (ArrayofObjects[x - 1][y].value == 2) {
          console.log('we hit a wall, waht do we do?');
        }
        if (ArrayofObjects[x - 1][y].value == 10 && ArrayofObjects[x - 1][y].hasVisited == 'false') {
          foundit = true;
          ArrayofObjects[x - 1][y].finalArray = array;
          console.log('we found it!!!!', x - 1, y, array, foundit)
          return foundit;
        }
      }
      ////now we do y+1, moving to the right
      if (foundit == false) {
        if (y < ArrayofObjects[x].length - 1) {
          if (ArrayofObjects[x][y + 1].value == 0 && ArrayofObjects[x][y + 1].hasVisited == 'false') {
            ArrayofObjects[x][y + 1].hasVisited = 'true';
            ArrayofObjects[x][y + 1].count = count + 1;
            array.push([x, y + 1]);
            (document.querySelector(`#babyBox${x}-${y + 1}`) as HTMLElement).style.background = "purple";
            foundit = this.SearchAround(ArrayofObjects, x, y + 1, count + 1, array, foundit)
          }
          if (ArrayofObjects[x][y + 1].value == 2) {
            console.log('we hit a wall, waht do we do?')

          }
          if (ArrayofObjects[x][y + 1].value == 10 && ArrayofObjects[x][y + 1].hasVisited == 'false') {
            foundit = true;
            ArrayofObjects[x][y + 1].finalArray = array;
            console.log('we found it!!!!', x, y + 1, array, foundit);

            return foundit;
          }
        }
      }
      ////now we do x + 1, moving down
      if (foundit == false) {
        if (x < ArrayofObjects.length - 1) {
          if (ArrayofObjects[x + 1][y].value == 0 && ArrayofObjects[x + 1][y].hasVisited == 'false') {
            ArrayofObjects[x + 1][y].hasVisited = 'true';
            ArrayofObjects[x + 1][y].count = count + 1;
            array.push([x + 1, y]);
            (document.querySelector(`#babyBox${x + 1}-${y}`) as HTMLElement).style.background = "purple";
            foundit = this.SearchAround(ArrayofObjects, x + 1, y, count + 1, array, foundit)
          }
          if (ArrayofObjects[x + 1][y].value == 2) {
            console.log('we hit a wall, waht do we do?')
          }
          if (ArrayofObjects[x + 1][y].value == 10 && ArrayofObjects[x + 1][y].hasVisited == 'false') {
            foundit = true;
            ArrayofObjects[x + 1][y].finalArray = array;
            console.log('we found it!!!!', x + 1, y, array, foundit)
            return foundit;
          }
        }

      }
      ////now we do y+1, moving to the left
      if (foundit == false) {
        if (y > 0) {
          if (ArrayofObjects[x][y - 1].value == 0 && ArrayofObjects[x][y - 1].hasVisited == 'false') {
            ArrayofObjects[x][y - 1].hasVisited = 'true';
            ArrayofObjects[x][y - 1].count = count + 1;
            array.push([x, y - 1]);
            (document.querySelector(`#babyBox${x}-${y - 1}`) as HTMLElement).style.background = "purple";
            foundit = this.SearchAround(ArrayofObjects, x, y - 1, count + 1, array, foundit)
          }
          if (ArrayofObjects[x][y - 1].value == 2) {
            console.log('we hit a wall, waht do we do?')
          }
          if (ArrayofObjects[x][y - 1].value == 10 && ArrayofObjects[x][y - 1].hasVisited == 'false') {
            foundit = true;
            ArrayofObjects[x][y - 1].finalArray = array;
            console.log('we found it!!!!', x, y - 1, array, foundit)
            return foundit;
          }
        }
      }
    }
    return;
  }
  GoHome(ArrayofObjects, xCoordinate, yCoordinate, count, array, foundit) {
    if (foundit == null) {
      foundit = false;
    }
    if (foundit == true) {
      return;
    }
    if (array == null) {
      array = [];
    }
    this.SearchAround(ArrayofObjects, xCoordinate, yCoordinate, count, array, foundit);
    var anArray = ArrayofObjects[6][15].finalArray;
    console.log("here is the array!", anArray);
    var blah = 3000

    for (let x = 0; x < anArray.length; x++) {
      this.timeout(anArray, x);
    }

  }
  timeout(anArray, i) {
    if (i == 0) {
      var blah = 250;
    }
    else {
      var blah = 250 * (i + 1);
    }
    setTimeout(() => {
      (document.querySelector(`#babyBox${anArray[i][0]}-${anArray[i][1]}`) as HTMLElement).style.background = "yellow";
    }, blah);
  }
}
