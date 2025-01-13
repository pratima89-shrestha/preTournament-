import React, { useState } from 'react';
import { FaFistRaised, FaHandHoldingUsd, FaWallet } from 'react-icons/fa';

const TournamentType = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const tournamentTypes = [
    {
      type: 'No Prize',
      icon: <FaFistRaised size={32} style={{ color: '#0f0' }} />,
      description: 'Create tournaments without prizes and experience Community Gaming for free!',
    },
    {
      type: 'Sponsored',
      icon: <FaHandHoldingUsd size={32} style={{ color: '#0f0' }} />,
      description: 'The prize pool is made up of funds from a sponsor.',
      highlight: 'FREE TO ENTER FOR PLAYERS',
    },
    {
      type: 'Entry Fee',
      icon: <FaWallet size={32} style={{ color: '#0f0' }} />,
      description: 'The prize pool is made up of funds from each participant.',
      highlight: 'PLAYERS MUST PAY ENTRY FEE',
    },
  ];

  const handleSelect = (type) => {
    alert(`You selected the '${type}' tournament type!`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#0d0d0d', padding: '20px' }}>
      {tournamentTypes.map((tournament, index) => (
        <div
          key={tournament.type}
          style={{
            backgroundColor: '#1a1a1a',
            border: `1px solid ${hoveredIndex === index ? '#0f0' : 'transparent'}`,
            borderRadius: '8px',
            color: '#fff',
            width: '300px',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'border 0.3s',
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleSelect(tournament.type)}
        >
          {tournament.icon}
          <h3 style={{ marginTop: '15px' }}>{`${tournament.type} Tournament`}</h3>
          <p style={{ fontSize: '14px', color: '#aaa' }}>{tournament.description}</p>
          {tournament.highlight && (
            <strong style={{ display: 'block', marginTop: '10px', color: '#00f' }}>{tournament.highlight}</strong>
          )}
        </div>
      ))}
    </div>
  );
};

export default TournamentType;