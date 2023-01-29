import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren('carouselItems') carouselItems: QueryList<ElementRef> | undefined;
  @ViewChild('track') carouselTrack: ElementRef | undefined;

  items = [{
    imageSource: '0',
    content: 'This is the first image'
  },
    {
      imageSource: '1',
      content: 'This is the second image',
    },
    {
      imageSource: '2',
      content: 'This is the third image',
    },
    {
      imageSource: '3',
      content: 'This is the fourth image',
    },
    {
      imageSource: '4',
      content: 'This is the fifth image',
    }
    ,
    {
      imageSource: '5',
      content: 'This is the sixth image',
    },
    {
      imageSource: '6',
      content: 'This is image seven',
    }
  ];

  moveForward = false;
  moveBackwards = false;

  private SLOTS = 5;
  private offset = 1;

  backwards() {
    this.moveBackwards = true;

    setTimeout(() => {
      this.moveBackwards = false;
      const firstItem = this.items.shift();
      if (firstItem !== undefined) {
        this.items = [...this.items, firstItem];
      }
    }, 500);

  }

  forward() {
    this.moveForward = true;

    setTimeout(() => {
      this.moveForward = false;
      const lastItem = this.items.pop();
      if (lastItem !== undefined) {
        this.items = [lastItem, ...this.items];
      }
    }, 500);

  }

  ngAfterViewInit(): void {
  }

}
