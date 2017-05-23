import {Component, Input} from "@angular/core";
@Component({
  selector: "cart",
  templateUrl: "cart.component.html",
  styleUrls: ["cart.component.css"]
})
export class CartComponent{
  @Input() cart: any;
  @Input() active: boolean;

  remove(dish){
    let i = null;
    this.cart.forEach((item, num) => {
      if(item.name == dish.name){
        i = num;
      }
    });
    this.cart.splice(i,1);
    if(this.cart.length == 0) this.active = false;
  }

  getSumm(){
    return this.cart.reduce( (summ, curr) => summ + curr.value, 0 )
  }



}
