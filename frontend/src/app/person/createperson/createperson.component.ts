import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { PersonService } from '../person.service'


@Component({
  selector: 'app-createperson',
  templateUrl: './createperson.component.html',
  styleUrls: ['./createperson.component.css']
})
export class CreatepersonComponent implements OnInit {

  files:any = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  
  showImgPrev(ev){
    this.files = ev.target.files;
    if(this.files && this.files.length > 0)

    var reader = new FileReader();
    reader.onload = function (e : any) {
        $('#preview').attr('src', e.target.result).removeClass('d-none');
    }
    reader.readAsDataURL(this.files[0]);
  }

  createEmp(data){
    if(this.files && this.files.length > 0){
      const formData = new FormData();
      formData.append('file', this.files[0]);
      formData.append('data', JSON.stringify(data));
      this.personService.createPerson(formData).subscribe((res) => {
        console.log('Response = ', res);
        $('#preview').attr('src', 'https://icon-library.net/images/no-profile-pic-icon/no-profile-pic-icon-5.jpg');
        $('input[type="file"]').val('');
      }, (err) => {
        console.log('Error = ', err);
      });
    }
  }

}
