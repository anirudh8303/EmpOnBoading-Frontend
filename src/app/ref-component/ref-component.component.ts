import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-ref-component',
  templateUrl: './ref-component.component.html',
  styleUrls: ['./ref-component.component.css'],
})
export class RefComponentComponent implements OnInit {

  
  constructor() {}

  ngOnInit(): void {}

  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
    desg: new FormControl('', [Validators.required,
      Validators.pattern('^[a-zA-Z ]*$')]),
    company: new FormControl('', [Validators.required]),
  });
  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get mobile() {
    return this.contactForm.get('mobile');
  }
  get desg() {
    return this.contactForm.get('desg');
  }
  get company() {
    return this.contactForm.get('company');
  }
  
}
