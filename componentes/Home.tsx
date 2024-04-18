import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Componentes de abas
const Tab = createBottomTabNavigator();

// Componente para as informações do usuário
const UserInfoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Informações do Usuário</Text>
      {/* Adicione aqui as informações do usuário */}
    </View>
  );
};

// Componente para as vacinas marcadas como "sim"
const VacinasSimScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Vacinas Marcadas como "Sim"</Text>
      {/* Adicione aqui as vacinas marcadas como "sim" pelo usuário */}
    </View>
  );
};

// Componente para as vacinas marcadas como "não"
const VacinasNaoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Vacinas Marcadas como "Não"</Text>
      {/* Adicione aqui as vacinas marcadas como "não" pelo usuário */}
    </View>
  );
};

// Componente para as informações de cada vacina
const VacinaInfoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <div id='div-influenza' >
            <h2>Vacina gripe influenza quadrivalente de alta concentração - “High dose” HD4V</h2>
        <Text>Recomendada preferencialmente para todos os adultos a partir de 60 anos de
             idade, em especial imunocomprometidos.</Text>
             <h4>Contraindicação</h4>

             <Text> Contra indicada para Pessoas com alergia grave anafilaxia
                 a algum componente da vacina ou a dose anterior.</Text>
                 <h4>Esquemas de doses</h4>
                 <Text>Dose única.</Text>
                 <Text>Viajantes para o Hemisfério Norte ou brasileiros que vivem na região Norte do país, a depender da vacina disponível
 e da compatibilidade com cepas circulantes, podem se beneficiar de uma dose extra da vacina</Text>



        </div>
      
      {/* Adicione aqui as informações detalhadas de cada vacina */}
    </View>
  );
};

// Componente da tela Home com abas
const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Usuário" component={UserInfoScreen} />
      <Tab.Screen name="Vacinas Sim" component={VacinasSimScreen} />
      <Tab.Screen name="Vacinas Não" component={VacinasNaoScreen} />
      <Tab.Screen name="Informações Vacina" component={VacinaInfoScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
