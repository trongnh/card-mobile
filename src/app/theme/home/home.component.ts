import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryService } from '../../share/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  amout: number = 1;
  rowsBasic = [];
  rowParam = [];  
  loadingIndicator = true;
  isPrice = false;
  isPriceTotal = false;
  pricecard: number;
  ToatalPrice: number;
  disabled: boolean;
  urlImage = '';
  isError: string = '';
  constructor(private categoryService: CategoryService) {
    this.disabled = false;
  }

  ngOnInit() {
  }

  fetchBasicData() {
    let productId: number = 2;
    let quantity: number = 2; 
    this.categoryService.getAll(productId, quantity).subscribe((res: any) => {
      console.log('res', res);
      this.rowsBasic = res.data;
      console.log(this.rowsBasic);
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  onClickDecrease() {
    if (this.amout > 1) {
      this.amout -= 1;
      this.ToatalPrice = this.ToatalPrice - this.pricecard;
    }
  }
  onClickAugment() {
    this.ToatalPrice = (this.amout += 1) * this.pricecard;
  }

  onChangeCard(Event) {
    if (Event.target.checked = true) {
      this.isPrice = true;
      this.urlImage = Event.target.value;
      this.isError = '';
      
    }
  }

  onChangePrice($event) {
    if ($event.target.checked = true) {
      this.pricecard = $event.target.value;
      this.ToatalPrice = this.pricecard;
      this.isPriceTotal = true;
      this.isError = '';
    }
  }

  onChangeRules(isChecked: boolean) {
    if (isChecked) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  onSubmit() {
    if (this.isPrice != true) {
      this.isError = 'Bạn chưa chọn nhà mạng';
    } else if (this.isPriceTotal != true) {
      this.isError = 'Bạn chưa chọn mệnh giá';
    }
    if (this.isPrice === true && this.isPriceTotal === true) {
      this.fetchBasicData();
    }
  }
}
