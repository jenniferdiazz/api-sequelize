class Vehiculo{
    constructor(VIN,Modelo_CodModelo,Empresa_CodEmpresa,Patente,EstIgnicion,icono,EstadoServicio){
        this.VIN = VIN;
        this.Modelo_CodModelo=Modelo_CodModelo;
        this.Empresa_CodEmpresa=Empresa_CodEmpresa;
        this.Patente=Patente;
        this.EstIgnicion=EstIgnicion;

    }
}
module.exports = Vehiculo;