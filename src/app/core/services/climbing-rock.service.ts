import { Injectable } from '@angular/core';
import {ClimbingRock} from "../model/entities/climbing-rock.model";
import {BehaviorSubject} from "rxjs";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ClimbingRockService {

  constructor() { }

  private readonly climbingRockListSubject = new BehaviorSubject<ClimbingRock[]>([]);
  public readonly climbingRockList$ = this.climbingRockListSubject.asObservable().pipe(
    filter(isNotNullOrUndefined),
  );

  get climbingRocks(): ClimbingRock[] {
    return this.climbingRockListSubject.value;
  }

  addClimbingRock(climbingRock: ClimbingRock): void{
    this.climbingRockListSubject.next([
      ...this.climbingRocks,
      climbingRock
    ]);

  }
}
