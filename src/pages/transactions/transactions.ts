import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Transaction } from '../../database';
import { AddingPage } from '../adding/adding';

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {

  title : string = "Movimientos";
  transactions: any;
  addingPage = AddingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {
    // let transaction = new Transaction(20,'Mi primera transacción');
    // transaction.save();
    console.log('ionViewDidLoad TransactionsPage');
    this.loadTransaction();
  }

  loadTransaction()
  {
    Transaction.all().then((resultados) => 
                  {
                    this.transactions = resultados;
                    console.log((resultados));
                  });
  } 

}
