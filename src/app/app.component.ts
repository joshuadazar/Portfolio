import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/shared/header/header.component";
import { CommonModule } from '@angular/common';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, CommonModule]
})
export class AppComponent {
  title = 'joshua-portfolio';
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
