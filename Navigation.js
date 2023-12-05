import React from 'react'
//iconos 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//vistas
import HomeScreen from './Screens/MainScreen/HomeScreen'
import AddContacto from './Screens/Contactos/CrearContacto'
import ListadoContactos from './Screens/Contactos/ListadoContactos'
import DetallesContacto from './Screens/Contactos/DetallesContacto'
import EditarContactos from './Screens/Contactos/EditarContactos';


//objeto de bottom-taps
const Tab = createBottomTabNavigator()

const  ListadoStack = createNativeStackNavigator();


function ContactoStack() {
    return (
      <ListadoStack.Navigator
        initialRouteName='Contactos'
      >
        <ListadoStack.Screen
          name='Contactos'
          component={ListadoContactos}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        />
        <ListadoStack.Screen
          name='Detalles'
          component={DetallesContacto}
        />

        <ListadoStack.Screen
          name='Editar'
          component={EditarContactos}
        />
      </ListadoStack.Navigator>

      
    )
  }
function MyTaps(){
    return(
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor:'black'
        }}>
            <Tab.Screen
             name='Home'
            component={HomeScreen}
            options={{
                tabBarIcon:({color}) => (
                    <FontAwesome name="home" size={30} color="black" />
                )
            }}
            />
            
            <Tab.Screen
        name="Añadir Contacto"
        component={AddContacto}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="group-add" size={50} color={color} />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarShowLabel: false,
        }}
      />

              <Tab.Screen 
            name='Listado'
            component={ContactoStack}
            options= {{
                tabBarIcon:({color}) => (
                    <Entypo name="list" size={24} color={color} />
     ),
     headerShown: false,
    }}
            />
        </Tab.Navigator>
    )
}

export default function Navigator(){
    return (
        <NavigationContainer>
            <MyTaps></MyTaps>
        </NavigationContainer>
    )
}




