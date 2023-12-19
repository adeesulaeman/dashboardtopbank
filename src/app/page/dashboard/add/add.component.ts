import { userPost } from './../../../model/userModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  newUser: userPost = { email: '', first_name: '', last_name:'', avatar: '' }
}
