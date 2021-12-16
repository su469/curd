import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Data } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-createdata',
  templateUrl: './createdata.component.html',
  styleUrls: ['./createdata.component.css']
})
export class CreatedataComponent implements OnInit {
 users:any;
 public id:number;
 public header:string;
 data:Data=new Data(1,"","","");
  
  constructor(private ps:ProjectService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {

    this.id=+this.router.snapshot.paramMap.get('id');
    this.header = this.id===0?'Create':'Edit';
    if(this.id!=0){
      this.ps.getId(this.id).subscribe((res)=>{
        this.data=res;
        console.log(this.data);
      })
    }
  }
   

  submitform(data:any){
    if(this.id === 0){
      this.ps.postdata(data).subscribe((res)=>{
        console.log(res);
      })
    }else{
      this.ps.updateData(this.id,data).subscribe((res)=>{
        console.log(res)
      })
    }
   
this.route.navigate(['/display'])

 }
  
}
