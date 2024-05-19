import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  constructor() {

  }

  ngOnInit(): void {
    console.log('PRICECOMPONENT: ngOnInit');

    this.interval$ = interval(1000).subscribe((value) => { console.log('tick:', value); });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('PRICECOMPONENT: ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('PRICECOMPONENT: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
