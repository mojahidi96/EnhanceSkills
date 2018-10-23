import { Component, OnInit } from '@angular/core';
import { StateServiceService } from './state-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(private stateServiceService: StateServiceService) { }
  states;
  ngOnInit() {
    this.getState();
  }
  getState() {
    this.stateServiceService.getStates().subscribe(result => this.states = result);
  }
}
