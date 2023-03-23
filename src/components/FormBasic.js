import React, { useEffect, useState } from 'react';

const MIN = 3;

function FormBasic() {
  /** parte 1 */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  /** parte 2 */
  const [disabled, setDisabled] = useState(true);
  /** parte 2 */
  useEffect(() => {
    function enableButton() {
      const condition = (
        formData.name.length < MIN || !formData.email.includes('@')
      );
      setDisabled(condition);
    }
    enableButton();
  }, [formData]);

  /** parte 1 */
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
          disabled={ disabled }
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormBasic;
