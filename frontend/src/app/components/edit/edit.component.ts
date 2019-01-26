import {Component, OnInit} from '@angular/core';
import {IssueService} from '../../issue.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup;
  id: String;
  issue: any;

  constructor(private issueService: IssueService, private fb: FormBuilder,
              private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      responsible: ['', Validators.required],
      description: ['', Validators.required],
      severity: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.issueService.getIssueById(this.id).subscribe(issue => {
        this.issue = issue;
        this.form.get('title').setValue(this.issue.title);
        this.form.get('responsible').setValue(this.issue.responsible);
        this.form.get('description').setValue(this.issue.description);
        this.form.get('severity').setValue(this.issue.severity);
        this.form.get('status').setValue(this.issue.status);
      });
    });
  }

  updateIssue(title, responsible, description, severity, status) {
    this.issueService.updateIssue(this.id, title, responsible, description, severity, status)
      .subscribe(() => {
        this.snackBar.open(`Issue updated successfully`, 'OK', {
          duration: 3000
        });
      });
  }

}
