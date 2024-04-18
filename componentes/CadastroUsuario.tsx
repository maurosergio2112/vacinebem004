import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { Formik } from 'formik';
import axios from 'axios';

const CadastroUsuario: React.FC = () => {
  return (
    <Formik
      initialValues={{ nome: '', email: '', dataNascimento: '', profissao: '' }}
      onSubmit={async (values, actions) => {
        try {
          // Realizar a requisição para cadastrar o usuário no backend
          await axios.post('/cadastrar-usuario', {
            nome: values.nome,
            email: values.email,
            dataNascimento: values.dataNascimento,
            profissao: values.profissao,
          });
          alert('Usuário cadastrado com sucesso!');
        } catch (error) {
          console.error('Erro ao cadastrar usuário:', error);
          alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
        <View>
          <Text>Cadastro de Usuário</Text>
          <TextInput
            onChangeText={handleChange('nome')}
            onBlur={handleBlur('nome')}
            value={values.nome}
            placeholder="Nome"
          />
          {errors.nome && touched.nome && <Text>{errors.nome}</Text>}
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
          />
          {errors.email && touched.email && <Text>{errors.email}</Text>}
          <TextInput
            onChangeText={handleChange('dataNascimento')}
            onBlur={handleBlur('dataNascimento')}
            value={values.dataNascimento}
            placeholder="Data de Nascimento"
          />
          {errors.dataNascimento && touched.dataNascimento && <Text>{errors.dataNascimento}</Text>}
          <TextInput
            onChangeText={handleChange('profissao')}
            onBlur={handleBlur('profissao')}
            value={values.profissao}
            placeholder="Profissão"
          />
          {errors.profissao && touched.profissao && <Text>{errors.profissao}</Text>}
          <TouchableOpacity onPress={() => handleSubmit()} disabled={isSubmitting}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default CadastroUsuario;
