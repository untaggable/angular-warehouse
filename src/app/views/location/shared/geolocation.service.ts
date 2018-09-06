import { Injectable } from '@angular/core';

import {
  Observer,
  Observable
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GeolocationService {
  public getCurrentPosition(): Observable<Position> {
    return Observable.create((observer: Observer<Position>) => {
      // Invokes getCurrentPosition method of Geolocation API.
      navigator.geolocation.getCurrentPosition(
          (position: Position) => {
            observer.next(position);
            observer.complete();
          },
          (error: PositionError) => {
            console.log('Geolocation service: ' + error.message);
            observer.error(error);
          }
      );
    });
  }
}
