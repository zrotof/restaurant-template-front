import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MailService } from 'src/app/services/mail/mail.service';
import { finalize } from 'rxjs/operators';
import { MiniHero } from 'src/app/models/mini-hero';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers:[MessageService]
})
export class ContactComponent implements OnInit {


civilities: any = [ "Mr", "Mme"];

//contact form declaration
contactForm : FormGroup;
isContactFormSubmitted = false;
isContactFormSubmittedAndNotErrorOnClientSide = false;

options: any;

overlays: any[] | undefined;

miniHero !: MiniHero;

constructor(
  private fb: FormBuilder, 
  private mailService: MailService,
  private messageService: MessageService
  ) { 

  this.contactForm= this.fb.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", Validators.required,],
    message: ["", Validators.required]
  });
}
  ngOnInit(): void {

    this.initMiniHero();

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

  initMiniHero(){
    this.miniHero = {
      title: "À propos",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image: "../../../assets/img/contact/header-bg.jpeg"
    }
  }

  // convenient getter for easy access to form fields
  get f() { return this.contactForm.controls; }


  //Resetting the form's value
  onReset() {
    this.isContactFormSubmitted = false;
    this.contactForm.reset();
  }


  //Handling submition of contact form
  onSubmitContactForm(){

    this.isContactFormSubmitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    this.messageService.add({severity:'success', detail: "Message transmis avec succès."});
    this.onReset();
/*
    this.isContactFormSubmittedAndNotErrorOnClientSide = true;

    this.mailService.sendContactMail(JSON.stringify(this.contactForm.value)).pipe(
      finalize(() => 
        this.isContactFormSubmittedAndNotErrorOnClientSide = false
      )
    ).subscribe((resp: any) =>{
      
      if(resp['message'] === "success"){
        this.messageService.add({severity:'success', detail: "Message transmis avec succès."});
        this.onReset();
      }

      else{
        this.messageService.add({severity:'error',detail: "Erreur lors de l'envoi, re-essayez plus tard."});
      }
      
    });
    */
  }

  
}


