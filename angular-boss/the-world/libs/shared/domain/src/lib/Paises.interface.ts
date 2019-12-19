import { SecundaryArrays } from "./SecundaryArraysPaises.interface";
export interface Pais {
  id: string
  iso2Code: string
  name: string
  region: SecundaryArrays
  adminregion: SecundaryArrays
  incomeLevel: SecundaryArrays
  lendingType: SecundaryArrays
  capitalCity: string
  longitude: string
  latitude: string
}
