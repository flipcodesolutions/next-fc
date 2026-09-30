import servicesData from '@/data/services.json';
import { Service } from '@/types';

export async function getAllServices(): Promise<Service[]> {
  return servicesData as unknown as Service[];
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const services = await getAllServices();
  return services.find((s) => s.slug === slug);
}
