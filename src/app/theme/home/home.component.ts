import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { CategoryService } from '../../share/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  amout: number = 1;
  rowsBasic = [];
  loadingIndicator = true;

  constructor() { }

  ngOnInit() {
  }
  // fetchBasicData() {
  //   this.categoryService.getAll().subscribe((res: any) => {
  //     this.rowsBasic = res.data.docs;
  //     setTimeout(() => { this.loadingIndicator = false; }, 1500);
  //   });
  // }
  onClickDecrease($event) {
    if(this.amout - 1 < 1) {
      this.amout = 1;
    }
    return this.amout -= 1;
  }
  onClickAugment($event) {
    return this.amout += 1;
  }
  onChange($event) {
    console.log($event);
  }
}
