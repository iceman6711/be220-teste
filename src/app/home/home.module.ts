import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LogoComponent } from '../components/logo/logo.component';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { BotoesInteracaoComponent } from '../components/botoes-interacao/botoes-interacao.component';
import { CustomSlidesComponent } from '../components/custom-slides/custom-slides.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    LogoComponent,
    AvatarComponent,
    BotoesInteracaoComponent,
    CustomSlidesComponent,
  ],
})
export class HomePageModule {}
