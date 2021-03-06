

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service :EmployeeService,
    private firestore: AngularFirestore,private toastr :ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? :NgForm) {
    if (form!=null)
    form.resetForm();
    this.service.formData={
      id : null,
      fullName :'',
      city :'',
      empCode :'',
      mobile :'',
    }
  }

  onSubmit(form:NgForm){
    let data=form.value;

    this.firestore.collection('employees').add(data);
    this.resetForm(form);
    this.toastr.success('Submitted succesfully','Saru.Collection')
  }
  

}
