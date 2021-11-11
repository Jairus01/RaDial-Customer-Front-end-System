import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostObject, CommonService} from './../common.service'
@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css']
})
export class InterviewListComponent implements OnInit {
  closeResult = '';
  mySchedule : any = []
  selectedList : any = {}

  minValue: any;
  
  constructor(private modalService: NgbModal, private cs:CommonService) { }

  ngOnInit(): void {
    this.loadData()
  }
  

  loadData(){
    this.cs.list('interview').subscribe(d=>{
      this.mySchedule=(d as PostObject).data
      })
  }
  loadSelected(o:any){
    this.cs.load('interview/', o['_id']).subscribe(d=>{
      console.log(d)
      this.selectedList=(d as PostObject).data
      })
  }
  delete(o:any) {
    this.cs.delete('interview/',o['_id']).subscribe(d=>{
      this.loadData()
    })
  }
  update(o:any){
    let key = o['_id']
    this.cs.update('interview/',key,o).subscribe(d=>{
      this.loadData()
    })
  }

  open(content: any, o:any) {
    this.loadSelected(o)
    this.minValue = new Date();
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    this.update(o)
    });
  }

}
