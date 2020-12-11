export class Restaurant {

  constructor(public name: string, public city: string, public street: string,
    public latitude?: number, public longitude?: number,
    public image?: string, public id?: number, public rate?:number ) {
  }
}
