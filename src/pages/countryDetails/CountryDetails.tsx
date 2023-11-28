import { useEffect, useState } from "react";
import { useContext } from "../../layouts/RootLayout";
import { useParams, useNavigate } from "react-router-dom";
import { ICountry } from "../../api/ICountry";
import BackButton from "../../components/ui/backButton/BackButton";
import BorderButton from "../../components/ui/borderButton/BorderButton";

export default function CountryDetails() {
  const { countryManager } = useContext();
  const { name } = useParams();
  const navigate = useNavigate();

  const [activeCountry, setActiveCountry] = useState<undefined | ICountry>();
  const [borderCountries, setBorderCountries] = useState<undefined | ICountry[]>();
  const [commonNativeName, setCommonNativeName] = useState<string>("");
  const [languages, setLanguages] = useState<string>("");
  const [currencies, setCurrencies] = useState<string>("");

  useEffect(() => {
    if (name) {
      setActiveCountry(countryManager.getCountryByName(name));
    }
  }, [name, countryManager]);

  useEffect(() => {
    const nameValues = countryManager.extractNameKeys(activeCountry);
    setCommonNativeName(nameValues.length > 0 ? nameValues[0].common : "");

    const currencies = countryManager.extractCurrencies(activeCountry);
    setCurrencies(currencies.join(", "));

    const languagesArray = countryManager.extractLanguages(activeCountry);
    setLanguages(languagesArray.join(", "));

    setBorderCountries(countryManager.extractBorderCountries(activeCountry));
  }, [activeCountry]);

  function borderClickHandler(country: ICountry) {
    setActiveCountry(country);
    navigate(`/country-stats-globe/${country.name.common.toLowerCase()}`);
  }

  return (
    <>
      <BackButton value="back" />
        <div className="country-details-wrapper">
          <figure>
            <img src={ activeCountry?.flags.png } alt={ activeCountry?.flags.alt } />
          </figure>
          <div className="country-details-container">
            <h2 className="country-title"> { activeCountry?.name.common } </h2>
            <div className="country-details-lists-wrapper">

              <dl className="country-details-list-left">

                <div className="country-details">
                  <dt>Native Name</dt>
                  <dd> { commonNativeName } </dd>
                </div>

                <div className="country-details">
                  <dt>Population</dt>
                  <dd> { activeCountry?.population.toLocaleString() } </dd>
                </div>

                <div className="country-details">
                  <dt>Region</dt>
                  <dd> { activeCountry?.region } </dd>
                </div>

                <div className="country-details">
                  <dt>Sub Region</dt>
                  <dd> { activeCountry?.subregion } </dd>
                </div>

                <div className="country-details">
                  <dt>Capital</dt>
                  <dd> { activeCountry?.capital ? activeCountry.capital.join(", ") : null } </dd>
                </div>

              </dl>

              <dl className="country-details-list-right">

                <div className="country-details">
                  <dt>Top Level Domain</dt>
                  <dd> { activeCountry?.tld } </dd>
                </div>

                <div className="country-details">
                  <dt>Currencies</dt>
                  <dd> { currencies } </dd>
                </div>

                <div className="country-details">
                  <dt>Languages</dt>
                  <dd> { languages } </dd>
                </div>

              </dl>
            </div>
            <div className="border-countries-container">
              <h3>Border countries: </h3>
              <div className="border-country-buttons">
                {
                  borderCountries ? borderCountries.map((borderCountry, i) => {
                  return <BorderButton
                  borderClickHandler={ borderClickHandler }
                  country={ borderCountry }
                  key={ i }
                  />
                })
                :
                null
                }
              </div> 
            </div> 
          </div>
        </div>
  </> 
  )
}