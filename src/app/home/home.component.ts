import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myngOnChangeData:any='works ngOnChange'

  constructor(
    // private sidebarService: NbSidebarService
    ) { }

  ngOnInit(): void {
    console.log("works ngoninit");
    
  }

  ngOnDestroy(): void {
    alert("home component destroyed")
  }
  ngAfterContentInit(){
    console.log("loads ng after content init");
  }

  ngAfterViewInit(){
    console.log("work ngafterviewinit");
    
  }
  // toggle() {
  //   this.sidebarService.toggle(true);
  //   return false;
  // }

}
