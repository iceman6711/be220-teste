import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public srcLogo = '../../assets/logo.png';
  public avatarSrc = '../../assets/avatar.png';

  public slidePersonal = {
    mainTitle: 'Personal Online',
    mainIcon: 'add-circle-outline',
    slides: [
      {
        hasNewButton: true,
        showIcon: true,
        buttonLabel: 'Novo treino',
        backgroundImage: '../../assets/terra.jpeg',
      },
      {
        hasNewButton: false,
        backgroundImage: '../../assets/terra2.jpeg',
      },
      {
        hasNewButton: false,
        backgroundImage: '../../assets/terra3.jpeg',
      },
    ],
  };
  public slideConteudos = {
    mainTitle: 'Conteúdos',
    slides: [
      {
        hasNewButton: true,
        showIcon: false,
        buttonLabel: 'Em Breve',
        backgroundImage: '../../assets/terra.jpeg',
      }
    ],
  };
  public slideProgramas = {
    mainTitle: 'Programas',
    slides: [
      {
        hasNewButton: false,
        buttonLabel: 'Levantamento de Peso',
        buttonDescription: 'Continue treinando',
        backgroundImage: '../../assets/terra.jpeg',
      },
      {
        hasNewButton: false,
        buttonLabel: 'Treino de costas',
        backgroundImage: '../../assets/terra2.jpeg',
      },
      {
        hasNewButton: false,
        buttonLabel: 'Treino de Peito',
        backgroundImage: '../../assets/terra3.jpeg',
      },
    ],
  };
  constructor() {}
}
