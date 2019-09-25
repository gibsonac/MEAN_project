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
    // if (array[array.length - 1] == [4, 8]) {
    //   return;
    // }
    if (foundit == false) {
      //we move upwards first
      if (x > 0) {
        if (ArrayofObjects[x - 1][y].value == 0 && ArrayofObjects[x - 1][y].hasVisited == "false") {
          ArrayofObjects[x - 1][y].hasVisited = "true";
          ArrayofObjects[x - 1][y].count = count + 1;
          (document.querySelector(`#babyBox${x - 1}${y}`) as HTMLElement).style.background = "purple";
          array.push([x - 1, y])
          foundit = this.SearchAround(ArrayofObjects, x - 1, y, count + 1, array, foundit)
        }
        if (ArrayofObjects[x - 1][y].value == 2) {
          console.log("we hit a wall, waht do we do?");
        }
        if (ArrayofObjects[x - 1][y].value == 10 && ArrayofObjects[x - 1][y].hasVisited == "false") {
          foundit = true;
          ArrayofObjects[x - 1][y].finalArray = array;
          console.log("we found it!!!!", x - 1, y, array, foundit)
          return foundit;
        }
      }
      ////now we do y+1, moving to the right
      if (foundit == false) {
        if (y < ArrayofObjects[x].length - 1) {
          if (ArrayofObjects[x][y + 1].value == 0 && ArrayofObjects[x][y + 1].hasVisited == "false") {
            ArrayofObjects[x][y + 1].hasVisited = "true";
            ArrayofObjects[x][y + 1].count = count + 1;
            array.push([x, y + 1]);
            (document.querySelector(`#babyBox${x}${y + 1}`) as HTMLElement).style.background = "purple";
            foundit = this.SearchAround(ArrayofObjects, x, y + 1, count + 1, array, foundit)
          }
          if (ArrayofObjects[x][y + 1].value == 2) {
            console.log("we hit a wall, waht do we do?")

          }
          if (ArrayofObjects[x][y + 1].value == 10 && ArrayofObjects[x][y + 1].hasVisited == "false") {
            foundit = true;
            ArrayofObjects[x][y + 1].finalArray = array;
            console.log("we found it!!!!", x, y + 1, array, foundit);

            return foundit;
          }
        }
      }
      ////now we do x + 1, moving down
      if (foundit == false) {
        if (x < ArrayofObjects.length - 1) {
          if (ArrayofObjects[x + 1][y].value == 0 && ArrayofObjects[x + 1][y].hasVisited == "false") {
            ArrayofObjects[x + 1][y].hasVisited = "true";
            ArrayofObjects[x + 1][y].count = count + 1;
            array.push([x + 1, y]);
            (document.querySelector(`#babyBox${x + 1}${y}`) as HTMLElement).style.background = "purple";
            foundit = this.SearchAround(ArrayofObjects, x + 1, y, count + 1, array, foundit)
          }
          if (ArrayofObjects[x + 1][y].value == 2) {
            console.log("we hit a wall, waht do we do?")
          }
          if (ArrayofObjects[x + 1][y].value == 10 && ArrayofObjects[x + 1][y].hasVisited == "false") {
            foundit = true;
            ArrayofObjects[x + 1][y].finalArray = array;
            console.log("we found it!!!!", x + 1, y, array, foundit)
            return foundit;
          }
        }

      }
      ////now we do y+1, moving to the left
      if (foundit == false) {
        if (y > 0) {
          if (ArrayofObjects[x][y - 1].value == 0 && ArrayofObjects[x][y - 1].hasVisited == "false") {
            ArrayofObjects[x][y - 1].hasVisited = "true";
            ArrayofObjects[x][y - 1].count = count + 1;
            array.push([x, y - 1]);
            (document.querySelector(`#babyBox${x}${y - 1}`) as HTMLElement).style.background = "purple";
            foundit = this.SearchAround(ArrayofObjects, x, y - 1, count + 1, array, foundit)
          }
          if (ArrayofObjects[x][y - 1].value == 2) {
            console.log("we hit a wall, waht do we do?")
          }
          if (ArrayofObjects[x][y - 1].value == 10 && ArrayofObjects[x][y - 1].hasVisited == "false") {
            foundit = true;
            ArrayofObjects[x][y - 1].finalArray = array;
            console.log("we found it!!!!", x, y - 1, array, foundit)
            return foundit;
          }
        }
      }
    }
    // if (foundit == false) {
    //   //we move upwards first
    //   if (x > 0) {
    //     if (ArrayofObjects[x - 1][y].value == 0) {
    //       ArrayofObjects[x - 1][y].count = count + 1;
    //       (document.querySelector(`#babyBox${x - 1}${y}`) as HTMLElement).style.background = "purple";
    //       array.push([x - 1, y])
    //       foundit = this.SearchAround(ArrayofObjects, x - 1, y, count + 1, array, foundit)
    //     }
    //     if (ArrayofObjects[x - 1][y].value == 2) {
    //       console.log("we hit a wall, waht do we do?");
    //     }
    //     if (ArrayofObjects[x - 1][y].value == 10) {
    //       foundit = true;
    //       ArrayofObjects[x - 1][y].finalArray = array;
    //       console.log("we found it!!!!", x - 1, y, array, foundit)
    //       return foundit;
    //     }
    //   }
    //   ////now we do y+1, moving to the right
    //   if (foundit == false) {
    //     if (y < ArrayofObjects[x].length - 1) {
    //       if (ArrayofObjects[x][y + 1].value == 0) {
    //         ArrayofObjects[x][y + 1].count = count + 1;
    //         array.push([x, y + 1]);
    //         (document.querySelector(`#babyBox${x}${y + 1}`) as HTMLElement).style.background = "purple";
    //         foundit = this.SearchAround(ArrayofObjects, x, y + 1, count + 1, array, foundit)
    //       }
    //       if (ArrayofObjects[x][y + 1].value == 2) {
    //         console.log("we hit a wall, waht do we do?")

    //       }
    //       if (ArrayofObjects[x][y + 1].value == 10) {
    //         foundit = true;
    //         ArrayofObjects[x][y + 1].finalArray = array;
    //         console.log("we found it!!!!", x, y + 1, array, foundit);

    //         return foundit;
    //       }
    //     }
    //   }
    //   ////now we do x + 1, moving down
    //   if (foundit == false) {
    //     if (x < ArrayofObjects.length - 1) {
    //       if (ArrayofObjects[x + 1][y].value == 0) {
    //         ArrayofObjects[x + 1][y].count = count + 1;
    //         array.push([x + 1, y]);
    //         (document.querySelector(`#babyBox${x + 1}${y}`) as HTMLElement).style.background = "purple";
    //         foundit = this.SearchAround(ArrayofObjects, x + 1, y, count + 1, array, foundit)
    //       }
    //       if (ArrayofObjects[x + 1][y].value == 2) {
    //         console.log("we hit a wall, waht do we do?")
    //       }
    //       if (ArrayofObjects[x + 1][y].value == 10) {
    //         foundit = true;
    //         ArrayofObjects[x + 1][y].finalArray = array;
    //         console.log("we found it!!!!", x + 1, y, array, foundit)
    //         return foundit;
    //       }
    //     }

    //   }
    //   ////now we do y+1, moving to the left
    //   if (foundit == false) {
    //     if (y > 0) {
    //       if (ArrayofObjects[x][y - 1].value == 0) {
    //         ArrayofObjects[x][y - 1].count = count + 1;
    //         array.push([x, y - 1]);
    //         (document.querySelector(`#babyBox${x}${y - 1}`) as HTMLElement).style.background = "purple";
    //         foundit = this.SearchAround(ArrayofObjects, x, y - 1, count + 1, array, foundit)
    //       }
    //       if (ArrayofObjects[x][y - 1].value == 2) {
    //         console.log("we hit a wall, waht do we do?")
    //       }
    //       if (ArrayofObjects[x][y - 1].value == 10) {
    //         foundit = true;
    //         ArrayofObjects[x][y - 1].finalArray = array;
    //         console.log("we found it!!!!", x, y - 1, array, foundit)
    //         return foundit;
    //       }
    //     }
    //   }
    // }
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
    var anArray = ArrayofObjects[4][8].finalArray;
    console.log("here is the array!", anArray);
    // var num = 0;
    // this.timeout(anArray, num);
    var blah = 3000
    // setTimeout(() => {
    for (let x = 0; x < anArray.length; x++) {
      this.timeout(anArray, x);
      // blah *= x;
      // setTimeout(function (y) {
      //   console.log(anArray[y]);
      //   (document.querySelector(`#babyBox${anArray[y][0]}${anArray[y][1]}`) as HTMLElement).style.background = "yellow";
      // }, blah, x);
    }
    // }, 3000);
  }
  // timeout(array, num) {
  //   if (num < array.length) {
  //     setTimeout(function () {
  //       console.log(array[num]);
  //       (document.querySelector(`#babyBox${array[num][0]}${array[num][1]}`) as HTMLElement).style.background = "yellow";
  //       num++;
  //       this.timeout(num, array);
  //     }, 1000);
  //   }
  // }
  timeout(anArray, i) {
    if (i == 0) {
      var blah = 250;
    }
    else {
      var blah = 250 * (i + 1);
    }
    setTimeout(() => {
      (document.querySelector(`#babyBox${anArray[i][0]}${anArray[i][1]}`) as HTMLElement).style.background = "yellow";
    }, blah);
  }
}
