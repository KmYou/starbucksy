import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

// import { ProductsService } from '../products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  @Output() orderClicked = new EventEmitter();

  constructor() { }

  locations = ['Gänsemarkt 21-23 Hamburg', 'Großer Burstah 50-52 Hamburg', 'Neuer Jungfernstieg 5 Hamburg', 'Marseiller Str. 1 Hamburg', 'Rathausmarkt 5 Hamburg', 'Europa Passage Hamburg', 'Barkhof 3 Hamburg'];
  cupSizes = ['Short', 'Tall', 'Grande', 'Venti'];
  coffeebeanTypes = ['Veranda Blend', 'Breakfast Blend', 'Pike Place Roast', 'House Blend', 'Brazil Latin American Blend', 'Costa Rica Latin America Blend', 'Sumatra', 'Kenya African Blend', 'Caffè Verona', 'Espresso Roast', 'Italian Roast', 'French Roast'];
  syrupTypes = ['No syrup', 'Vanilla', 'Caramel', 'Cinnamon dolce', 'Hazelnut', 'Toffee nut', 'Peppermint', 'Raspberry', 'Classic'];
  toppingTypes = ['No toppings', 'Whipped cream', 'Caramel drizzle', 'Caramel ribbon crunch', 'Cinnamon dolce'];
  powderTypes = ['No powder', 'Cocoa', 'Cinnamon', 'Spicy pumpkin', 'Extra sugar'];

  ngOnInit() {
  }

  onClicked() {
    this.orderClicked.emit();
    // this.productsService.deleteProduct(this.productName);
  }

}
