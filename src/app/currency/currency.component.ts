import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CurrencyLatest } from '../interface/currencylatestinterface';
import { Symbols } from '../interface/currencynameinterface';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
cryptoResponse: {};
  selectedValue: '';
  length: number;
  response: number;
  currency: CurrencyLatest;
  convertCurrency: number;
  objectKeys = Object.keys;
  cryptos: any;
  
  // fsyms: Array<Crypto> = ["BTC, ETH, IOT, XRP, LTC, DASH, XEM" ]
  // fsyms: Object = {"BTC, ETH, IOT, XRP, LTC, DASH, XEM"}
  constructor(private currencyservice: CurrencyService) { }
  currencies: Symbols[] = [
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
  


      
  currencySearch(){
    this.currencyservice.currencySearch()
    .subscribe( res=> {
      if(res["success"]){
      this.response = res["rates"][this.selectedValue]
      console.log(this.response);
      this.convertCurrency = this.response*this.length
      }
    else{
      return console.log("Not available");
    }
    // if(this.convertCurrency > 0){
    //   this.convertCurrency = this.response*this.length
    // }
    // else{
    //   return console.log("Need at least a number greater than 1");
    // }
    // if(parseInt(this.selectedValue.valueOf()) * (this.length)) {
      
    //   return this.response
    // }
  
  })
}
  


  ngOnInit(): void {
    this.currencyservice.cryptoSearch()
    .subscribe(res => {
      this.cryptos = res;
      console.log(res);
      // if(res){
      // this.cryptoResponse = res["BTC"]
      // this.cryptoResponse = res["ETH"]
      // this.cryptoResponse = res["IOT"]
      // this.cryptoResponse = res["XRP"]
      // this.cryptoResponse = res["DASH"]
      // this.cryptoResponse = res["XEM"]

      // console.log(res)
      // }
    });
  }
  

}
