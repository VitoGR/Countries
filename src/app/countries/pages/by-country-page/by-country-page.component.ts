import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  standalone: false,

  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];

  public initialValue: string = '';

  public isLoading: boolean = false;


  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.initialValue = this.service.chacheStore.byCountries.term;
    this.countries = this.service.chacheStore.byCountries.countries;
  }

  searchByCountry(term: string): void {

    this.isLoading = true;
    this.service.searchCountry(term).subscribe(countries => {
      this.countries = countries
      this.isLoading = false;
    });
  }


}
