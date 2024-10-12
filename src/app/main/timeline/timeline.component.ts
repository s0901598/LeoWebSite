import { Component, OnInit } from '@angular/core';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timelineData: TimelineItem[] = [
    { date: "2014 - 2015", title: "實習生", description: "在 ABC 公司擔任前端開發實習生，學習基礎網頁技術。" },
    { date: "2015 - 2016", title: "初級開發者", description: "加入 XYZ 科技，專注於前端開發，參與多個小型項目。" },
    { date: "2016 - 2018", title: "中級開發者", description: "在 DEF 軟體公司擔任全端開發者，開始接觸後端技術。" },
    { date: "2018 - 2020", title: "高級開發者", description: "晉升為 GHI 創新公司的高級開發者，領導小型開發團隊。" },
    { date: "2020 - 2021", title: "項目經理", description: "在 JKL 科技擔任項目經理，負責管理大型網站重構項目。" },
    { date: "2021 - 2022", title: "技術主管", description: "加入 MNO 創業公司，作為技術主管領導技術團隊。" },
    { date: "2022 - 2023", title: "CTO", description: "被任命為 PQR 科技的 CTO，負責公司整體技術戰略。" },
    { date: "2023 - 現在", title: "技術顧問", description: "成為自由技術顧問，為多家科技公司提供技術諮詢服務。" },
    { date: "未來規劃", title: "AI 研究", description: "計劃深入人工智能領域，專注於機器學習和自然語言處理研究。" },
    { date: "長期目標", title: "創業", description: "希望在積累足夠經驗後，自主創業開發創新型科技產品。" }
  ];

  currentPage = 0;
  itemsPerPage = 4;

  get paginatedData() {
    const start = this.currentPage * this.itemsPerPage;
    return this.timelineData.slice(start, start + this.itemsPerPage);
  }

  get canGoBack() {
    return this.currentPage > 0;
  }

  get canGoForward() {
    return (this.currentPage + 1) * this.itemsPerPage < this.timelineData.length;
  }

  changePage(direction: number) {
    this.currentPage += direction;
  }

  ngOnInit() {}
}
