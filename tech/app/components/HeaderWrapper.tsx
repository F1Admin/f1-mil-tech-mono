// HeaderWrapper.tsx (Server Component)
import { getSiteSettings } from '@/sanity/sanity-tech-utils';
import Header from './Header'; // Your existing client component

// This component runs on the server
async function HeaderWrapper() {
  // Fetch data server-side
  const settings = await getSiteSettings();

  // Pass the data to the client component
  return <Header initialLogo={settings.techLogo || ''} />;
}

export default HeaderWrapper;
