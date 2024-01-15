import { api } from '@/lib/axios'
import { Car } from './types/car'

export interface FetchCarsRequest {
  page: number
}

export interface FetchCarsResponse {
  cars: Car[]
}

export async function fetchCars({
  page,
}: FetchCarsRequest): Promise<FetchCarsResponse> {
  const response = await api.get('/car', { params: { page } })
  return response.data
}
