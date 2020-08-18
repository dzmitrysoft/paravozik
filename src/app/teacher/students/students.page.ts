import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StudentComponent } from './student/student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  public students = [
    { title: 'Vovi', raiting: 15, id: 1 },
    { title: 'Sashki', raiting: 3, id: 2 },
    { title: 'Peti', raiting: 97, id: 3 },
    { title: 'Lidki', raiting: 46, id: 4 },
    { title: 'Sevki', raiting: 52, id: 5 },
    { title: 'Koli', raiting: 16, id: 6 },
    { title: 'Gucci', raiting: 100, id: 7 },
  ];
  public filteredStudents = [...this.students];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  filterChange(event: any) {
    this.filteredStudents = this.students.filter(student => !event || student.title === event);
  }

  openStudentModal(studentId: number) {
    let student = this.students.find(student => student.id === studentId) || this.students[0];
    this.modalController.create({
      component: StudentComponent,
      componentProps: {
        'student': student
      }
    }).then(modalEl => {
      modalEl.present();
    })
  }
}
