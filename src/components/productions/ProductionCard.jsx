export default function ProductionCard({ movie }) {
  return (
    <ul>
      <li>Titolo: {movie.title}</li>
      <li>Titolo originale: {movie.originalTitle}</li>
      <li>Voto: {movie.rating}</li>
      <li>Lingua: {movie.language}</li>
    </ul>
  );
}
