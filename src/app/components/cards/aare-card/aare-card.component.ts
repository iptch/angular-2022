import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AareData } from '../../../models/aare.model';
import { AareService } from '../../../services/aare.service';

@Component({
  selector: 'ipt-aare-card',
  templateUrl: './aare-card.component.html',
  styleUrls: ['./aare-card.component.scss'],
})
export class AareCardComponent implements OnInit {
  aareData: Observable<AareData>;

  constructor(private aareService: AareService) {
    this.aareData = aareService.aareData;
  }

  ngOnInit() {
    this.aareService.getAareData();
  }
}
