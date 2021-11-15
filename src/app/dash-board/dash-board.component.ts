import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  userImage: string = '';
  placeholder: string = '';
  data: any[] = [];
  constructor() {
    setTimeout(() => {
      this.userImage =
        'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png';
      this.data.push({ product: 'D', price: 100 });
    }, 5000);
    this.placeholder =
      'https://cdn0.iconfinder.com/data/icons/user-pictures/100/unknown_1-2-1024.png';
    this.data = [
      { product: 'A', price: 30 },
      { product: 'B', price: 13 },
      { product: 'C', price: 17 },
    ];
  }

  ngOnInit(): void {}
}
