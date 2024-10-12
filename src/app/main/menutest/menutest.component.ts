import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menutest',
  templateUrl: './menutest.component.html',
  styleUrls: ['./menutest.component.css'


]
})
export class MenutestComponent implements OnInit {


  constructor() {
   }

  ngOnInit(): void {
    // script.js
document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll('.line');
  lines.forEach(line => {
    line.classList.add('animate');
  });
});




}

  }


