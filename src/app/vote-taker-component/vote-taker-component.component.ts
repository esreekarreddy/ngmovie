import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker-component',
  templateUrl: './vote-taker-component.component.html',
  styleUrls: ['./vote-taker-component.component.scss']
})
export class VoteTakerComponentComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto' ,"David"];
  onVoted(agreed: boolean) {
  agreed ? this.agreed++ : this.disagreed++;}
  constructor() { }

  ngOnInit(): void {
  }

}
