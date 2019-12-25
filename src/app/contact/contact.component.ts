import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor() {
    window.onscroll = function() {scrollToTop(); };
    function scrollToTop() {
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById('BtnToTop').classList.add('contact__up-btn--active');
      } else {
        document.getElementById('BtnToTop').classList.remove('contact__up-btn--active');
      }
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log('Submitted!', this.form);
    this.form.reset();
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
