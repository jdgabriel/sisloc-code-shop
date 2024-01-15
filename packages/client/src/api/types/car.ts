import { CarInfo } from './car-info'
import { Mode } from './car-rent-mode'

export interface Car {
  id: string
  name: string
  image_url: string
  brand: string
  modes: Mode[]
  infos: CarInfo[]
}
