import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  @Output() descChangedEvent = new EventEmitter<string>();

  sendDesc(desc: string) {
    this.descChangedEvent.emit(desc);
  }

  ngOnInit(): void {}
}
