import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EntryService } from '../../_services/entry.service';


enum Mood {
  awful = 1,
  bad,
  okay,
  good,
  fantastic
}


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.sass']
})
export class EntryComponent implements OnInit {

  max = 5;
  min = 1;
  step = 1;
  thumbLabel = true;
  tickInterval = 1;

  day : string;
  time : string;
  prompt : string;
  initMoodVal = 3;
  mood = Mood[this.initMoodVal]

  wordCount: any;
  @ViewChild("entryText") text: ElementRef;
  words: any = 0;
  wordCounter() {
    //alert(this.text.nativeElement.value)
    this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }


  entryForm = new FormGroup({
    content: new FormControl('',Validators.required),
    slider: new FormControl (this.initMoodVal)
  });
  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.entryService.getDayOfWeek().subscribe((response) => {
      this.day = response
    });
    this.entryService.getTimeOfDay().subscribe((response) => {
      this.time = response
    });
    this.entryService.getPrompt().subscribe((response) => {
      this.prompt = response
    });

  }


  onSliderChange(event) {
    this.mood = Mood[event.value]
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.entryForm.value);
    console.warn(this.entryForm.controls.content.value);
    console.warn(this.entryForm.controls.slider.value);
  }

}
