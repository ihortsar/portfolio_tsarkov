import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends AppComponent {
  nameValue = ''
  emailValue = ''
  textValue = ''
  buttonDisabled = true

  sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/meqbvjnp", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
        'Accept': 'application/json'
      }
    }).then(() => {
      this.nameValue = ''
      this.emailValue = ''
      this.textValue = ''
    }).catch((error) => {
      console.log(error);
    });
  }

  inputCheck(value) {
    if (this.nameValue.length > 0 && this.emailValue.length && this.textValue.length) {
      this.buttonDisabled = false
    } else {
      this.buttonDisabled = true

    }
  }
}
