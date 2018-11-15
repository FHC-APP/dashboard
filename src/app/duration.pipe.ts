import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (!isNaN(value)) {
      const minutes: number = Math.floor(value / 60000);
        const sec: number = + ((value % 60000) / 1000).toFixed(0);
        return (sec === 60 ? (minutes + 1) + ':00' : minutes + ':' + (sec < 10 ? '0' : '') + sec);
      }else {
        return '';
      }
  }

}
