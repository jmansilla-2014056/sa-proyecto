import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const httpOptions : any    = {
  headers: new HttpHeaders({
    //'Content-Type':  'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url_server: any;
  url_server_admin: any;


  constructor(private http: HttpClient) {
    //this.url_server = 'http://34.132.139.69:5000/';
    //this.url_server_admin = 'http://34.132.139.69:5002/';
    // this.url_server = environment.example; 34.133.92.54
    this.url_server = environment.base_url;
    this.url_server_admin = environment.base_url;
  }


  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // @ts-ignore
    'Authorization': localStorage.getItem("token") });
  options = { headers: this.headers };

  //Reportes
  getSubsByTeam(id:number):any{
    return this.http.get(this.url_server + 'esb/reporte/suscribe/?id='+id, {});
  }

  getUserByCountry(id:number):any{
    return this.http.get(this.url_server + 'esb/reporte/country/?id='+id, {});
  }

  getUserMembership():any{
    return this.http.get(this.url_server + 'esb/reporte/membership', {});
  }

  getUserExpenses():any{
    return this.http.get(this.url_server + 'esb/reporte/expenses', {});
  }

  getUserByGenre(id:string):any{
    return this.http.get(this.url_server + 'esb/reporte/genre/?genero='+id, {});
  }

  getUserByAge(id:number):any{
    return this.http.get(this.url_server + 'esb/reporte/age/?edad='+id, {});
  }

  getUserMembershipTop():any{
    return this.http.get(this.url_server + 'esb/reporte/memberships', {});
  }

  getNewsByTeam(id:number):any{
    return this.http.get(this.url_server + 'esb/reporte/news/team/?equipo='+id, {});
  }

  getNews():any{
    return this.http.get(this.url_server + 'esb/reporte/news', {});
  }

  //Estadios
  getStadiums(): any{
    return this.http.get(this.url_server + 'esb/servicio_administrativo/stadium', {});
  }

  deleteStadium(id:number):any{
    return this.http.delete(this.url_server + 'esb/servicio_administrativo/stadium/?id='+id, {})
  }

  //Partido
  getSoccer_Game(): any{
    return this.http.get(this.url_server + 'esb/servicio_administrativo/soccer-game', {})
  }

  deleteSoccer_Game(id:number):any{
    return this.http.delete(this.url_server + 'esb/servicio_administrativo/soccer-game/?id='+id, {})
  }

  //Equipo
  getTeam(): any{
    return this.http.get(this.url_server + 'esb/servicio_administrativo/team', {})
  }

  deleteTeam(id:number):any{
    return this.http.delete(this.url_server + 'esb/servicio_administrativo/team/?id='+id, {})
  }

  //Competencia
  getCompetition(): any{
    return this.http.get(this.url_server + 'esb/servicio_administrativo/competition', {})
  }

  deleteCompetition(id:number):any{
    return this.http.delete(this.url_server + 'esb/servicio_administrativo/competition/?id='+id, {})
  }


  getCountrys(): any{
    return this.http.get(this.url_server_admin + 'esb/administracion/country/', {})
  }

  getTeams(): any{
    return this.http.get(this.url_server_admin + 'esb/administracion/team/', {})
  }

  getStands(): any{
    return this.http.get(this.url_server_admin + 'esb/administracion/stand/', {})
  }

  getPersonAll(): any{
    return this.http.get(this.url_server_admin + 'esb/administracion/persona/', {})
  }

  deletePerson(id:number):any{
    return this.http.delete(this.url_server_admin + 'esb/administracion/persona?id='+id, {})
  }

  newPerson(name:string,lastname:string,birthday:string,nationality:number,id_stand:number,
            status:string,id_team:number,photo:string,type:number):any{
    return this.http.post(this.url_server_admin + 'esb/administracion/persona/',
      {name:name,lastname:lastname,birthday:birthday,nationality:nationality,id_stand:id_stand,
            status:status,id_team:id_team,photo:photo,type:type})
  }

  loginUser( _email: any, _password: any ): any{
    return this.http.post(this.url_server + 'esb/usuario/login/', {email: _email , password: _password})
  }

  getUser(){
    return this.http.get( this.url_server + 'esb/usuario/get?id='+localStorage.getItem('idu'))
  }

  editUser( user ){
    console.log(user);
    return this.http.post(  this.url_server + 'esb/usuario/update' , {
      id_user: user.id_user,
      name: user.name,
      last_name: user.last_name,
      password: user.password,
      phone: user.phone,
      gender: user.gender,
      birth_date: user.birth_date,
      photo : user.photo}, this.options)
  }

  registrerUser(
    _name: any,
    _last_name: any,
    _password: any,
    _email: any,
    _phone: any,
    _photo: any,
    _gender: any,
    _birth_date: any,
    _address: any,
    _id_Country: any,
    _type: any
  ){
    return this.http.post(this.url_server + 'esb/usuario/add/', {
      name: _name,
      last_name: _last_name,
      password: _password,
      email: _email,
      phone: _phone,
      photo: _photo,
      gender: _gender,
      birth_date: _birth_date,
      address: _address,
      id_Country: _id_Country,
      type: _type
    })
  }

  getCountries():any{
    return this.http.get(this.url_server_admin + 'esb/client/countries', {})
  }

  getTeamPersons(_id_team:number):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/person/?id_team='+_id_team, {})
  }

  getPersonsLower(_age:number):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/person/lower/?edad='+_age, {})
  }

  getPersonsHigher(_age:number):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/person/higher/?edad='+_age, {})
  }

  getTeamsHistoryPerson(_id_person:number):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/team/person/?persona='+_id_person, {})
  }

  getTeamNotifications(_id_team:number):any{
    return this.http.get(this.url_server_admin + 'esb/client/notifications?id='+_id_team, {})
  }

  setFollow(_id_team:number,_id_client:number):any{
    return this.http.post(this.url_server_admin + 'esb/client/follow',
      {id_client:_id_client,id_team:_id_team})
  }

  getEquiposCompetition(_id_competition):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/competition/team/?id='+_id_competition, {})
  }

  getEquiposPais(_id_pais):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/country/team/?pais='+_id_pais, {})
  }

  getEstadiosPais(_id_pais):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/country/stadium/?pais='+_id_pais, {})
  }

  getEstadiosCapacidad(_capacidad):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/stadium/capacity/?capacidad='+_capacidad, {})
  }

  getEquiposAntiguedad(_age):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/team/age/?edad='+_age, {})
  }

  getPartidosGoles(_goles):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/game/goal/?goals='+_goles, {})
  }

  getPartidosAnios(_anio):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/games/year?anio='+_anio, {})
  }

  getPartidosXY(_ex,_ey):any{
    return this.http.get(this.url_server_admin + 'esb/client/reports/games/teams?local='+_ex+'&visitante='+_ey, {})
  }
  deleteUser(){
    return this.http.post( this.url_server + 'esb/usuario/delete',
      // @ts-ignore
      { id_user : parseInt(localStorage.getItem('idu')) },  this.options )
  }

}
