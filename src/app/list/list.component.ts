import { Component, OnInit, Input } from '@angular/core';

import { ListService } from './list.service';

import Mock from '../@types/mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [ListService],
})
export class ListComponent implements OnInit {
  constructor(private listSrv: ListService) {}

  mockData: Array<Mock> = [];

  mockDisplay: Array<Mock> = [];

  filterByDesc(desc: string) {
    let mockCopy = [...this.mockData];

    if (desc.length >= 3) {
      mockCopy = mockCopy.filter((item) => item.desc.includes(desc));

      this.mockDisplay = [...mockCopy];
    } else {
      this.mockDisplay = [...this.mockData];
    }
  }

  @Input() desc = '';

  ngOnChanges() {
    this.filterByDesc(this.desc);
  }

  getData() {
    this.listSrv.get().subscribe((data: Array<Mock>) => {
      data.forEach((client) => {
        let obj: Mock = {
          id: client.id,
          desc: client.desc,
          status: client.status,
        };

        this.mockData.push(obj);
      });
      this.mockDisplay = [...this.mockData];
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
