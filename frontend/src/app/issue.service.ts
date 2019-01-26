import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private url = `http://localhost:3000/api`;

  constructor(private http: HttpClient) { }

  get issues() {
    return this.http.get(`${this.url}/issues`);
  }

  getIssueById(id) {
    return this.http.get(`${this.url}/issues/${id}`);
  }

  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.url}/issues`, issue);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.put(`${this.url}/issues/${id}`, issue);
  }

  deleteIssue(id) {
    return this.http.delete(`${this.url}/issues/${id}`);
  }
}
