export class Habitat {
  constructor(
    readonly id: number,
    readonly nombre: string,
    readonly humedadDeseada: string,
    readonly temperaturaDeseada: string,
    readonly movimiento: string,
    readonly idMonitoreo: number,
    readonly horaNotificar:string
  ) {}
}
