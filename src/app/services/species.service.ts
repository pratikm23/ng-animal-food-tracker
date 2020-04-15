import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Basic } from '../models/common.model';
import { ENV_CONFIG } from 'src/environments/environment';
import { Observable } from 'rxjs';

const endPoints = {
  getSpecies: `${ENV_CONFIG.BASE_URL}/species`
}

@Injectable()
export class SpeciesService {

  constructor(private http: HttpClient) { }
  public getSpecies(): Observable<Basic[]> {
    return this.http.get<Basic[]>(
      endPoints.getSpecies
    );
  }
}
