import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.sass']
})
export class EntryComponent implements OnInit {

  day = "Monday";
  time = "evening";
  prompt = "What are some things you're grateful for?"

  wordCount: any;
  @ViewChild("entryText") text: ElementRef;
  words: any = 0;
  wordCounter() {
    //alert(this.text.nativeElement.value)
    this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }


  entryForm = new FormGroup({
    content: new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.entryForm.value);
  }

}
