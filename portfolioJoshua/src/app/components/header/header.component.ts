import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scroll: boolean = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrolling, true)
  }

  scrolling = (s: any) => {
    let sc = s.target.scrollingElement.scrollTop;
    if (sc >= 200) { this.scroll = true }
    else { this.scroll = false }
  }

  resetScroll = () => {
    window.scroll(0, 0)
  }

}
