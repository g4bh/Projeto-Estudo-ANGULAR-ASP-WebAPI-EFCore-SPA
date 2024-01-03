import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {

  public modalRef?: BsModalRef;
  public alunoForm!: FormGroup;
  public title = 'Alunos';
  public AlunoSelected: Aluno | null = null;
  public textSimple: string | undefined;
  
  public alunos = [
    { id: 1, nome: 'Maria', sobrenome: 'Andrade', telefone: 875837734 },
      { id: 2, nome: 'João', sobrenome: 'Silva', telefone: 932847261  },
      { id: 3, nome: 'Ana', sobrenome: 'Santos', telefone: 768493028  },
      { id: 4, nome: 'Pedro', sobrenome: 'Oliveira', telefone: 904567832  },
      { id: 5, nome: 'Luiza', sobrenome: 'Pereira', telefone: 654321789 },
      { id: 6, nome: 'Rafael', sobrenome: 'Rodrigues', telefone: 879012345  },
      { id: 7, nome: 'Carolina', sobrenome: 'Souza', telefone: 745896231  },
      { id: 8, nome: 'André', sobrenome: 'Ferreira', telefone: 621784539  },
      { id: 9, nome: 'Juliana', sobrenome: 'Martins', telefone: 839204567 },
      { id: 10, nome: 'Gabriel', sobrenome: 'Lima', telefone: 567890123 },
  ];

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno:Aluno){
    this.AlunoSelected = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.AlunoSelected = null;
  }



}
