import React from 'react';

const AreasDeAtuacao = () => (
    <section id="areas-de-atuacao" aria-labelledby="areas-h2">
      <div className="container">
        <h2 id="areas-h2">Especialistas na Defesa dos Direitos do Trabalhador</h2>
        <p className="lead" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 32px auto'}}>
            Atuamos em diversas frentes para garantir que seus direitos sejam integralmente respeitados. Veja algumas de nossas áreas de especialização:
        </p>
        <div className="grid grid-3">
          <div className="card"><h3>Verbas Rescisórias</h3><p>Cálculo e cobrança de todos os valores devidos na sua demissão (aviso prévio, férias, 13º, FGTS).</p></div>
          <div className="card"><h3>Horas Extras</h3><p>Lutamos pelo pagamento correto de horas extras, adicional noturno e horas de sobreaviso.</p></div>
          <div className="card"><h3>Rescisão Indireta</h3><p>Quando o empregador comete falta grave, ajudamos você a sair do emprego recebendo todos os direitos.</p></div>
          <div className="card"><h3>Assédio Moral</h3><p>Buscamos a reparação para trabalhadores que sofrem perseguição, humilhação ou constrangimento no trabalho.</p></div>
          <div className="card"><h3>Acidente de Trabalho</h3><p>Garantimos seus direitos a estabilidade, indenizações e benefícios previdenciários.</p></div>
          <div className="card"><h3>Insalubridade/Periculsidade</h3><p>Atuamos para que você receba o adicional por trabalhar em condições que prejudicam sua saúde.</p></div>
          <div className="card"><h3>Reversão de Justa Causa</h3><p>Analisamos e revertemos demissões por justa causa aplicadas de forma indevida ou desproporcional.</p></div>
          <div className="card"><h3>Acúmulo de Função</h3><p>Buscamos o pagamento de um adicional salarial quando você exerce funções além do seu contrato.</p></div>
          <div className="card"><h3>Doença Ocupacional</h3><p>Defendemos seus direitos quando uma doença é causada ou agravada pelo seu trabalho.</p></div>
        </div>
      </div>
    </section>
  );

export default AreasDeAtuacao;
