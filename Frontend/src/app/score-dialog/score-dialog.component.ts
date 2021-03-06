import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ScoreDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {
  }

}
