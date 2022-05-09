import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ipt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() backgroundImageUrl = '';
  @Input() detailsRouteId?: string;
  @Input() heading: string;

  constructor(private router: Router) {}

  get backgroundImage() {
    return `url(${this.backgroundImageUrl})`;
  }

  showDetails() {
    if (this.detailsRouteId) {
      this.router.navigate(['/' + this.detailsRouteId]);
    }
  }
}
