

export class CartItem {
    public productId: number;
    public name: string;
    public price: number;
    public quantity: number = 0;
    public image: string;
    public description:string;
  }
export class ShoppingCart {
    public items: CartItem[] = new Array<CartItem>();
    public deliveryOptionId: string;
    public grossTotal: number = 0;
    public deliveryTotal: number = 0;
    public itemsTotal: number = 0;
    public updateFrom(src: ShoppingCart) {
        this.items = src.items;
        this.deliveryOptionId = src.deliveryOptionId;
        this.grossTotal = src.grossTotal;
        this.deliveryTotal = src.deliveryTotal;
        this.itemsTotal = src.itemsTotal;
      }
}