import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./css/style.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder , private http: HttpClient) {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.getRawValue);
    // this.http.post('http://localhost:8000/api/register', this.form.getRawValue()).subscribe(
    //   (data:any) => {
    //     console.log(data);
    //   });
  }

}
