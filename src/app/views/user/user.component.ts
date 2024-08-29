import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from "@angular/common/http";
import { MatDialog } from '@angular/material/dialog';
import { UserPopupComponent } from './user-popup/user-popup.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  // url = "http://202.170.122.157:9250/"
  // url = "http://localhost:8080/"
  url = "http://localhost:3000";


  constructor(
    private http: HttpClient,
    public dialog: MatDialog
  ) { }


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  displayedColumns: string[] = ['id', 'name', 'salary', 'action'];
  dataSource: any = new MatTableDataSource();

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.dataSource.data = []
    this.http.get(this.url + 'getUserAll').subscribe((response: any) => {
      if (response.length > 0) {
        this.dataSource = new MatTableDataSource(response)
        this.dataSource.paginator = this.paginator
      } else {
        alert(`DATA NOT FOUND : ${response.length}`)
      }
    })
  }

  openDialog(userData: any) {
    const dialogRef = this.dialog.open(UserPopupComponent, {
      width: '800px',
      disableClose: false,
      data: userData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getData()
    });
  }

  deleteUser(user_id: any) {
    this.http.delete(`${this.url}deleteUser/${user_id}`).subscribe((response: any) => {
      this.getData()
    })
  }

}
