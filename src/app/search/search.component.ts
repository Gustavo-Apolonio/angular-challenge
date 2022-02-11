import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  @Output() descChangedEvent = new EventEmitter<string>();

  sendDesc(desc: string) {
    this.descChangedEvent.emit(desc);
  }

  ngOnInit(): void {}
}
