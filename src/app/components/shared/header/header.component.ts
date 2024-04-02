import { Component } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

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

  setScroll = (value: number) => {
    window.scroll(0, value)
  }
}
