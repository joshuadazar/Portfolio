import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scroll: boolean = false;

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrolling, true)
  }

  scrolling = (s: any) => {
    let sc = s.target.scrollingElement.scrollTop;
    if (sc >= 200) {
      this.scroll = true;
      this.layoutService.setAddPaddingSubject(true);
    }
    else {
      this.scroll = false;
      this.layoutService.setAddPaddingSubject(false);
    }
  }

  resetScroll = () => {
    window.scroll(0, 0)
  }

}
