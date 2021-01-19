import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, CardModule],
  exports: [GameComponent],
})
export class GameModule {}
