export class PaseoModel {
    // Tabla usuarios
    order_id: string;
    nombre: string;
    id: string;
    id_paseador: string;
    apellidoma: string;
    celular:string;
    apellidopa:string;
    amount: string;
    estatus:string;
    tiempo_paseo:string;
    terminado:string;
categoria: string;
dias: string;
diasEleccion: string;
direccion: string;
fecha_creacion: string;
id_usr: string;
monto_paseador: string;
num_perros: string;
numero_usuario: string;
operation_date: string;
perros: string;
perrosNombre: string;

cantidadPerros: boolean;
paseosActivos: string;
uid:string;
idPaseador:string;
estatusPaseo:string;

constructor() {
    this.cantidadPerros = true;
}
}
