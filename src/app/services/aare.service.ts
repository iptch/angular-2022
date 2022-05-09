import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AareData } from '../models/aare.model';

@Injectable({
  providedIn: 'root',
})
export class AareService {
  private readonly aareUrl =
    'https://aareguru.existenz.ch/v2018/today?app=ipt-dashboard&version=1.0.42&city=bern';
  private readonly aareDataSubject = new BehaviorSubject<AareData>(null);

  aareData = this.aareDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getAareData() {
    this.aareDataSubject.next(null);

    this.http
      .get<AareData>(this.aareUrl)
      .subscribe((aare) => this.aareDataSubject.next(aare));
  }
}
