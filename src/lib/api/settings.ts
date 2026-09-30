import settingsData from '@/data/settings.json';
import { SiteSettings } from '@/types';

export async function getSiteSettings(): Promise<SiteSettings> {
  return settingsData as SiteSettings;
}
