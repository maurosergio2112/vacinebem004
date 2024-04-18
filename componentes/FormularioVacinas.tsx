import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

interface Vacina {
  id: number;
  nome: string;
}

interface Pergunta {
  id: number;
  texto: string;
}

const FormularioVacinas: React.FC = () => {
  const [vacinas, setVacinas] = useState<Vacina[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVacinas() {
      try {
        const response = await axios.get('/vacinas'); // Endpoint da sua API para obter as vacinas
        setVacinas(response.data);
      } catch (error) {
        console.error('Erro ao buscar vacinas:', error);
        setError('Erro ao buscar vacinas. Por favor, tente novamente.');
      }
    }

    fetchVacinas();
  }, []);

  const perguntas: Pergunta[] = [
    { id: 1, texto: 'Já tomou a vacina contra gripe (Influenza)?' },
    { id: 2, texto: 'Já tomou a vacina pneumocócica conjugada (VPC13)?' },
    { id: 3, texto: 'Já tomou a vacina contra hepatite B?' },
    { id: 4, texto: 'Já tomou a vacina contra febre amarela?' },
    { id: 5, texto: 'Já tomou a vacina HPV4 contra o Papilomavírus humano?' },
    { id: 6, texto: 'Já tomou a vacina VSR contra o Vírus Sincicial Respiratório?' },
    { id: 7, texto: 'Já tomou a Vacina dupla bacteriana do tipo adulto dT?' },
    { id: 8, texto: 'Já tomou a vacina contra hepatite B?' },
  ];

  return (
    <div>
      <h2>Formulário de Vacinas</h2>
      <Formik
        initialValues={perguntas.reduce((acc, cur) => ({ ...acc, [`${cur.id}`]: '' }), {})}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // Enviar respostas para o backend
            await axios.post('/responder-formulario', values); // Endpoint da sua API para enviar as respostas
            alert('Respostas enviadas com sucesso!');
          } catch (error) {
            console.error('Erro ao enviar respostas:', error);
            alert('Erro ao enviar respostas. Por favor, tente novamente.');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            {perguntas.map((pergunta) => (
              <div key={pergunta.id}>
                <p>{pergunta.texto}</p>
                <label>
                  <Field
                    type="radio"
                    name={`${pergunta.id}`}
                    value="sim"
                  />{' '}
                  Sim
                </label>
                <label>
                  <Field
                    type="radio"
                    name={`${pergunta.id}`}
                    value="nao"
                  />{' '}
                  Não
                </label>
              </div>
            ))}
            <button type="submit" disabled={isSubmitting}>
              Enviar Respostas
            </button>
          </Form>
        )}
      </Formik>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormularioVacinas;
