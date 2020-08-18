import { Component, OnInit, ViewChild } from '@angular/core';
import { Exchange } from '../model/Exchange';
import { ExchangeService } from '../../service/ExchangeService';
import { ResponseExchange } from '../model/ResponseExchange';

@Component({
    selector: 'app-exchange',
    templateUrl: './exchange.component.html',
    styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
    //private exchangeService : ExchangeService;
    exchange : Exchange;
    constructor(
        private exchangeService : ExchangeService
    ) {
        this.exchange = new Exchange();
    }
    ngOnInit() {
    }
    onSubmit() {
        this.exchangeService.exchangeAmount(this.exchange)
        .subscribe((data: ResponseExchange) => {
            alert("Amount exchange: " + data.amountExchage);
        });
    }
}