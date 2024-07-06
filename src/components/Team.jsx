import React from "react";

export const Team = (props) => {


  // URL de Twitter
  const twitterUrl = 'https://x.com/GTA_VI_Gorilla';

  const borderStyles = {
    border: '2px solid black' // Especifica el grosor, el estilo y el color del borde
  };

  return (
    <div id="team" className="text-center" style={{ marginBottom: '-100px'}}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>CONTRACT ADDRESS</h2>
          <div className="container-contract" style={borderStyles}>
            <h3>
              3zVmcnazV5GEV9JeYthZnN7cZGUdbtp3MsohCiNp6Fyx
            </h3>
          </div>
          {/* Icono de Solscan vinculado a la dirección del contrato del token */}
          <div className="contract-address" style={{ display: 'inline-block', marginRight: '10px', marginTop: '10px' }}>
            <a href={`https://https://dexscreener.com/`} target="_blank" rel="noopener noreferrer">
              <img src="/img/dexlogo.png" alt="Solscan" width={30} height={30} />
            </a>
          </div>
          {/* Icono de Twitter vinculado a la URL de Twitter */}
          <div className="buy-token" style={{ marginTop: '15px'}}>
            <a href="https://dexscreener.com/solana/3zvmcnazv5gev9jeythznn7czgudbtp3msohcinp6fyx" className="btn-custom">
              $BUY GTA-VI TOKEN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
