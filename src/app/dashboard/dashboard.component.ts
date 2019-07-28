import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iv-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lyrics: Lyric[] = [
    { title: 'Persembahan Hati', book: 'PS', chapter: '1', content: 'Sanggupkah aku membalas-Mu. Hanya ini yang ku bisa Bapa. Trimalah persembahan hatiku' },
    { title: 'Tuhan Adalah Gembalaku', book: 'PS', chapter: '2', content: 'Tuhan adalah gembalaku. Takan kekurangan aku' },
  ];

  constructor() { }

  ngOnInit() {
  }

}



