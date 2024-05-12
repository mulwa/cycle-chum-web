import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { EventI } from 'app/models/eventI';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events:EventI[];

  constructor(private eventService:EventsService, private router:Router) { }

  ngOnInit(): void {
    this.getAllEvents();
  }
  getAllEvents(){
    this.eventService.getAllEvents().subscribe((res:EventI[])=>{
      this.events = res;
    });
  }
  openDetails(event:EventI){
    this.router.navigate(
      ['/event/details'],
      { queryParams: { event: event.id } }
    );
  }

}
