import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  teammembers = [
    {
    name: 'Sántha-Gősi Réka',
    title: 'Frontend Developer',
    picture: '/assets/Réka.png',
    github: 'https://bit.ly/2U2iftn',
    linkedin: 'https://bit.ly/2HYiTRu',
    },
    {
      name: 'Szendrei Lili',
      title: 'Backend Developer',
      picture: '/assets/Lili.png',
      github: 'https://bit.ly/2U2O5GK',
      linkedin: 'https://bit.ly/2Wjy8JL',
    },
    {
      name: 'Bakó Farkas',
      title: 'Backend Developer',
      picture: '/assets/Farkas.png',
      github: 'https://bit.ly/2G16qM1',
      linkedin: 'https://bit.ly/2K0CZxp',
    },
    {
      name: 'Kalamár Ábel',
      title: 'Frontend Developer',
      picture: '/assets/Ábel.png',
      github: 'https://bit.ly/2Se0uFQ',
      linkedin: 'https://bit.ly/2RU49cD',
    },
    {
      name: 'Szél Márton',
      title: 'Frontend Developer',
      picture: '/assets/Marci.png',
      github: 'https://bit.ly/2RUJsNG',
      linkedin: 'https://bit.ly/2sQiIz0',
    },
  ];

  constructor() { }

  ngOnInit() {
  }


}
