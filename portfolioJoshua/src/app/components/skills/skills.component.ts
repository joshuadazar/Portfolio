import { Component, OnInit } from '@angular/core';
import { Iskills } from '../../layout/models/iskills'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public imageSkills: string = '../../../assets/images/skills.jpg'

  public skillsArr: Array<Iskills> = [
    {
      title: 'Javascript and Typescript',
      abbr: 'JS',
      image: this.imageSkills,
      description: "I've worked using Vanilla JS ES6 and further including: POO, and functional definitions even integrations with libraries and Typescript for many projects including Backend API's ",
      state: true
    },
    {
      title: 'CSS and Layout',
      abbr: 'UI',
      image: this.imageSkills,
      description: 'Good experience creating layouts using BEM flexbox, Grid, also implements pre-processors (SASS, LESS) and layout libraries (Bootstrap, MaterialCSS, MetroUI) ',
      state: false
    },
    {
      title: 'Angular',
      abbr: 'Ng',
      image: this.imageSkills,
      description: "Angular is my favorite framework ever because full Package!, I had the opportunity to create SPA solutions including extra features (Rxjs/Authentication/API Mgnt/Lazzy Loading/State Mgnt/)",
      state: false
    },
    {
      title: 'React',
      abbr: 'Rjs',
      image: this.imageSkills,
      description: "React is awsome, today I keep learning more  about that progressive library, I was integrate with few projects in specific features and hope using it more in the future...",
      state: false
    },
    {
      title: 'Node/Express',
      abbr: 'Njs',
      image: this.imageSkills,
      description: "I using Node in Front-end with package manager Webpack, npm and few utilities. In backend I was create few solutions implementing API apps with express and DB interactions ",
      state: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleCard(skill: Iskills) {
    this.skillsArr.map(item => {
      if (item.abbr === skill.abbr) {
        item.state = true;
      } else {
        item.state = false;
      }
    });


  }

}
