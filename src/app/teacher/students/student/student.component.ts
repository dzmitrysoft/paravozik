import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  @Input() student: any;

  public works = [
    { title: 'Rabota Vovi', checked: false, id: 1 },
    { title: 'Rabota Sashki', checked: false, id: 2 },
    { title: 'Rabota Peti', checked: false, id: 3 },
    { title: 'Rabota Lidki', checked: false, id: 4 },
    { title: 'Rabota Sevki', checked: false, id: 5 },
    { title: 'Rabota Koli', checked: false, id: 6 },
    { title: 'Rabota Gucci', checked: false, id: 7 },
  ];

  constructor() { }

  ngOnInit() {}

}
