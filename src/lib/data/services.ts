import servicesData from '@/data/services.json';
import { Service } from '@/types';

export function getServicesStaticData(): Service[] {
  return servicesData as unknown as Service[];
}
