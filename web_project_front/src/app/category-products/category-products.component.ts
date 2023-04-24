import {Component, OnInit} from '@angular/core';
import {Category, Product} from "../models";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit{
  products: Product[] = [];
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      const id = Number(params.get('id'));
      this.categoryService.getCategoryProducts(id).subscribe((products)=>
      {this.products = products;});
    })
  }

}
