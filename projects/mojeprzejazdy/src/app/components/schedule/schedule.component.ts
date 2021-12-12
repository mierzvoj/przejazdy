<<<<<<< HEAD
import { formatDate } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  ScheduleDialogComponent,
  ScheduleDialogData,
} from './schedule-dialog/schedule-dialog.component';
=======
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ScheduleDialogComponent } from './schedule-dialog/schedule-dialog.component';
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
<<<<<<< HEAD
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  private subscription = Subscription.EMPTY;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
=======
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  private subscription = Subscription.EMPTY;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDodajClick(event: Event): void {
<<<<<<< HEAD
    const dialogConfig: MatDialogConfig<ScheduleDialogData> = {
      data: {
        date: new Date(),
        time: formatDate(new Date(), 'HH:mm', 'en-us'),
      },
    };
    const dialogRef = this.dialog.open(ScheduleDialogComponent, dialogConfig);
    this.subscription.unsubscribe();
    this.subscription = dialogRef.afterClosed().subscribe((result) => {
      console.log(`Rezultat: ${result}`);
    });
  }
=======
    const dialogRef = this.dialog.open(ScheduleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Rezultat: ${result}`);
    });
  }

>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
}
