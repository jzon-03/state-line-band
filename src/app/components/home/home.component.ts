import { Component } from '@angular/core';

interface Show {
  date: string;
  month: string;
  venue: string;
  location: string;
  time: string;
  link?: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
shows: Show[] = [
    {
      date: '12',
      month: 'SEP',
      venue: 'UPCOMING VENUE',
      location: 'Rochester, NY',
      time: '9:00 PM'
    },
    {
      date: '26',
      month: 'SEP',
      venue: 'UPCOMING VENUE',
      location: 'Finger Lakes, NY',
      time: '8:00 PM'
    },
    {
      date: '10',
      month: 'OCT',
      venue: 'UPCOMING VENUE',
      location: 'Rochester, NY',
      time: '9:00 PM'
    }
  ];

  scrollToShows(): void {
    document.getElementById('shows')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  scrollToBooking(): void {
    document.getElementById('booking')?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
