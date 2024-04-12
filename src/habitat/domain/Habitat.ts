export class Habitat {
  constructor(
    readonly id: number,
    readonly humedadDeseada: string,
    readonly temperaturaDeseada: string,
    readonly movimiento: string,
    readonly idMonitoreo: number
  ) {}
}
