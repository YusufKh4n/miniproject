import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Products } from '../../Interface/products';

@Component({
  selector: 'app-dialogviewer',
  standalone: false,
  
  templateUrl: './dialogviewer.component.html',
  styleUrl: './dialogviewer.component.css'
})
export class DialogviewerComponent {

  //this displays the function
  // Dialog component , catch the data passed when dialogView is triggered
  data: Products = inject(MAT_DIALOG_DATA); // Inject the data passed to the dialog

  constructor(){
    console.log(this.data);
    console.log(this.data?.productName);
  }
}
