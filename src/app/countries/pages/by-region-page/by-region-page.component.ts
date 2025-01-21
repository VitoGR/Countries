import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  standalone: false,

  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  public selectedRegion?: Region;

  public isLoading: boolean = false;

  constructor(private service: CountriesService) { }
  ngOnInit(): void {
    this.selectedRegion = this.service.chacheStore.byRegion.region;
    this.countries = this.service.chacheStore.byRegion.countries;
  }

  public searchByRegion(region: Region): void {

    this.isLoading = true;
    this.selectedRegion = region;

    this.service.searchRegion(region).subscribe(countries => {
      this.countries = countries
      this.isLoading = false;

    });

  }

}
