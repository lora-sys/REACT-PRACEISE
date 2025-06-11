export interface Organization{
  id:string;
  name:string;
  address:string;
  logo?:string;
  website?:string;
  countriesServed:string[];
}

export interface SearchCriteria {
  name?: string;
  homecountry?: string;
  servedCountries?: string[];
}