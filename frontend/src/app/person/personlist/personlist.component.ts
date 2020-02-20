import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service'
import { Employee } from '../../models'

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  personList: Employee[] = []

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersonList();
  }

  getPersonList(){
    this.personService.getPersonList().subscribe( (res:any) => this.personList = res.data, err => console.log('Err =', err) );
  }

}
