import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: any;
  qualification: any;
  gender: any; 
  //currentItem = 'Sreenivas';
  myForm = new FormGroup({
    fName : new FormControl('', Validators.required),
    lName : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    gender : new FormControl('', Validators.required),
    qualification : new FormControl('', Validators.required)
  });
  
  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute, private commonService: CommonserviceService) { }

  ngOnInit() {
    this.myForm.controls['fName'].valueChanges.subscribe((value) => {
      this.firstName = value;
      console.log(this.firstName);
      //alert(this.firstName);
    });
    this.myForm.controls['lName'].valueChanges.subscribe((value) => {
      this.lastName = value;
      console.log(this.lastName);
      //alert(this.lastName);
    });
    this.myForm.controls['email'].valueChanges.subscribe((value) => {
      this.email = value;
      console.log(this.email);
      //alert(this.email);
    });
    this.myForm.controls['gender'].valueChanges.subscribe((value) => {
      this.gender = value;
      console.log(this.gender);
      //alert(this.gender);
    });
    this.myForm.controls['qualification'].valueChanges.subscribe((value) => {
      this.qualification = value;
      console.log(this.qualification);
      //alert(this.qualification);
    });
  }

  // ngOnChanges() {
  //   this.myForm.controls['fName'].valueChanges.subscribe((value) => {
  //     this.firstName = value;
  //     alert(this.firstName);
  //   });
  //   this.myForm.controls['lName'].valueChanges.subscribe((value) => {
  //     this.lastName = value;
  //     alert(this.lastName);
  //   });
  // }

  goToSignupDisplay() {
    let obj = {};
    obj = {
      fName: this.firstName,
      lName: this.lastName,
      email: this.email,
      gender: this.gender,
      qualification: this.qualification
    };
    this.commonService.setSignUpData(obj);
    this.router.navigateByUrl('signupdisplay');
  }
}

