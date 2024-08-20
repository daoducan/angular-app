import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'An1',
      email: 'an1@mail.com',
      message: 'Hello 1'
    });
    this.insert({
      name: 'An2',
      email: 'an2@mail.com',
      message: 'Hello 2'
    });
    this.insert({
      name: 'An3',
      email: 'an3@mail.com',
      message: 'Hello 3'
    });
    this.insert({
      name: 'An4',
      email: 'an4@mail.com',
      message: 'Hello 4'
    });
    this.insert({
      name: 'An5',
      email: 'an5@mail.com',
      message: 'Hello 5'
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages(): any[] {
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
