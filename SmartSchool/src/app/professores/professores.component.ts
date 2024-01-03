import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public professorForm!: FormGroup;
  title = "Professores";
  public ProfSelected: Professor | null = null;

  public professores =[
    {id: 1, nome: 'Ana', disciplina: 'Português'},
    {id: 2, nome: 'Jonata', disciplina: 'Matemática'},
    {id: 3, nome: 'Flavia', disciplina: 'História'},
    {id: 4, nome: 'Pedro', disciplina: 'Ciências'},
    {id: 5, nome: 'Carla', disciplina: 'Geografia'},
    {id: 6, nome: 'Rafael', disciplina: 'Física'},
    {id: 7, nome: 'Carol', disciplina: 'Química'},
    {id: 8, nome: 'André', disciplina: 'Inglês'},
    {id: 9, nome: 'Maria', disciplina: 'Artes'},
    {id: 10, nome: 'Gabriel', disciplina: 'Educação Física'},
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
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    })
  }

  professorSubmit(){
    console.log(this.professorForm.value);
  }

  professorSelect(professor: Professor){
    this.ProfSelected = professor;
    this.professorForm.patchValue(professor);
  }

  voltar(){
    this.ProfSelected = null;
  }

  

}
