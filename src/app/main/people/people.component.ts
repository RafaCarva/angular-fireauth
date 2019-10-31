import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Person } from '../person';
import * as faker from 'faker';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people$: Observable<Person[]>;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.people$ = this.mainService.getPeople();
  }

  addOne() {
    const p: Person = {
      name: faker.name.findName(),
      age: faker.random.number({min: 18, max: 99}),
      email: faker.internet.email(),
      company: faker.company.companyName(),
      country: faker.address.country()
    };
    this.mainService.addPerson(p);
  }

  generate() {
    for (let i = 0; i < 5; i++) {
      this.addOne();
    }
  }
}
