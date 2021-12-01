import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FinancialGridDataService } from './financial-grid-data.service';

describe('FinancialGridDataService', () => {
  let service: FinancialGridDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FinancialGridDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
