import {Component, inject} from '@angular/core';
import {MyFirstService} from "../services/my-first.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(
    private service: MyFirstService,
    private router: Router
  ) {
    this.messages = this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmitted = true;
    this.service.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
    this.router.navigate(['/second']);
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
