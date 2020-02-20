import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import * as $ from 'jquery';
import { PersonService } from '../person.service';



@Component({
  selector: 'app-findperson',
  templateUrl: './findperson.component.html',
  styleUrls: ['./findperson.component.css']
})
export class FindpersonComponent implements OnInit {

  files:any = [];
  defaultImgSrc:string = 'https://icon-library.net/images/no-profile-pic-icon/no-profile-pic-icon-5.jpg';
  matchedImgSrc:string;

  constructor(private personService: PersonService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.matchedImgSrc = this.defaultImgSrc;
  }

  showImgPrev(ev){
    this.files = ev.target.files;
    if(this.files && this.files.length > 0){
      this.matchedImgSrc = this.defaultImgSrc;
      var reader = new FileReader();
      reader.onload = function (e : any) {
          $('#preview').attr('src', e.target.result).removeClass('d-none');
      }
      reader.readAsDataURL(this.files[0]);
    }
  }

  verifyImg(){
    if(this.files && this.files.length > 0){
      console.log('File =', this.files[0]);
      const formData = new FormData();
      formData.append('file', this.files[0]);
      this.spinner.show();
      this.personService.mathcFace(formData).subscribe( 
        (res:any) => { 
          if(res.statusCode == 'OK' && res.data && res.data.imgName){
            this.matchedImgSrc = 'static/images/'+res.data.imgName;
          }
          this.spinner.hide();
        }, 
        err => { 
          console.log('Error = ', err)
        }
      );
    }
  }

}
