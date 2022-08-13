import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  currentDay = new Date();
  date = (this.currentDay.getUTCDate()) + "/" + (this.currentDay.getMonth() + 1) + "/" + (this.currentDay.getUTCFullYear());
  public appPages = [
    { title: 'Dashboard', url: '/dashboard/3', icon: 'paper-plane' },
    { title: 'Your Profile', url: '/profile/3', icon: 'mail' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
