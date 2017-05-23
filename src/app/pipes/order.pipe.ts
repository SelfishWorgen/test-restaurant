import {Pipe, PipeTransform} from "@angular/core";
@Pipe({ name : "orderBy" })
export class OrderPipe implements PipeTransform{
  transform(items: Array<any>, field: string, alreadySorted: boolean){
    return items.sort((a,b) => {
      let res = a[field] > b[field] ? 1 : a[field] < b[field] ? -1 : 0;
      return alreadySorted ? Math.abs(res) : res;
    })
  }
}
