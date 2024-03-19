import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
export default function SearchBox() {
  const dispatch = useDispatch();

  const onChangeValue = (e) => dispatch(changeFilter(e.target.value));
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={onChangeValue} className={css.searchBox} />
    </>
  );
}
