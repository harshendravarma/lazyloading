import { Component, HostListener,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'LazyLoadingAssignment';
  array1=  Array(50);
  len:number=50;
  Loader: boolean = false;

  constructor() { }
 
  @HostListener('window:scroll', ['$event']) scrollEvent(event) {
   
    if((window.innerHeight+ document.documentElement.scrollTop)>=document.documentElement.offsetHeight){
       this.Loader = true;      
      setTimeout(() => {
        this.Loader = false;
        this.array1.length+=10;

       }, 4000);

      }
    }


 

}


  
    


    




  



