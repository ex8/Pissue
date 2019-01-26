import { Component, OnInit } from '@angular/core';
import {IssueService} from '../../issue.service';
import {Issue} from '../../issue.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: Issue[];
  displayedColumns = ['title', 'responsible', 'severity', 'status', 'actions'];

  constructor(private issueService: IssueService, private router: Router) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.issueService.issues.subscribe((issues: Issue[]) => {
      this.issues = issues;
      console.log(`Retrieved issues`);
    });
  }

  deleteIssue(id) {
    this.issueService.deleteIssue(id)
      .subscribe(() => {
        this.getIssues();
        console.log(`Deleted issue ${id}`);
      });
  }

}
