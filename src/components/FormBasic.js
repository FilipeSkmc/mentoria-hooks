import React, { useState } from 'react';

const MIN = 3;

function FormBasic() {
  /** montando o estado como object */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  /** constante que realiza a desabilita o botão */
  const condition = (
    formData.name.length < MIN || !formData.email.includes('@')
  );

  /**
   * Função que realiza a mudança no estado
   * detalhe no espalhamento, que é necessário para manter
   * os dados que já foram inseridos.
   */
  function handleInputChange({ target: { name, value } }) {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <div className="form-basic">
      <p>Controlando um state como objeto</p>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            value={ formData.name }
            onChange={ handleInputChange }
          />
        </label>
        <br />
        <label htmlFor="">
          Email:
          <input
            type="email"
            name="email"
            value={ formData.email }
            onChange={ handleInputChange }
          />
        </label>
        <br />
        <button
          disabled={ condition }
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormBasic;
