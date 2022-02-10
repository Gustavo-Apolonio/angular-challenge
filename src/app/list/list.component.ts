import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor() {}

  mockData = [
    {
      id: 1,
      descricao: 'Empresa de tecnologia LTDA',
      status: true,
    },
    {
      id: 2,
      descricao: 'Supermercado Teste',
      status: true,
    },
    {
      id: 3,
      descricao: 'Empresa de tecnologia LTDA',
      status: true,
    },
  ];

  mockDisplay = [
    {
      id: 0,
      descricao: '',
      status: true,
    },
  ];

  ngOnInit(): void {}

  filterByDesc(desc: any) {
    let mockCopy = [...this.mockData];

    desc = desc.target.value;

    if (desc.length >= 3) {
      mockCopy = mockCopy.filter((item) => item.descricao.includes(desc));

      this.mockDisplay = [...mockCopy];
    } else {
      this.mockDisplay = [...this.mockData];
    }
  }
}
