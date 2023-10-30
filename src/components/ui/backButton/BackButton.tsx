import { useNavigate } from "react-router-dom";

interface Iprops {
  value: string
}
export default function BackButton(props: Iprops) {
  const { value } = props;
  const navigate = useNavigate();

  function backButtonHandler() {
    navigate("/country-finder");
  }

  return (
    <button className="back-button" onClick={ () => backButtonHandler() }>
      <i className="fa-solid fa-arrow-left"></i>{ value }
    </button>
  )
}