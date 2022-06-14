import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultConferences = [];
    for (const conference of value) {
      if (conference.author.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultConferences.push(conference);
      }
      if (conference.place.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultConferences.push(conference);
      }
      if (conference.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultConferences.push(conference);
      }
      if (conference.relevance.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultConferences.push(conference);
      }
      if (conference.date.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultConferences.push(conference);
      }
    }
    return resultConferences;
  }
}
