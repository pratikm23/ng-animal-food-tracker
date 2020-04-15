import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SavePayload, Meal } from '../models/common.model';
import { ENV_CONFIG } from 'src/environments/environment';
import { Observable } from 'rxjs';

const endPoints = {
  saveMeal: `${ENV_CONFIG.BASE_URL}/save/meal`,
  getMeal: `${ENV_CONFIG.BASE_URL}/meals`,
}

@Injectable()
export class MealsService {

  constructor(private http: HttpClient) { }

  public saveMealPayload(data: SavePayload): Observable<SavePayload> {
    return this.http.post<SavePayload>(
      endPoints.saveMeal,
      data
    );
  }

  public getAllMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(
      endPoints.getMeal
    );
  }
}
