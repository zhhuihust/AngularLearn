import { Injectable } from '@angular/core';
import {ProductComponent} from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    new Product(1,'第一个商品',1.99,3.5,'第一个评价，创建的0330',["虚拟产品","软件设施"]),
    new Product(2,'第二个商品',2.99,2.5,'第二个评价，创建的0330',["虚拟产品","软件设施"]),
    new Product(3,'第三个商品',3.99,3.5,'第3个评价，创建的0330',["硬件","软件设施"]),
    new Product(4,'第四个商品',4.99,4.5,'第4个评价，创建的0330',["虚拟产品","软件设施"]),
    new Product(5,'第五个商品',5.99,1.5,'第5个评价，创建的0330',["农产品","软件设施"]),
    new Product(6,'第六个商品',6.99,4.5,'第6个评价，创建的0330',["硬件","软件设施"])
  ];

  private comments: Comment[] = [
    new Comment(1,1,"2017-02-02 12:22:22", "zhangsan",3,"nice"),
    new Comment(2,1,"2017-03-02 02:22:22", "lisi",2,"nice 2 "),
    new Comment(3,1,"2017-04-02 20:22:22", "wangwu",1,"nice 3"),
    new Comment(4,2,"2017-05-02 10:22:22", "peter",4,"nice 4")
  ]


  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id:number): Product {
    return this.products.find((product) =>  product.id == id);

  }

  getCommentsForProductId(id:number) : Comment[] {
    return this.comments.filter((comment:Comment) => comment.productId == id);
  }
}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
}


export  class Comment {
  constructor(public id: number,
              public  productId: number,
              public  timestamp:string,
              public  user: string,
              public  rating: number,
              public  content: string
              ) {  }
}


