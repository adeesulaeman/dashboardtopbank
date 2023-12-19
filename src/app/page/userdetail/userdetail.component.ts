import { userInterface } from './../../model/userModel';
import { ProfileService } from './../../service/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  user: userInterface | null = null
  constructor(private profileService: ProfileService, private route: ActivatedRoute){}
  
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id')
      if (userId) {
        this.profileService.getUserById(+userId).subscribe((user) => {
          this.user = user
        }, error => {
          console.log("Error")
        })
      }
    })
  }

}
