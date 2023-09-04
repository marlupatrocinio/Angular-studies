import { Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Provider, SchemaMetadata, Type, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements Component, OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit{
  ngAfterViewInit(): void {
    console.log("ok");
  }
  ngAfterViewChecked(): void {
    console.log("ok");
  }
  ngAfterContentInit(): void {
    console.log("ok");
  }
  ngAfterContentChecked(): void {
    console.log("ok");
  }
  ngDoCheck(): void {
    console.log("ok");
  }
  ngOnInit(): void {
    console.log("ok");
  }
  

}
