import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../model/user';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 id:number;
 public values:Data;
  constructor( private ps:ProjectService , private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=+this.router.snapshot.paramMap.get('id');
    if(this.id!=0){
      this.ps.getId(this.id).subscribe((res)=>{
        console.log(res);

        this.values=res;
        
      })
    }
    
    
  }

}
