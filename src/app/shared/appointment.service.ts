import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Appointment) {
    return this.bookingListRef.push({
      nombre: apt.nombre,
      materia: apt.materia,
      calificacion: apt.calificacion
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/notas/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/notas');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Appointment) {
    return this.bookingRef.update({
      nombre: apt.nombre,
      materia: apt.materia,
      calificacion: apt.calificacion
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/notas/' + id);
    this.bookingRef.remove();
  }
}