import { Component } from '@angular/core';
import { LayoutService } from './layout/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolioJoshua';
  public addPaddingState: boolean = false;

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.watchAddPaddingSubject()
  }
  watchAddPaddingSubject() {
    this.layoutService.watchaddPaddingSubject().subscribe(state => {
      this.addPaddingState = state;
    })
  }
}
