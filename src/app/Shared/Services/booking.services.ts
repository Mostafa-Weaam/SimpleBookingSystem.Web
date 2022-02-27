import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateBookingForm } from '../Models/booking-model'

export class BookingService {
    constructor(
      private httpClient: HttpClient
    ) {}


    getResources() {
        return this.httpClient.get(
          environment.bookingURL + '/Resource/GetResources?' 
        );
    }

    saveBooking(booking: CreateBookingForm) {
      return this.httpClient.post(
        environment.bookingURL + '/Booking/CreateBooking',
        booking
      );
    }
}