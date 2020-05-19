import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.sass']
})
export class EntryComponent implements OnInit {

  entryForm = new FormGroup({
    date: new FormControl('', Validators.required),
    content: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.entryForm.value);
}

}
