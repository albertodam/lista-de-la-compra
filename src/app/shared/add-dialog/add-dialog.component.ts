import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent {

  newItem: string;

  constructor(private dialogRef: MatDialogRef<AddDialogComponent>) { }

  closeDialog(): void{
    this.dialogRef.close();
  }
}
