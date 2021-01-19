import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardInfo } from '../cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'perspective(600px) rotateY(180deg)',
        })
      ),
      state(
        'matched',
        style({
          visibility: 'false',
          transform: 'scale(0.05)',
          opacity: 0,
        })
      ),
      transition('default => flipped', [animate('150ms')]),
      transition('flipped => default', [animate('150ms')]),
      transition('* => matched', [animate('100ms')]),
    ]),
  ],
})
export class CardComponent implements OnInit {
  constructor() {}

  @Input() cardInfo: CardInfo | undefined;

  @Output() cardClicked = new EventEmitter();

  ngOnInit(): void {}
}
