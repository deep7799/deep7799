import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EmployeeDetails } from '../model/EmpDetails';

@Component({
  selector: 'app-deepak',
  templateUrl: './deepak.component.html',
  styleUrls: ['./deepak.component.css'],
})
export class DeepakComponent implements OnInit {
  dataGroup!: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.dataGroup = this.fb.group({
      users: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      const userForms = data.map((user: any) => {
        return this.fb.group({
          id: new FormControl(user.id),
          name: new FormControl(user.name),
          username: new FormControl(user.username),
          phone: new FormControl(user.phone),
        });
      });

      userForms.forEach((userForm: any) => {
        (this.dataGroup.get('users') as FormArray).push(userForm);
      })
    });
  }

  get users() {
    return (this.dataGroup.get('users') as FormArray);
  }

  getData(){

  }

  clearData(){
    (this.dataGroup.get('users') as FormArray).clear();
  }

  deleteUser(index: number){
    (this.dataGroup.get('users') as FormArray).removeAt(index);
  }
}
