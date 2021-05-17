import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  selectedValue: string;
  myProducts: any = [];
  names: any;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  users: any[] = [
    {value: 'test', viewValue: 'Test'},
    {value: 'test1', viewValue: 'Test1'},
    {value: 'test2', viewValue: 'Test2'}
  ];

  constructor(private httpService: HttpClient) { }
  
  ngOnInit(): void {
    this.httpService.get('https://reqres.in/api/products/').subscribe((data) => {
        this.myProducts = data;
        this.names = this.myProducts.data;
      },
    );
  }

  onSelectedDropdown(e){
    this.selectedValue = e.value;
    console.log(this.selectedValue);
    // alert(this.selectedValue);
  }

}
