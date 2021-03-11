import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  title = 'hoteltestapp';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ){

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

  
    // get return url from route parameters or default to '/'

}
get f() { return this.form.controls; }

onSubmit(){
 console.log(this.f.username.value);

if(this.f.username.value == "demouser" && this.f.password.value == "demo"){
  console.log("logged in successfully");
  this.router.navigate(['home'], {  });
}
}
}
