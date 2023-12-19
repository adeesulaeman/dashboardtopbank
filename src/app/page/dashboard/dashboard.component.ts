import { userInterface } from './../../model/userModel';
import { ProfileService } from './../../service/profile.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: userInterface[] = [];
  selectedUser: userInterface | null = null

  constructor(private profileService: ProfileService, private router: Router){}

  ngOnInit(): void {
    this.profileService.getUsers().subscribe(
      (users) => {
        this.users = users 
      }, error => { console.log('Error')})
  }

  onDelete(userId: number) {
    const confirmDelete = confirm('Yakin beneran di delete?')

    if (confirmDelete) {
      this.profileService.deleteUsers(userId).subscribe(() => { 
        console.log('Profile deleted') 
        this.ngOnInit();
      }, 
      (error) => {
        console.log('Error delete') 
      })
    }
  }
  
  onDetail(userId: number) {
    this.profileService.getUserById(userId).subscribe((user) => { this.selectedUser = user}, error => { console.error("Error Fetching ID") })
  }
  goToDetail(userId: number) {
    this.router.navigate([`/details/${userId}`])
  }
}
