export class Restaurant {

  id = -1;
  constructor(public name: string, public city: string, public street: string,
    public latitude?: number, public longitude?:number, public image?:string, id?: number) {
    this.id += 1;
  }
}
