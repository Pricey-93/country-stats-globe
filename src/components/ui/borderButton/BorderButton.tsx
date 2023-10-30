import { ICountry } from "../../../api/ICountry";

interface IProps {
  borderClickHandler: (country: ICountry) => void,
  country: ICountry,
}
export default function BorderButton(props: IProps) {
  const { country, borderClickHandler } = props;

  return (
    <button className="border-button" onClick={ () => borderClickHandler(country) }>{ country.name.common }</button>
  )
}