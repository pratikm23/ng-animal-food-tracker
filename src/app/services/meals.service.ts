import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SavePayload } from '../models/common.model';
import { ENV_CONFIG } from 'src/environments/environment';
import { Observable } from 'rxjs';

const endPoints = {
  saveMeal: `${ENV_CONFIG.BASE_URL}/save/meal`
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
}
