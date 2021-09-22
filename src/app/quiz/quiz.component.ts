import { Questions } from '../Questions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export default class QuizComponent implements OnInit {
  qlist !: Array<Questions>;
  activeItem !: Questions ;

  previous() {
      const currentIndex = this.qlist.indexOf(this.activeItem);
      const newIndex = currentIndex === 0 ? this.qlist.length - 1 : currentIndex - 1;
      this.activeItem = this.qlist[newIndex];
  }

  next() {
      const currentIndex = this.qlist.indexOf(this.activeItem);
      const newIndex = currentIndex === this.qlist.length - 1 ? 0 : currentIndex + 1;
      this.activeItem = this.qlist[newIndex];
  }


  constructor() { 
    
    this.qlist =
    [
      {
        qid!:1,
        qstr!: "QUESTION 1",
        ans!: true
      },
      {
        qid!:2,
        qstr!: "QUESTION 2",
        ans!: false
      },
      {
        qid!:3,
        qstr!: "QUESTION 3",
        ans!: true
      },
      {
        qid!:4,
        qstr!: "QUESTION 4",
        ans!: true
      },
      {
        qid!:5,
        qstr!: "QUESTION 5",
        ans!: true
      },
      {
        qid!:6,
        qstr!: "QUESTION 6",
        ans!: true
      },
    ]
    this.activeItem = this.qlist[0];
  }

  ngOnInit(): void {
  }
  
  
  
}
