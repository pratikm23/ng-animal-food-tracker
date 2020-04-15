import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/services/meals.service';
import { Meal } from 'src/app/models/common.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.css']
})
export class ReporterComponent implements OnInit {
  public columnDefs: any;
  public rowData: Observable<Meal[]>;

  constructor(
    private mealsService: MealsService
  ) { }

  ngOnInit() {
    this.columnDefs = [
        {headerName: 'Park', field: 'park.name', sortable: true, filter: true},
        {headerName: 'City', field: 'park.city', sortable: true, filter: true},
        {headerName: 'Country', field: 'park.country', sortable: true, filter: true},
        {headerName: 'Species', field: 'species.name', sortable: true, filter: true}, 
        {headerName: 'Meal', field: 'food.name', sortable: true, filter: true},
        {headerName: 'How much they ate?', field: 'food_quantity', sortable: true, filter: true},
        {headerName: 'When did they eat?', field: 'time', sortable: true, filter: 'agDateColumnFilter'},
        {headerName: 'How many of them ate?', field: 'species_quantity', sortable: true, filter: true},
  ];
    this.rowData = this.mealsService.getAllMeals();
  }

}
