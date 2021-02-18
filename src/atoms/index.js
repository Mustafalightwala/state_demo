import {atom} from 'recoil';
//creating an atom which is used as store
//contains a key property to uniquely identify the atom.
export const count = atom({
  key: 'count',
  default: 0,
});
