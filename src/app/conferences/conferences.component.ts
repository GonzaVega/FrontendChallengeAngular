import { Component } from '@angular/core';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css'],
})
export class ConferencesComponent {
  conferences = [
    {
      author: 'Juan M. Schenone',
      place: 'Auditorium',
      name: 'Designing Things',
      relevance: 'optional',
      date: 'May 26, 2022. 10:30 AM',
    },
    {
      author: 'Mariano Gonzalez',
      place: 'Main Auditorium',
      name: 'Learning Coding',
      relevance: 'important',
      date: 'June 3, 2022. 02:15 PM',
    },
    {
      author: 'Mike Wazowsky',
      place: 'Closet Stadium',
      name: 'Scaring intro',
      relevance: 'very important',
      date: 'July 10, 2022. 08:30 AM',
    },
    {
      author: 'Julius Emerick',
      place: 'Open Street',
      name: 'Knowing things fundamentals',
      relevance: 'optional',
      date: 'May 2, 2022. 12:00 PM',
    },
  ];
  filterConference = '';
  getStatusClasses(conference: {
    author: string;
    place: string;
    name: string;
    relevance: string;
    date: string;
  }) {
    return {
      'list-group-item-success': conference.relevance === 'optional',
      'list-group-item-warning': conference.relevance === 'important',
      'list-group-item-danger': conference.relevance === 'very important',
    };
  }
}
