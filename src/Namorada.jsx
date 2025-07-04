import { Link } from 'react-router-dom';

export default function Namorada() {
  return (
    <div className="container">
      <h1>Para minha futura namorada 💖</h1>
      <p>“Desde que te conheci, tudo ficou mais bonito". (Briga com o Everton e palhaçada dele tudo isso aqui)</p>
      <img src="/namorada.jpg" alt="Namorada" className="image" />
      <Link to="/" className="back-button">Voltar</Link>
    </div>
  );
}