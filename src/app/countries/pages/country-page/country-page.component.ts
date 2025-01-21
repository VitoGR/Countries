import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  standalone: false,

  templateUrl: './country-page.component.html',
  styles:
  `
  `
})
export class CountryPageComponent implements OnInit {

  public countr?: Country;

  constructor(private activated: ActivatedRoute,
    private service: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activated.params
      .pipe(
        switchMap(({ id }) => this.service.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {

        if (!country) return this.router.navigateByUrl('');

        console.log('País encontrado');

        return this.countr = country;

      });
  }



}
