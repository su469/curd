import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
 users:any;
 data:any;
 
  constructor(private ps:ProjectService) { }

  ngOnInit() {
 this.dataget();
  }
dataget(){
  this.ps.getdata().subscribe((res)=>{
    this.users=res;
 console.log("jhsajhs",res);
 
   })
}

  ondelete(id:any){
   
    console.log("delete",id);

   this.ps.deletedata(id).subscribe(()=>{
     console.log("delete",id);
     this.dataget()
   })
 }
}
