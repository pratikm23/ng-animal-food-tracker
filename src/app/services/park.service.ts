import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Park } from '../models/park.model';
import { Observable } from 'rxjs';
import { ENV_CONFIG } from '../../environments/environment';

const endPoints = {
  getParks: `${ENV_CONFIG.BASE_URL}/parks`
}

@Injectable()
export class ParkService {

  constructor(private http: HttpClient) { }

  public getParks(): Observable<Park[]> {
    return this.http.get<Park[]>(
      endPoints.getParks
    );
  }
}
