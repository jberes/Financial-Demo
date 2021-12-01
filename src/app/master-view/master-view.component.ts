import { Component, OnInit } from '@angular/core';
import { FinancialGridDataService } from '../services/financial-grid-data.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public financialGridDataFinTechDataSource: any = null;

  constructor(
    private financialGridDataService: FinancialGridDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialGridDataService.getFinTechDataSource().subscribe(data => this.financialGridDataFinTechDataSource = data);
  }
}
