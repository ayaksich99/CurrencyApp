import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  
  constructor(private http: HttpClient) { }

  currencySearch(){
    return this.http.get(`http://data.fixer.io/api/latest?access_key=f41290e737f2e9ffb2dcdc20782fd1e7`)
  }
  cryptoSearch(){
    return this.http.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,XRP,LTC,DASH,XEM,USDT,BCH,LIBRA,XMR,EOS,BSV,BNB&tsyms=USD&api_key=78d19d3bed64e81b8d7c6da2e28d78c74a2dcad36a216bb54ddaa7eb9b4b50fc`)
  }
}
