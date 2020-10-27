import { stringToFileBuffer } from '@angular-devkit/core/src/virtual-fs/host';
import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CurrencyLatest } from '../interface/currencylatestinterface';
import { Symbols } from '../interface/currencynameinterface';

import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  let httpClientSpy: { get: jasmine.Spy };
  let currencyService: CurrencyService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    currencyService = new CurrencyService(<any>httpClientSpy);
  });

  it('should return expected currency rates (HttpClient called once)', () => {
    const expectedCurrency: Symbols[] = [
      {value: 'GBP', viewValue: 'GBP'},
      {value: 'JPY', viewValue: 'JPY'},
      {value: 'EUR', viewValue: 'EUR'},
      {value: 'CAD', viewValue: 'CAD'},
      {value: 'AED', viewValue: 'AED'},
      {value: 'AFN', viewValue: 'AFN'},
      {value: 'AMD', viewValue: 'AMD'},
      {value: 'ALL', viewValue: 'ALL'},
      {value: 'USD', viewValue: 'USD'},
      {value: 'AUD', viewValue: 'AUD'},
      {value: 'CHF', viewValue: 'CHF'},
      {value: 'HKD', viewValue: 'HKD'},
      {value: 'NZD', viewValue: 'NZD'}
    ];
      

    httpClientSpy.get.and.returnValue(asyncData(expectedCurrency));

    currencyService.currencySearch().subscribe(
      res => expect(res).toEqual(expectedCurrency, 'expected currency'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    CurrencyService.currencySearch().subscribe(
      res => fail('expected an error'),
      error  => expect(error.message).toContain('test 404 error')
    );
  });
  
});

