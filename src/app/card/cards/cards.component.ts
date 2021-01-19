import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardInfo } from '../cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input() cards: CardInfo[] | undefined;
  @Output() cardClicked = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
