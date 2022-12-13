import {ITimezone} from "./ITimezone";
import {ICoordinates} from "./ICoordinates";
import {IStreet} from "./IStreet";

export interface ILocation {
   street?: IStreet;
   city?: string;
   state?: string;
   country?: string;
   postcode?: string;
   coordinates?: ICoordinates;
   timezone?: ITimezone;
}
