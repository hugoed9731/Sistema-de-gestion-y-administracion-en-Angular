export class UsuarioModel {

      localId: string;
      uid: string;
      nombre: string;
      password: string;
      apellidoPaterno: String;
      apellidoMaterno: String;
      Empresa: String;
      rol:  string;
      createdate: string;
      email: string;
      emialVerified: boolean;
      activo: boolean;
      ciudad: string;
      Pais: string;
      PhotoUrl: string;
      urlImage: string;
      id: string;
      order_id: string;
      nombreContacto: string;
      categoria: string;
      num_perros: string;
      amount: string;
      operation_date: string;
      QR: string;
      telefonoContacto: string;
      direccion: string;
      idPerro: string;
      lectura: boolean;
      primeraLectura: boolean;
      tipo: string;
      uno: number;
      dos: number;
      1: number;
      2: number;
      id_paseador: string;
      id_usr: string;
      numero_paseador: string;
      numero_usuario: string;
      timestamp: string;
      tiempo_paseo;
      fee: string;
      time_op: string;
// Tabla usuarios
      telefono1: string;
      telefono2: string;
      apellido_Paterno: string;
      apellido_Materno: string;
      calle: string;
      num_ext: string;
      num_int: string;
      cp: string;
      estado: string;
      delegacion: string;
      ultima_vez: string;
      estatus: boolean;
      perros: string;
// detalles orden de usuario
      calificacion: string;
      agendado: boolean;

      // Tabla ordenes de pago
    estatusPaseo: string;
    inicio: string;
    latitud: string;
    longitud: string;
    perrosEstatus: string;
    tracking: string;
    ubicacionActual: string;
    vistocalif: string;
// Perro
    numero_codigo: string;
    fechaVinculacion: string;
    fechaVencimiento: string;
    uidUsuario:string;
    raza:string;
    edad:string;
    comportamiento:string;
    padecimiento:string;
    constructor() {
      this.activo = true;
      this.primeraLectura = true;
    }


// cuando se crea un nuevo usuario por defecto se inicia en activo
// este model es de usuarios_sistema y del perfil
}
