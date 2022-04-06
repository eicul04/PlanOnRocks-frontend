import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ClimbingRock} from "../model/entities/climbing-rock.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpClimbingRockService {

  constructor(private http: HttpClient) { }

  createClimbingRock(userId: number, groupName: string): Observable<ClimbingRock> {
    return this.http.post<ClimbingRock>('/api/climbingRocks', groupName,
      { params: new HttpParams().set('userId', String(userId)), headers: new HttpHeaders({
          'Content-Type': 'application/json;charset=UTF-8',
        })});
  }
}
