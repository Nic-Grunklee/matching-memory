import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardInfo, CardTypes } from 'src/app/card/cards';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  //Thanks to https://github.com/thisiszoaib/angular-memory-game for the methods to handle matching and the animations of the cards
  cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  cardColors = [
    'blue',
    'red',
    'green',
    'yellow',
    'purple',
    'orange',
    'white',
    'black',
    'pink',
  ];

  cards: CardInfo[] = [];

  flippedCards: CardInfo[] = [];

  matchedCount = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.setupCards();
  }

  setupCards(): void {
    this.cards = [];
    this.cardColors.forEach((value) => {
      const cardData: CardInfo = {
        value,
        state: 'default',
        cardType: CardTypes.COLOR,
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }
    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.value === cardTwo.value ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        // if (this.matchedCount === this.cardImages.length) {
        //   const dialogRef = this.dialog.open(RestartDialogComponent, {
        //     disableClose: true
        //   });

        //   dialogRef.afterClosed().subscribe(() => {
        //     this.restart();
        //   });
        // }
      }
    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }
}
