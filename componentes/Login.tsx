import React from 'react';
import { Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

interface LoginProps {
  onLogin: () => void;
  onCadastro: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onCadastro }) => {
  return (
    <Formik
      initialValues={{ cpf: '', senha: '' }}
      onSubmit={(values, actions) => {
        if (values.cpf === '12345678900' && values.senha === 'senha123') {
          onLogin();
        } else {
          actions.setFieldError('cpf', 'CPF ou senha incorretos.');
        }
        actions.setSubmitting(false);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
        <>
          <Text>Login</Text>

          <Text>
            <TextInput
              onChangeText={handleChange('cpf')}
              onBlur={handleBlur('cpf')}
              value={values.cpf}
              placeholder="CPF"
            />
          </Text>
          {errors.cpf && touched.cpf && <Text>{errors.cpf}</Text>}
          <Text>
            <TextInput
              onChangeText={handleChange('senha')}
              onBlur={handleBlur('senha')}
              value={values.senha}
              secureTextEntry
              placeholder="Senha"
            />
          </Text>
          {errors.senha && touched.senha && <Text>{errors.senha}</Text>}
          <Text>
            <Button onPress={() => handleSubmit()} title="Entrar" disabled={isSubmitting} />
          </Text>
          <Text><Button onPress={onCadastro} title="Cadastro" /></Text>
        </>
      )}
    </Formik>
  );
};

export default Login;
