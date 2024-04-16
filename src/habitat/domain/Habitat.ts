export class Habitat {
  constructor(
    readonly id: number,
    readonly id_user: number,
    readonly name: string,
    readonly interval_review: string,
    readonly temperature: string,
    readonly humedity: string,
    readonly created_at:string
  ) {}
}
