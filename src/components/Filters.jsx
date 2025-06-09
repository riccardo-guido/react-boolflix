import { useState } from "react";
import { useSearch } from "../contexts/SearchContext";

export default function Filters() {
  const [term, setTerm] = useState("");
  const { search } = useSearch();

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    search(term);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="text" value={term} onChange={handleInputChange} />
      <button type="submit">Cerca</button>
    </form>
  );
}
