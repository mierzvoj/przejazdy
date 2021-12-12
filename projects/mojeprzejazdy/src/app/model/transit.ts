<<<<<<< HEAD
import { Address } from './address';
=======
import { Address } from "./address";
>>>>>>> a39774c9ec77d8936de02cbbd1b2b916f5d7a38a

export interface Transit {
  id: number;
  points: Address[];
  valid: boolean;
  schedules: Date[];
}
