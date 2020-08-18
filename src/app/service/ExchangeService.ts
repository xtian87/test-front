import { Injectable } from '@angular/core';
import { HOST_BACKEND } from '../util/constants';
import { HttpClient } from '@angular/common/http';
import { Exchange } from '../pages/model/Exchange';
@Injectable({
    providedIn: 'root'
})
export class ExchangeService {

    urlNegocio: string = `${HOST_BACKEND}/test-bcp/exchange`;

    constructor(private httpClient: HttpClient) { }

    exchangeAmount(exchange : Exchange) {
        return this.httpClient.post(`${this.urlNegocio}`, exchange);
    }
}