import {Component, Input} from "@angular/core";

@Component({
  selector: 'carouselo-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true
})
export class CardComponent {

  @Input() imageSource: string = '';
}
