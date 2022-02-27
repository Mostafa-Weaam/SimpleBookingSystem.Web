import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Resource, Resources, CreateBookingForm } from '../app/Shared/Models/booking-model';
import { BookingService } from '../app/Shared/Services/booking.services';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public unsubscribe$ = new Subject();

  title = 'BookingSystem';
  tableData = [];
  displayedColumns = [
    'id',
    'name'
  ];

  constructor(
    private _dialog: MatDialog,
    private _bookingService: BookingService,
  ) {}

  ngOnInit(): void {
      this.getResources();
    }

    getResources(_callback?: void) {
      this._bookingService
        .getResources()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res: Resources) => {
          this.tableData = res.data;
        });
    }
}
