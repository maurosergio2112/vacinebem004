import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CadastroUsuario from './componentes/CadastroUsuario';
import Login from './componentes/Login';
import FormularioVacinas from './componentes/FormularioVacinas';
import Home from './componentes/Home';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Usuario">
        <Stack.Screen name="Usuario" options={{ title: 'Usuário' }}>
          {() => (
            <UsuarioStack />
          )}
        </Stack.Screen>
        <Stack.Screen name="Formulario" component={FormularioVacinas} options={{ title: 'Formulário' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const UsuarioStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{ title: 'Login' }}>
        {({ navigation }) => (
          <Login
            onLogin={() => navigation.navigate('Home')} // Exemplo de navegação após o login
            onCadastro={() => navigation.navigate('Cadastro')}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Cadastro" component={CadastroUsuario} options={{ title: 'Cadastro' }} />
    </Stack.Navigator>
  );
};

export default App;
