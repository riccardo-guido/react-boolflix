import ProductionList from "./productions/ProductionList";
import { useSearch } from "../contexts/SearchContext";
export default function Main() {
  const { movies } = useSearch();
  return (
    <main>
      <ProductionList productions={movies} />
    </main>
  );
}
