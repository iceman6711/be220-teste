import { Component, Input } from '@angular/core';

interface SlideContentInterface {
  hasNewButton: boolean,
  backgroundImage: string,
  buttonLabel?: string,
  buttonDescription?: string,
  showIcon?: boolean,
}

interface MainSlidePropInterface {
  mainTitle?: string,
  mainIcon?: string,
  slides?: SlideContentInterface[]
}

@Component({
  selector: 'app-custom-slides',
  templateUrl: 'custom-slides.component.html',
  styleUrls: ['custom-slides.component.scss'],
})
export class CustomSlidesComponent {
  @Input() slideProp: MainSlidePropInterface;
  constructor() {

    this.slideProp = {};
  }
}
