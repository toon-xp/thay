import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [buttonStyle, setButtonStyle] = useState({});

  const fugir = () => {
    const x = Math.random() * 650 - 790;
    const y = Math.random() * 450 - 550;
    setButtonStyle({
      position: 'relative',
      left: `${x}px`,
      top: `${y}px`,
      transition: 'all 0.1s',
    });
  };

  return (
    <div className="container">
      <h1>Thay, meu amor...</h1>
      <h1>O que você deseja ser minha?</h1>
      <div className="buttons">
        <button onClick={() => navigate('/sogra')}>Minha sogra</button>
        <button onClick={() => navigate('/namorada')}>Minha namorada</button>
        <button style={buttonStyle} onMouseEnter={fugir}>
          Nenhuma das opções 💔
        </button>
      </div>
    </div>
  );
}