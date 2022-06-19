import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


civilities: any = [ "Mr", "Mme"];

//contact form declaration
contactForm : FormGroup;
isContactFormSubmitted = false;
isContactFormSubmittedAndNotErrorOnClientSide = false;

options: any;

overlays: any[] | undefined;

constructor(
  private fb: FormBuilder, 
  //private mailService: MailsService,
  //private messageService: MessageService,
  //public dialogService: DialogService
  ) { 

  this.contactForm= this.fb.group({
    civility: ["", Validators.required],
    firstname: ["", Validators.required],
    lastname:["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone: [""],
    subject:["", Validators.required],
    message: ["", Validators.required],
    preference: ["email"]
  });
}
  ngOnInit(): void {

    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
    };
/*
    this.overlays = [
      new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"})
    ]
*/
  }

  // convenient getter for easy access to form fields
  get f() { return this.contactForm.controls; }


  //Resetting the form's value
  onReset() {
    this.isContactFormSubmitted = false;
    this.contactForm.reset();
    this.f.preference.setValue("email");
    this.f.preference.updateValueAndValidity();
  }


  //Handling submition of contact form
  onSubmitContactForm(){

    this.isContactFormSubmitted = true;

    //Handling error selecting to be shared by phone but not enter phone number
    if( this.f.preference.value === "phone"){
      if(!this.f.phone.value){
        //If the value is not set we assign an error to this field
        this.f.phone.setValidators([Validators.required])
        this.f.phone.updateValueAndValidity();
      }
    }
    else{
      this.f.phone.clearValidators();
      this.f.phone.updateValueAndValidity();
    }

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.isContactFormSubmittedAndNotErrorOnClientSide = true;
/*
    this.mailService.sendContactMail(JSON.stringify(this.contactForm.value)).pipe(finalize(() => this.isContactFormSubmittedAndNotErrorOnClientSide = false),
    ).subscribe((resp: any) =>{
      
      if(resp['message'] === "success"){
        this.messageService.add({severity:'success', detail: "Message envoyé avec succès."});
        this.onReset();
      }

      else{
        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi, re-essayez plus tard."});
      }
      
    });

  }
  */

}


}
