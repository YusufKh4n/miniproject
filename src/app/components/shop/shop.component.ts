import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  viewChild,
  ViewChild,
} from '@angular/core';
import { Products } from '../../Interface/products';
import { ProductserviceService } from '../../service/productservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { DialogviewComponent } from '../dialogview/dialogview.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],

  standalone:false,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopComponent implements OnInit, AfterViewInit {
  productsDemo: Products[] = [];
  dataSource = new MatTableDataSource<Products>([]);

  // @ViewChild (MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  // @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(ChangeDetectorRef.prototype); //using changeDetectRef with viewChild is not standard as viewchild already manage the lifecycle
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // @ViewChild ('abcDialogView') paginator!: DialogviewComponent; //copy-paste the component --usefull
  // @ViewChild ('abcDialogwin') pagina!: ElementRef; //it will access this div completely copy-paste this.pagina.nativeElement; give access
  // @ViewChild ('abcDialogView') paginator!: DialogviewComponent;

  // viewChild is like inheritance availabing all the properties inside the ( ) like the matpaginator

  constructor(private productservice: ProductserviceService) { }

  ngOnInit(): void {
    this.productsDemo = this.productservice.getProducts();
    this.dataSource.data = this.productsDemo;
    this.dataSource.filteredData = this.productsDemo;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}