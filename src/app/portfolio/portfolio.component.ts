
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  esitoJSON: any;
  item: any;
  img: any;
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.getData();
  }

  isHiddenName:boolean = false;
  isHiddenEmail:boolean = false;
  isHiddenAddress:boolean = false;
  isHiddenData:boolean = false;
  isHiddenPhone:boolean = false;
  isHiddenPassword:boolean = false;
  // reset dei boolean
  reset(){
    this.isHiddenEmail = false;
    this.isHiddenAddress = false;
    this.isHiddenData = false;
    this.isHiddenName = false;
    this.isHiddenPhone = false;
    this.isHiddenPassword = false;
  }
  // INIZIO boolean per show/hidden
  showName(){
    this.reset();
    this.isHiddenName = true;
  }
  showEmail(){
    this.reset();
    this.isHiddenEmail = true;
  }
  showDate(){
    this.reset();
    this.isHiddenData = true; 
  }
  showAddress(){
    this.reset();
    this.isHiddenAddress = true;
  }
  showPhone(){
    this.reset();
    this.isHiddenPhone = true;
  }
  showPassword(){
    this.reset();
    this.isHiddenPassword = true;
  }
// FINE boolean per show/hidden

// Chiamo il api del profilo
  getData(){
  this.apiService.get()
      .subscribe(
        (response) => {    
          // faccio il parse del JSON
          this.esitoJSON = JSON.parse(JSON.stringify(response.body));
          this.item = this.esitoJSON.results[0]
          //set dell'url img
          this.img = this.item.picture.large;
          //una volta caricati i dati chiamo la funzione di showName
          this.showName();
        },
        (error) => {
          console.log(error);
        });

  }
}
