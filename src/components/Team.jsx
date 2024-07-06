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
              GTAeMLFp5YqqmujTx3sWQy4z1govfvdt47KiNoYJE2Gn
            </h3>
          </div>
          {/* Icono de Solscan vinculado a la dirección del contrato del token */}
          <div className="contract-address" style={{ display: 'inline-block', marginRight: '10px', marginTop: '10px' }}>
            <a href={`https://solscan.io/token/GTAeMLFp5YqqmujTx3sWQy4z1govfvdt47KiNoYJE2Gn`} target="_blank" rel="noopener noreferrer">
              <img src="/img/solscan-icon.png" alt="Solscan" width={30} height={30} />
            </a>
          </div>
          {/* Icono de Twitter vinculado a la URL de Twitter */}
          <div className="twitter-link" style={{ display: 'inline-block' }}>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
            <img src="/img/twitter-icon.png" alt="Twitter" width={30} height={30} />
            </a>
          </div>
          <div className="buy-token" style={{ marginTop: '15px'}}>
            <a href="https://jup.ag/swap/GTAeMLFp5YqqmujTx3sWQy4z1govfvdt47KiNoYJE2Gn-USDC" className="btn-custom">
              $BUY GTA-VI TOKEN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
