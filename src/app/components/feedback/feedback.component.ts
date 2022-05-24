import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  feedbackFormulario = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(5)]], // é uma função dentro do array - um método
    email: ['', [Validators.required, Validators.email]],
    comentario: ['',[Validators.required, Validators.maxLength(50)]],
   
   
  });

  get nome() {
    return this.feedbackFormulario.get('nome');
  }

  get email() {
    return this.feedbackFormulario.get('email');
  }

  get comentario() {
    return this.feedbackFormulario.get('comentario');
  }



  onSubmit() {
    alert(`Obrigado pelo Feedback!`);
    console.log(this.feedbackFormulario.value);
  }

  
  ngOnInit(): void {
  }

}
