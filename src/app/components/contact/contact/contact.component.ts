import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  public bios: any [ ] = [
    {
      name: "Luana Florentino",
      img: "assets/lauraFlorentino.png",
      descriptionLess: "Luana Florentino worked for OBS as the Broadcast Training Programme Assistant for the Olympic Games Rio 2016. She has since joined the OBS team in Madrid as the BTP and Training Coordinator ",
      descriptionMore: ` in January 2017, responsible for the planning and coordination of the project, including liaising with the partner universities, organising presentations, workshops and all training resources, processing applications and overseeing the operation of the Programme during Games-time.
          Luana has a degree in Social Communications with a major in Public Relations from the Federal University of Paraná, and was introduced to the sports broadcasting field when she worked as the Broadcast Venue Manager Assistant in Curitiba during the FIFA World Cup in 2014.`
    },
    {
      name: "Jim Owens",
      img: "assets/jimOwens.png",
      descriptionLess: "Jim Owens has worked and taught in the television industry for more than 30 years. He has been involved in the broadcast of 15 Olympic Games and has been training students to work in broadcasting ",
      descriptionMore:  `the Olympics since 1984. Owens has served as the author or co-author of several textbooks on television production, including Television Sports Production, Television Production, and the Video Production Handbook. He has also published more than 30 articles in industry-specific magazines in the USA and Europe and has taught television production workshops in universities in eight countries. Owens is currently the Dean of the School of Communication Arts at Asbury University, USA, where he has taught since 1981.`
    }
    ];
  expanded : boolean = false;


  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      // recaptcha: ['', Validators.required],
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      subject: ['', [Validators.required]],
      agree: ['', [Validators.required]],
    });
  }

  saveData(){
    console.log(this.contactForm.value);
  }

  toggleMore(bio) {
    bio.expanded = !bio.expanded;
  }

}

