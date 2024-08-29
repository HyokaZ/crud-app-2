import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.scss']
})
export class UserPopupComponent {

  url = "http://localhost:3000";


  constructor(
    public dialogRef: MatDialogRef<UserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  form: FormGroup = this.formBuilder.group(
    {
      id: 0,
      name: ['', Validators.required],
      salary: ['', Validators.required],
    }
  );

  ngOnInit() {
    if (this.data) {
      this.form.patchValue(this.data)
    }
  }

  save() {
    if (this.form.valid) {
      if (this.form.value.id > 0) {
        this.http.put(`${this.url}editUser/${this.form.value.id}`, this.form.value).subscribe((response: any) => {
          this.dialogRef.close()
        })
      } else {
        this.http.post(`${this.url}addUser`, this.form.value).subscribe((response: any) => {
          this.dialogRef.close()
        })
      }
    }
  }

}
