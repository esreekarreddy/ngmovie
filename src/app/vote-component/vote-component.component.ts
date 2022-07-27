import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-component',
  templateUrl: './vote-component.component.html',
  styleUrls: ['./vote-component.component.scss']
})
export class VoteComponentComponent implements OnInit {
  @Input() name: string="";
  @Output() onVoted = new EventEmitter<boolean>();
  voted = false;
  vote(agreed: boolean) {
  this.onVoted.emit(agreed);
  this.voted = true;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
