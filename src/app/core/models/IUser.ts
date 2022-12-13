import {ILocation} from "./ILocation";

export default class IUser {
  public gender?: string;
  public name?: Name;
  public location?: ILocation;
  public email?: string;
  public login?: Login;
  public dob?: Dob;
  public registered?: Registered;
  public phone?: string;
  public cell?: string;
  public id?: Id;
  public picture?: Picture;
  public nat?: string;
}

export class Name {
  public title?: string;
  public first?: string;
  public last?: string;
}

export class Login {
  public uuid?: string;
  public username?: string;
  public password?: string;
  public salt?: string;
  public md5?: string;
  public sha1?: string;
  public sha256?: string;
}

export class Dob {
  public date?: string;
  public age?: number;
}

export class Registered {
  public date?: string;
  public age?: number;
}

export class Id {
  public name?: string;
  public value?: string;
}

export class Picture {
  public large?: string;
  public medium?: string;
  public thumbnail?: string;
}
