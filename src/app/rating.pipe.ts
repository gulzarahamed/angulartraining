import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value < 5)
    {
      return "poor"
    }
    else if (value < 7)
    {
      return "average"
    }
    return "good";
  }

}
