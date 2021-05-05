export class User {
  constructor(
    public id: Number = 1,
    public fname: string = 'Natalie',
    public lname: string = 'Curtis',
    public gendre: string = 'boy',
    public photo: string = 'img1.jpg',
    public contact: { mail: string; phone: number } = {
      mail: 'natalie@example.com',
      phone: 93515731,
    },
    public address: {
      location: string;
      state: string;
      addressLine: string;
      zip: number;
    } = { location: 'Tunisia', state: 'Tunis', addressLine: '169', zip: 2094 }
  ) {}
}
