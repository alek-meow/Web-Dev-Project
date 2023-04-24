import {Component, OnInit} from '@angular/core';
import {Category, Product} from "../models";
import {CategoryService} from "../services/category.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit{
  category: Category;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
    this.category = {} as Category;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap) => {
      const id = Number(params.get('id'));
      this.categoryService.getCategoryDetail(id).subscribe((category) => {
        this.category = category
      })
    })
  }
}
