import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV_CONFIG } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Basic } from '../models/common.model';

const endPoints = {
  getFoods: `${ENV_CONFIG.BASE_URL}/foods`
}


@Injectable()
export class FoodService {
  constructor(private http: HttpClient) { }

  public getFoods(): Observable<Basic[]> {
    return this.http.get<Basic[]>(
      endPoints.getFoods
    );
  }
}
