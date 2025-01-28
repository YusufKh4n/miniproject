import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../Interface/products';

@Component({
  selector: 'app-shopcard',
  standalone: false,

  templateUrl: './shopcard.component.html',
  styleUrl: './shopcard.component.css'
})
export class ShopcardComponent implements OnInit {

  ngOnInit(): void {
    // console.log(this.product);
  }

  constructor() {
  }

  @Input()
  product!: Products;

}
