export interface CardInfo {
  value: any;
  state: 'default' | 'flipped' | 'matched';
  cardType: CardTypes;
}

export enum CardTypes {
  NUMBER,
  COLOR,
  SHAPE,
}
