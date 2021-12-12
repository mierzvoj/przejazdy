<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
=======
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
<<<<<<< HEAD
import { MatToolbarModule } from '@angular/material/toolbar';
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
=======
import { LoginComponent } from "./components/login/login.component";
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ScheduleDialogComponent } from './components/schedule/schedule-dialog/schedule-dialog.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
<<<<<<< HEAD
import { TransitReserveComponent } from './components/transits/transit-reserve/transit-reserve.component';
import { TransitsComponent } from './components/transits/transits.component';
import { UserregComponent } from './components/userreg/userreg.component';
=======
import { TransitsComponent } from './components/transits/transits.component';
import { UserregComponent } from './components/userreg/userreg.component';

>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserregComponent,
    OverviewComponent,
    ScheduleComponent,
    NotfoundComponent,
    ScheduleDialogComponent,
    TransitsComponent,
<<<<<<< HEAD
    TransitReserveComponent,
=======
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
<<<<<<< HEAD
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
=======
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a
