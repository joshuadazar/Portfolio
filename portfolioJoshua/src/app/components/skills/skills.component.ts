import { Component, OnInit } from '@angular/core';
import { Iskills } from '../../layout/models/iskills'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skillsArr: Array<Iskills> = [
    {
      title: 'Javascript and Typescript',
      abbr: 'JS',
      image: 'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laborum accusantium! Ex reprehenderit nisi, sed accusantium similique blanditiis magni doloremque in dolore necessitatibus inventore voluptates minima eos ad, ullam veritatis!',
      state: true
    },
    {
      title: 'CSS and Layout',
      abbr: 'UI',
      image: 'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg',
      description: 'description UI',
      state: false
    },
    {
      title: 'Angular',
      abbr: 'Ng',
      image: 'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laborum accusantium! Ex reprehenderit nisi, sed accusantium similique blanditiis magni doloremque in dolore necessitatibus inventore voluptates minima eos ad, ullam veritatis!',
      state: false
    },
    {
      title: 'React',
      abbr: 'Rjs',
      image: 'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laborum accusantium! Ex reprehenderit nisi, sed accusantium similique blanditiis magni doloremque in dolore necessitatibus inventore voluptates minima eos ad, ullam veritatis!',
      state: false
    },
    {
      title: 'Node',
      abbr: 'N',
      image: 'https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laborum accusantium! Ex reprehenderit nisi, sed accusantium similique blanditiis magni doloremque in dolore necessitatibus inventore voluptates minima eos ad, ullam veritatis!',
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
