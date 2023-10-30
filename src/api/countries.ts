import { ICountry } from "./ICountry";

export default async function fetchAllCountries(): Promise<ICountry[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all", {
      method: "GET",
    });
    return response.json();
  }
  catch (error) {
    console.error(error);
    throw error;
  }
}