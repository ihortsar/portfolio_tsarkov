import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends AppComponent {
  constructor(public home: HomeComponent) {
    super();
  }
  isChecked = false
  nameValue = ''
  emailValue = ''
  textValue = ''
  buttonDisabled = true

  sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    this.home.sent = true
    fetch("https://formspree.io/f/meqbvjnp", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
        'Accept': 'application/json'
      },

    }).then(() => {
      setTimeout(() => {
        this.nameValue = ''
        this.emailValue = ''
        this.textValue = ''
        this.isChecked = false
        this.home.sent = false
      }, 2000);


    }).catch((error) => {
      console.log(error);
    });
  }

  inputChecked() {
    if (this.isChecked == false) {
      this.isChecked = true
    } else { this.isChecked = false }
    console.log(this.isChecked);
  }

  inputCheck(value) {
    if (this.nameValue.length > 0 && this.emailValue.length && this.textValue.length && this.isChecked === true) {
      this.buttonDisabled = false
    } else {
      this.buttonDisabled = true

    }


  }


}
