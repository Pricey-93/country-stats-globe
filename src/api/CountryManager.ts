import { ICountry, Translation } from "./ICountry";

export default class CountryManager {
  private countries: ICountry[];

  constructor(countries: ICountry[]) {
    this.countries = countries;
  }
  getCountries(): ICountry[] {return this.countries};

  getCountryByName(name: string): ICountry | undefined {
    const country = this.countries.find(country => country.name.common.toLowerCase() === name.toLowerCase());
    return country
  }

  searchByName(userInput: string): ICountry[] | undefined {
    const searchResult = this.countries.filter(country => country.name.common.toLowerCase().includes(userInput.toLowerCase()));
    return searchResult;
  }

  extractNameKeys(activeCountry: ICountry | undefined): Translation[] {
    return Object.values(activeCountry?.name.nativeName || {});
  }

  extractCurrencies(activeCountry: ICountry | undefined) {
    return Object.values(activeCountry?.currencies || {}).map(currency => currency.name);
  }

  extractLanguages(activeCountry: ICountry | undefined) {
    return Object.values(activeCountry?.languages || {});
  }

  extractBorderCountries(activeCountry: ICountry | undefined): ICountry[] {
    const borders = activeCountry?.borders;
    const currentBorderCountries: ICountry[] = [];
    borders?.forEach(border => {
      const match = this.countries.find(country => country.cca3 === border);
      if (match) {
        currentBorderCountries.push(match);
      }
    });
    return currentBorderCountries;
  }
}