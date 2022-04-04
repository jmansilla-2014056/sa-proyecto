import { INavData } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
export function nivel(){

  const x = localStorage.getItem("rol");
  //console.log(x);
  //console.log(x == "1");
  let sesion : INavData[] = [];
  // Usuario Administrador
  if( x == "1"){
    sesion = [
      {
        name: 'Adiministaracion',
        url: '/administracion',
        iconComponent: { name: 'cil-puzzle' }
      },
      {
        title: true,
        name: 'Personas'
      },
      {
        name: 'Crear',
        url: '/administracion/persona/crear',
        iconComponent: { name: 'cil-pencil' }
      },
      {
        name: 'Ver',
        url: '/administracion/persona/ver',
        iconComponent: { name: 'cil-list' }
      },
      {
        name: 'Reportes',
        title: true
      },
      {
        name: 'Usuarios',
        url: '/reportes/usuario',
        iconComponent: {name: 'cil-cursor'}
      },
          {
            name: 'Empleado',
            url: '/reportes/empleado'
          },
          {
            name: 'Dropdowns',
            url: '/buttons/dropdowns'
          },


    ];
  }
  // usuario cliente
  else if( x== "2"){
    sesion = [
      {
        name: 'Empleado',
        url: '/dashboard',
        iconComponent: { name: 'cil-user' },
        badge: {
          color: 'info',
          text: 'Bienvenido'
        }
      },
      {
        name: 'Estadio',
        children: [
          {
            name: 'Crear',
            url: '/empleado/crear-estadios',
            iconComponent: { name: 'cil-pencil' }
          },
          {
            name: 'Ver',
            url: '/empleado/estadios',
            iconComponent: { name: 'cil-list' }
          },
        ]
      },
      {
        name: 'Partidos',
        children: [
              {
                name: 'Ver',
                url: '/empleado/partidos',
                iconComponent: { name: 'cil-list' }
              },
              {
                name: 'Crear',
                url: '/empleado/crear-partidos',
                iconComponent: { name: 'cil-pencil' }
              },
            ]
      },
      {
        name: 'Equipos',
        children: [
              {
                name: 'Ver',
                url: '/empleado/equipos',
                iconComponent: { name: 'cil-list' }
              },
              {
                name: 'Crear',
                url: '/empleado/crear-equipos',
                iconComponent: { name: 'cil-pencil' }
              },
            ]
      },
      {
        name: 'Competencias',
        children: [
              {
                name: 'Ver',
                url: '/empleado/competencia',
                iconComponent: { name: 'cil-list' }
              },
              {
                name: 'Crear',
                url: '/empleado/crear-competencia',
                iconComponent: { name: 'cil-pencil' }
              },
            ]
      }
    ];
  }
  // Usuario normal
  else if ( x== "3"){
    sesion = [
      {
        name: 'Profile',
        iconComponent: { name: 'cil-user' },
        children: [
          {
            name: 'Setting',
            url: '/forms/editprofile',
            iconComponent: { name: 'cil-settings'}
          },
        ]
      },
    ];
  }
  else {
    sesion = [
      {
        name: 'Access',
        url: '/login',
        iconComponent: { name: 'cil-star' },
        children: [
          {
            name: 'Login',
            url: '/login',
            iconComponent: { name: 'cil-lock-locked'}
          },
          {
            name: 'Register',
            url: '/register',
            iconComponent: { name: 'cil-task' }
          },
          {
            name: 'Home',
            url: '/',
            iconComponent: { name: 'cil-home' }
          }
        ]
      },
    ];
  }
  return sesion;
}

