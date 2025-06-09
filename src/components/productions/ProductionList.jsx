import ProductionCard from "./ProductionCard";

export default function ProductionList({ productions }) {
  return (
    <section>
      {productions.map((movie) => (
        <ProductionCard key={movie.id} movie={movie}></ProductionCard>
      ))}
    </section>
  );
}
