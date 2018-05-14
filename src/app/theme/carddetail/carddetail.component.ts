import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../share/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-carddetail',
  templateUrl: './carddetail.component.html',
  styleUrls: ['./carddetail.component.css']
})
export class CarddetailComponent implements OnInit {
  rowsBasic = [];
  loadingIndicator = true;
  newArrayDataOfOjbect = [];
  constructor(private categoryService: CategoryService) { 
    this.fetchBasicData();
  }

  ngOnInit() {
    this.loadingIndicator = false;
    this.fetchBasicData();
  }
  fetchBasicData() {
    let productId: number = 1;
    let quantity: number = 1;
    this.categoryService.getAll(productId, quantity).subscribe((res: any) => {
      console.log('res', res);
      this.rowsBasic = res.data;
      // console.log(res.data);
      // this.rowsBasic = Object.keys(res.data).map(key => {
      //     return res.data[key];
      // })
      // console.log(this.rowsBasic);
    });
  }
}
