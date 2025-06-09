import { SearchProvider } from "./contexts/SearchContext";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <SearchProvider>
      <Header />
      <Main />
    </SearchProvider>
  );
}
