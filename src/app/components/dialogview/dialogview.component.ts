import { Component, inject, Input, input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogviewerComponent } from '../dialogviewer/dialogviewer.component';
import { Products } from '../../Interface/products';
import { ProductserviceService } from '../../service/productservice.service';

// Define the interface for dialog data
// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }

// Main component
@Component({
  selector: 'app-dialogview',

  standalone:false, 
  templateUrl: './dialogview.component.html',
  styleUrls: ['./dialogview.component.css'],
})

export class DialogviewComponent {
  dialog = inject(MatDialog);

  @Input() product!: Products;

  // products: Products[] = [];

  constructor(private productservice: ProductserviceService){

    // this.products = productservice.getProducts();
  }

  //this triggers the dialogview

  // Function to open the dialog
  openDialog() {
    this.dialog.open(DialogviewerComponent, {
      // data: {
      //   animal: 'panda', // Pass data to the dialog
      // },
      data: this.product
    });
  }
}

