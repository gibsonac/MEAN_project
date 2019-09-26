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
        console.log(this.theArray);
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
  SearchBest(start, end) {
    console.log(start)
    console.log(end)
    // if (foundIt == null) {
    //   foundIt = false;
    // }
    // if (foundIt == true) {
    //   return foundIt;
    // }
    var arrayPath = [];
    while (start != end) {
      //if the end goal is higher on the grid then my start point, move up
      if (start[0] > end[0]) {
        while (start[0] > end[0]) {
          console.log("!!!!!!!!!!!!", this.theArray[start[0] - 1][start[1]].value);
          if (this.theArray[start[0] - 1][start[1]].value == 2) {
            //if you hit a wall, loop left and right to see which is faster to get past the wall.
            var x = start[0];
            var y = start[1];
            var countLeft = 0;
            var countRight = 0;
            while (this.theArray[x - 1][y].value == 2 && this.theArray[x][y + 1].value != 2) {
              y++
              countRight++
              (document.querySelector(`#smallBox${x}${y}`) as HTMLElement).style.background = "purple";
            }
            var x = start[0];
            var y = start[1];
            while (this.theArray[x - 1][y].value == 2 && this.theArray[x][y - 1].value != 2) {
              y--
              countLeft++
              (document.querySelector(`#smallBox${x}${y}`) as HTMLElement).style.background = "purple";
            }
            if (countLeft <= countRight) {
              start[0] += 1;
              start[1] -= countLeft;
            }
            if (countLeft > countRight) {
              start[0] += 1;
              start[1] += countRight;
            }
            // start[0] -= 1;
            // start[1] -= 1;
            continue;
          }
          arrayPath.push([start[0] - 1, start[1]]);
          start[0] -= 1;
          console.log(arrayPath)
          var location = start[0] * 10;
          location = + start[1]
          var ending = end[0] * 10;
          ending += end[1];
          if (location != ending) {
            (document.querySelector(`#smallBox${start[0]}${start[1]}`) as HTMLElement).style.background = "purple";
          }
        }
      }
      //if the end goal is to the left of my start point, move left
      if (start[1] > end[1]) {
        while (start[1] > end[1]) {
          console.log("@@@@@@@@@", this.theArray[start[0]][start[1] - 1].value);
          if (this.theArray[start[0]][start[1] - 1].value == 2) {
            //if you hit a wall, loop up and down to see which is faster to get past the wall.
            var x = start[0];
            var y = start[1];
            var countUp = 0;
            var countDown = 0;
            while (this.theArray[x][y + 1].value == 2 && this.theArray[x + 1][y].value != 2) {
              x++
              countDown++
              (document.querySelector(`#smallBox${x}${y}`) as HTMLElement).style.background = "purple";
            }
            var x = start[0];
            var y = start[1];
            while (this.theArray[x][y + 1].value == 2 && this.theArray[x - 1][y].value != 2) {
              x--
              countUp++
              (document.querySelector(`#smallBox${x}${y}`) as HTMLElement).style.background = "purple";
            }
            if (countUp <= countDown) {
              start[0] -= countUp;
              start[1] += 1;
            }
            if (countUp > countDown) {
              start[0] += countDown;
              start[1] += 1;
            }
            // start[0] -= 1;
            // start[1] -= 1;
            continue;
          }
          arrayPath.push([start[0], start[1] - 1])
          start[1] -= 1;
          console.log(arrayPath)
          var location = start[0] * 10;
          location = + start[1]
          var ending = end[0] * 10;
          ending += end[1];
          if (location != ending) {
            (document.querySelector(`#smallBox${start[0]}${start[1]}`) as HTMLElement).style.background = "purple";
          }
        }
      }
      //if the end goal is below my start point, move down
      if (start[0] < end[0]) {
        while (start[0] < end[0]) {
          console.log("##########", this.theArray[start[0] + 1][start[1]].value);
          if (this.theArray[start[0] + 1][start[1]].value == 2) {
            //if you hit a wall, loop left and right to see which is faster to get past the wall.
            var x = start[0];
            var y = start[1];
            var countLeft = 0;
            var countRight = 0;
            while (this.theArray[x + 1][y].value == 2 && this.theArray[x][y + 1].value != 2) {
              y++
              countRight++
              (document.querySelector(`#smallBox${x}${y}`) as HTMLElement).style.background = "purple";
            }
            var x = start[0];
            var y = start[1];
            while (this.theArray[x + 1][y].value == 2 && this.theArray[x][y - 1].value != 2) {
              y--
              countLeft++
              (document.querySelector(`#smallBox${x}${y}`) as HTMLElement).style.background = "purple";
            }
            if (countLeft <= countRight) {
              start[0] -= 1;
              start[1] -= countLeft;
            }
            if (countLeft > countRight) {
              start[0] -= 1;
              start[1] += countRight;
            }
            // start[0] -= 1;
            // start[1] -= 1;
            continue;
          }
          arrayPath.push([start[0] + 1, start[1]])
          start[0] += 1;
          console.log(arrayPath)
          var location = start[0] * 10;
          location = + start[1]
          var ending = end[0] * 10;
          ending += end[1];
          if (location != ending) {
            (document.querySelector(`#smallBox${start[0]}${start[1]}`) as HTMLElement).style.background = "purple";
          }
        }
      }
      //if the end goal is to the right of my start point, move right
      if (start[1] < end[1]) {
        while (start[1] < end[1]) {
          console.log("$$$$$$$$$", this.theArray[start[0]][start[1] + 1].value);
          if (this.theArray[start[0]][start[1] + 1].value == 2) {
            //if you hit a wall, loop up to see how high you have to go before you get past it. Then loop down to see which is faster
            var x = start[0];
            var y = start[1];
            var countUp = 0;
            var countDown = 0;
            while (this.theArray[x][y + 1].value == 2 && this.theArray[x + 1][y].value != 2) {
              x++
              countDown++
              (document.querySelector(`#smallBox${x}${y}`) as HTMLElement).style.background = "purple";
            }
            var x = start[0];
            var y = start[1];
            while (this.theArray[x][y + 1].value == 2 && this.theArray[x - 1][y].value != 2) {
              x--
              countUp++
              (document.querySelector(`#smallBox${x}${y}`) as HTMLElement).style.background = "purple";
            }
            if (countUp <= countDown) {
              start[0] -= countUp;
              start[1] -= 1;
            }
            if (countUp > countDown) {
              start[0] += countDown;
              start[1] -= 1;
            }
            // start[0] -= 1;
            // start[1] -= 1;
            continue;
          }
          arrayPath.push([start[0], start[1] + 1]);
          start[1] += 1;
          console.log(arrayPath)
          var location = start[0] * 10;
          location = + start[1]
          var ending = end[0] * 10;
          ending += end[1];
          if (location != ending) {
            (document.querySelector(`#smallBox${start[0]}${start[1]}`) as HTMLElement).style.background = "purple";
          }
        }
      }
    }
    // if (start[0] != end[0] || start[1] != end[1]) {
    //   this.SearchBest([start[0], start[1]], [end[0], end[1]])
    // }
    console.log("we found it!");
    return;
    // if (start[0] == end[0] && start[1] == end[1]) {
    //   // foundIt = true;
    //   console.log("found it!");
    //   var blah:Object;
    //   blah['start0']=start[0];
    //   blah['start1']=start[1];
    //   blah['end0']=end[0];
    //   blah['end1']=end[1];
    //   return blah;
    // }
    // else {
    //   console.log([start[0], start[1]], [end[0], end[1]]);
    //   // foundIt = this.SearchBest([start[0], start[1]], [end[0], end[1]], foundIt);
    //   var anObject = this.SearchBest([start[0], start[1]], [end[0], end[1]]);
    //   start[0] = anObject.start0;
    //   start[1] = anObject.start1;
    //   end[0] = anObject.end0;
    //   end[1] = anObject.end1;
    //   return anObject;
    // }
  }
}
