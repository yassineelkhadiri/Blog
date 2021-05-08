export class User {
  constructor(
    public fname: string,
    public lname: string,
    public gender: String,
    public mail: string,
    public phone: number,
    public bio: String,
    public photo: string,
    public posts: number,
    public followers: number,
    public following: number
  ) {}
}
