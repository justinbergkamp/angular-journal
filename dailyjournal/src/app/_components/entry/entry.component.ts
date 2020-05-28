import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EntryService } from '../../_services/entry.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SubmitDialogComponent} from '../submit-dialog/submit-dialog.component'

export interface DialogData {
  animal: string;
  name: string;
}


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
  tickInterval = 1;

  day : string;
  time : string;
  prompt : string;
  initMoodVal = 3;
  mood = Mood[this.initMoodVal]
  dateToday: number = Date.now();
  submitted: boolean = false;

  animal: string;
name: string;

  wordCount: any = 0 ;
  @ViewChild("entryText") text: ElementRef;
  words: any = 0;
  wordCounter() {
    this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }


  entryForm = new FormGroup({
    content: new FormControl('',Validators.required),
    slider: new FormControl (this.initMoodVal)
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entryService: EntryService,
    private datePipe: DatePipe,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    let date = this.route.snapshot.paramMap.get('date');
    let mode = this.route.snapshot.paramMap.get('mode')


    this.day = this.datePipe.transform(this.dateToday, 'EEEE');
    let period = +(this.datePipe.transform(this.dateToday, 'H'))
    if(period >= 21 || period < 4){
      this.time = "night"
    }else if (period >= 4 &&  period < 12){
      this.time = "morning"
    }else if(period >= 12 ||  period < 17){
      this.time = "afternoon"
    }else if(period >= 17 ||  period < 21){
      this.time = "evening"
    }

    this.entryService.getPrompt().subscribe((response) => {
      this.prompt = response
    });

  }

  openDialog(): void {
  const dialogRef = this.dialog.open(SubmitDialogComponent, {
    width: '250px',
    data: {name: this.name, animal: this.animal}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}

  onSliderChange(event) {
    this.mood = Mood[event.value]
  }

  onSubmit() {
    this.submitted = true;
    this.openDialog()
    console.warn(this.entryForm.value);
    console.warn(this.entryForm.controls.content.value);
    console.warn(this.entryForm.controls.slider.value);
  }

}
