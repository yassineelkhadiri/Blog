import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css'],
})
export class BasicinfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSave(form: NgForm) {
    console.log(form.value);
  }
}
