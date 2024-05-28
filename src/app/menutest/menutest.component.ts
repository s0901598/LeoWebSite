import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menutest',
  templateUrl: './menutest.component.html',
  styleUrls: ['./menutest.component.css'


]
})
export class MenutestComponent implements OnInit {
  nzSpinning=true
  ngAfterViewInit() {
    // 页面加载完成后隐藏加载指示器
    this.nzSpinning = false;
  }

  constructor() {
   }

  ngOnInit(): void {
}

  }


