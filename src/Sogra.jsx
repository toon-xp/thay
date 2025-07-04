import { Link } from 'react-router-dom';

export default function Sogra() {
  return (
    <div className="container">
      <h1>Para a melhor sogra 💐</h1>
      <p>“Uma sogra como você é um presente raro. Obrigado por me acolher com tanto carinho, cuidarei e me esforçarei paara fazer a nossa Leticia feliz.”</p>
      <img src="/sogra.jpg" alt="Sogra" className="image" />
      <Link to="/" className="back-button">Voltar</Link>
    </div>
  );
}