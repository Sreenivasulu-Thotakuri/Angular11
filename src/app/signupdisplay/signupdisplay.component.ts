import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-signupdisplay',
  templateUrl: './signupdisplay.component.html',
  styleUrls: ['./signupdisplay.component.css']
})
export class SignupdisplayComponent implements OnInit {
  fName: String;
  data: any;
  constructor(private route: Router, private router: ActivatedRoute, private commonService: CommonserviceService) { }

  // ngOnInit(): void {
  //   this.router.queryParams.filter(params => params.fName).subscribe((params) => {
  //     console.log(params);
  //     alert(params);
  //   } 
  // }

  ngOnInit() {
    this.data = this.commonService.getSignUpData();
    console.log(this.data, "signup Data");
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    // this.router.queryParams.subscribe(params => {
    //     this.fName = params['fName'];
    //     console.log(this.fName);
    //   });
  }

}
