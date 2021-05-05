import { Reply } from "./reply";

export class Comment {
    
    constructor(
        public img : string ='',
        public name: string ='', 
        public date : string ='',
        public text: string = '', 
        public reply : Reply = null
        )
    {}
}
