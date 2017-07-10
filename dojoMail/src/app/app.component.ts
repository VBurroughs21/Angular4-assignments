import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Dojo Mail';
  emails: Array<any> = [
    {email: 'Email1@em.co', importance: true, subject: 'Hello friend', content: 'Hi there'},
    {email: 'email2@mail.co', importance: true, subject: 'Afternoon Meeting', content: 'Afternoon meeting will take place . . .'},
    {email: 'email3@ma.co', importance: true, subject: 'Read This', content: 'Important information inside . . .'},
    {email: 'email4@il.co', importance: false, subject: 'Morning Meeting', content: 'Morning meeting will take place . . .'},
    {email: 'email5@mailing.co', importance: true, subject: 'Confirmation', content: 'Confirmation of online order'},
    {email: 'email6@mail.co', importance: false, subject: 'Lunch Plans', content: 'Lunch will be next Thursday . . .'}
  ]
}
