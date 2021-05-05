import { Reply } from "./reply";

export class Comment {
    
    constructor(
        public img : string ='',
        public name: string ='', 
        public text: string = '', 
        public date : string ='', 
        public replies : Reply[] = []
        )
    {}
}
