<<<<<<< HEAD
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ScheduleDialogData {
  date: Date;
  time: string;
}
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  styleUrls: ['./schedule-dialog.component.css']
})
export class ScheduleDialogComponent implements OnInit {

<<<<<<< HEAD
  formGroup: FormGroup = new FormGroup({
    date: new FormControl(),
    time: new FormControl()
  });

  constructor(@Inject(MAT_DIALOG_DATA) private data: ScheduleDialogData) {
    this.formGroup.patchValue(this.data);
  }
=======
  constructor() { }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

  ngOnInit(): void {
  }

<<<<<<< HEAD
  getFormControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

  onClick(): void {
    console.log(this.formGroup.value);
  }
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
}
