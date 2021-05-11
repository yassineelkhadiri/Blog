import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css'],
})
export class NewpostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onFileChanged(event) {}
  onSave(form: NgForm) {}
}
