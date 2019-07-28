import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'iv-lyric-card',
  templateUrl: './lyric-card.component.html',
  styleUrls: ['./lyric-card.component.css']
})
export class LyricCardComponent implements OnInit {

  @Input('lyric') lyric: Lyric;

  constructor() { }

  ngOnInit() {
  }

}
