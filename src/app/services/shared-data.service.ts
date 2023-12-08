import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }
  private events: Map<string, EventEmitter<any>> = new Map();

  createEvent(id: string) {

    this.events.set(id, new EventEmitter<any>());
    console.log('event created', id)
  }

  sendData(id: string, data: any) {
    this.events.get(id)?.emit(data);
    console.log('event sent', id, data)
  }

  getEvent(id: string): EventEmitter<any> | undefined {
    console.log('event recieved', id)
    return this.events.get(id);
  }
}
