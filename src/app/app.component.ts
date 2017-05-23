import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public dishes : any = [
    {
      name: "Борщ",
      value: 10,
      category: "Первое"
    },
    {
      name: "Суп",
      value: 5,
      category: "Первое"
    },
    {
      name: "Макароны",
      value: 20,
      category: "Гарнир"
    },
    {
      name: "Каша",
      value: 17,
      category: "Гарнир"
    },
    {
      name: "Мороженое",
      value: 3,
      category: "Десерт"
    },{
      name: "Пирожное",
      value: 4,
      category: "Десерт"
    },{
      name: "Торт",
      value: 30,
      category: "Десерт"
    },{
      name: "Цезарь",
      value: 10,
      category: "Салат"
    },{
      name: "Греческий",
      value: 12,
      category: "Салат"
    }
  ];
  public sorting: string = 'name';
  public sortingAsc: boolean = false;
  public cart : Array<any> = [];
  public showCart : boolean = false;

  sortBy(type){
    this.sorting == type && (this.sortingAsc = !this.sortingAsc);
    this.sorting = type;
  }

  toCart(dish){
    let i = null;
    this.cart.forEach((item, num) => {
      if(item.name == dish.name){
        i = num;
      }
    });
    if(i != null){
      this.cart.splice(i,1);
    } else {
      this.cart.push(dish);
    }
  }


  checkInCart(dish){
    return this.cart.find(item => item.name == dish.name);
  }

  getSumm(){
    return this.cart.reduce( (summ, curr) => summ + curr.value, 0 )
  }

}
