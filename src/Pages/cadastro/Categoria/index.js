//looking for formik
import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000",
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute("name"),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastrar categoria: {values.nome} </h1>

      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        
        <br />
        <button>Cadastrar</button>
      </form>

      <br />

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria.nome}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
