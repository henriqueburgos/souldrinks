import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {

  @Input() name: any;
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder,) { }
  
  get email() {
    return this.redefinirSenhaForm.get('email');
  }

  redefinirSenha() {
    alert("Verifique seu email e redefina sua senha agora!");
    this.activeModal.dismiss();
  }

  redefinirSenhaForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  })

  ngOnInit(): void {
  }

}

