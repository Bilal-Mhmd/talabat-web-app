export class MenuItem {

    constructor(
      public name: string, 
      public price: number,   
      public descr: string,
      public image?: string,
      public id?: number, 
      public rest_id?: number,
      public rate?:number,
      public ordered?:boolean
      ){
    }
  }
  