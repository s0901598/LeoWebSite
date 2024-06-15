import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const lines = document.querySelectorAll('.line');
      lines.forEach(line => {
        line.classList.add('animate');
      });
    });

  }

}
