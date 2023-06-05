import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string): string {
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(
      new Date(
        parseInt(value.substring(0, 4)),
        parseInt(value.substring(4, 2)) - 1,
        parseInt(value.substring(6, 2))
      )
    );

    return formattedDate;
  }
}
