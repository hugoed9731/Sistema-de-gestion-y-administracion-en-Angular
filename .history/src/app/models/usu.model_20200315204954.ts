export class UsuModel {

      uid: string;
      nombre: string;
      apellidoPaterno: String;
      apellidoMaterno: String;
      Empresa: String;
      rol:  string;
      createdate: string;
      email: string;
      activo: boolean;
      password: string;
      PhotoUrl: string;
      urlImage: string;

      constructor() {
            this.activo = true;

}

// usu es usuado por el registro 