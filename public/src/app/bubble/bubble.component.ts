import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {

  theArray = [];

  theDivs: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.buildBoxes();
  }

  Bubblesort(arr, n) {
    if (n == null) {
      n = arr[0].length;
      console.log('n was null!', n);
    }
    if (n === 0) {
      console.log('the array is empty', arr);
      return arr;
    }
    for (let x = 0; x < arr.length; x++) {
      for (let i = 0; i < arr[x].length - 1; i++) {
        console.log(arr[x][i]);
        if (arr[x][i].value > arr[x][i + 1].value) {
          console.log('this is the arr[x][i]', arr[x][i]);
          const temp = arr[x][i].value;
          arr[x][i].value = arr[x][i + 1].value;
          arr[x][i + 1].value = temp;
          console.log(arr);
        }
      }

    }
    n = n - 1;
    this.Bubblesort(arr, n);
  }
  BubblesortStep(arr, n) {
    if (n == null) {
      n = arr[0].length;
      console.log('n was null!', n);
    }
    if (n === 0) {
      console.log('the array is empty', arr);
      return arr;
    }
    for (let x = 0; x < arr.length; x++) {
      for (let i = 0; i < arr[x].length; i++) {
        console.log(arr[x][i]);
        if (arr[x][i].value > arr[x][i + 1].value) {
          console.log('this is the arr[x][i]', arr[x][i]);
          const index = arr[x].length - i;
          setTimeout(() => {
            (document.querySelector(`#box${i - index}`) as HTMLElement).style.background = 'purple';
          }, 500);
          setTimeout(() => {
            (document.querySelector(`#box${i - index + 1}`) as HTMLElement).style.background = 'green';
          }, 500);
          const temp = arr[x][i].value;
          arr[x][i].value = arr[x][i + 1].value;
          arr[x][i + 1].value = temp;
          console.log(arr);
        }
        (document.querySelector(`#box${i}`) as HTMLElement).style.background = 'white';
        (document.querySelector(`#box${i + 1}`) as HTMLElement).style.background = 'white';
      }

    }
    n = n - 1;
    this.Bubblesort(arr, n);
  }
  timeout(i) {
    setTimeout(() => {
      (document.querySelector(`#box${i}`) as HTMLElement).style.background = 'purple';
    }, 1000);
  }
  timeout2(i) {
    setTimeout(() => {
      (document.querySelector(`#box${i}`) as HTMLElement).style.background = 'green';
    }, 1000);
  }

  buildBoxes(rows = 1, cols = 70) {
    for (let i = 0; i < rows; ++i) {
      const row = [];
      for (let j = 0; j < cols; ++j) {
        row.push({ value: Math.floor(Math.random() * 150), id: `box${j}` });
      }
      this.theArray.push(row);
    }
    console.log(this.theArray);
  }
}
