import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [CardComponent, CardsComponent],
  imports: [CommonModule, CoreModule],
  exports: [CardsComponent],
})
export class CardModule {}
