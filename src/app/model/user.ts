export class User {
   constructor(
       public img : string =' ',
       public name : string =' ',
       public posts : number = 0,
       public followers : number = 0,
       public following :number = 0,
       public description : string = '' , 
       public email :string = ''
   )
   {}
}
