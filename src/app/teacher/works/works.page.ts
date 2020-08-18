import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.page.html',
  styleUrls: ['./works.page.scss'],
})
export class WorksPage implements OnInit {

  public works = [
    { title: 'Rabota Vovi', checked: false, id: 1 },
    { title: 'Rabota Sashki', checked: false, id: 2 },
    { title: 'Rabota Peti', checked: false, id: 3 },
    { title: 'Rabota Lidki', checked: false, id: 4 },
    { title: 'Rabota Sevki', checked: false, id: 5 },
    { title: 'Rabota Koli', checked: false, id: 6 },
    { title: 'Rabota Gucci', checked: false, id: 7 },
  ];
  public filteredWorks = [...this.works];

  constructor() { }

  ngOnInit() {
  }

  changeFilter(type: string) {
    switch(type) {
      case "all":
        this.filteredWorks = this.works;
        break;
      case "checked":
        this.filteredWorks = this.works.filter(work => work.checked);
        break;
      case "unchecked":
        this.filteredWorks = this.works.filter(work => !work.checked);
        break;
    }
  }

  check(workId: number) {
    this.works.find(work => work.id === workId).checked = true;
    
  }
}
