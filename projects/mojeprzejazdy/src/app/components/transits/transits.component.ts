import { Component, OnDestroy, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MatDialog } from '@angular/material/dialog';
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Transit } from '../../model/transit';
import { TransitService } from '../../service/transit.service';
<<<<<<< HEAD
import { TransitReserveComponent } from './transit-reserve/transit-reserve.component';
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

@Component({
  selector: 'app-routes',
  templateUrl: './transits.component.html',
<<<<<<< HEAD
  styleUrls: ['./transits.component.css'],
=======
  styleUrls: ['./transits.component.css']
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
})
export class TransitsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'points', 'valid', 'schedules'];
  dataSource: MatTableDataSource<Transit> = new MatTableDataSource<Transit>();
<<<<<<< HEAD
  activeRow?: Transit;

  private dataSubscription: Subscription = Subscription.EMPTY;
  private dialogSubscription = Subscription.EMPTY;

  constructor(private dataService: TransitService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSubscription = this.dataService
      .fetchData()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
    this.dataSubscription.unsubscribe();
    this.dataSubscription = this.dataService
      .fetchDataFromServer()
      .subscribe((data) => console.log('Data from server', data));
=======
  private dataSubscription: Subscription = Subscription.EMPTY;

  constructor(private dataService: TransitService) { }

  ngOnInit(): void {
    this.dataSubscription = this.dataService.fetchData()
      .subscribe(data => this.dataSource = new MatTableDataSource(data));
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
<<<<<<< HEAD
    this.dialogSubscription.unsubscribe();
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

<<<<<<< HEAD
  onClick(row: Transit): void {
    if (this.activeRow !== row) {
      this.activeRow = row;
      console.log(row);
    }
  }

  onDblClick(row: Transit): void {
    console.log('double click:', row);
  }

  onDetailsClick(row: Transit): void {
    console.log('details clicked:', row);
  }

  onReserveClick(row: Transit): void {
    const dialogRef = this.dialog.open(TransitReserveComponent);

    this.dialogSubscription = dialogRef.afterClosed().subscribe((result) => {
      console.log(`Rezultat: ${result}`);
    });
  }
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
}
