import { Component, OnInit } from '@angular/core';
import {IssueService} from '../../issue.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(private issueService: IssueService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      responsible: ['', Validators.required],
      description: ['', Validators.required],
      severity: ['', Validators.required]
    });
  }

  addIssue(title, responsible, description, severity) {
    this.issueService.addIssue(title, responsible, description, severity)
      .subscribe(() => this.router.navigateByUrl('/list'));
  }

  ngOnInit() {
  }

}
