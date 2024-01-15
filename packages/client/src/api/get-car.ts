import { api } from '@/lib/axios'
import { Car } from './types/car'

export interface GetCarRequest {
  id: string
}

export interface GetCarResponse {
  car: Car
}

export async function getCar({ id }: GetCarRequest): Promise<GetCarResponse> {
  const response = await api.get(`/car/${id}`)
  return response.data
}
