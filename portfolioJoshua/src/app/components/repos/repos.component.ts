import { Component, OnInit } from '@angular/core';
import { ReposService } from 'src/app/layout/services/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  userResponse: any[] = [];
  constructor(private repoService: ReposService) { }

  ngOnInit(): void {
    this.getUserRepos();
  }

  // thead Info (data table)
  settings = {
    columns: {
      git_url: {
        title: 'Git URL'
      },
      language: {
        title: 'Language'
      },

      name: {
        title: 'Repo Name'
      },
      description: {
        title: 'Description'
      },
    },
    actions: false,
    pager: { perPage: 5 }
  };

  getUserRepos(user: string = 'joshuadazar') {
    this.repoService.getUsers(user.trim()).subscribe(data => {
      this.userResponse = data;
    });
  }

}
