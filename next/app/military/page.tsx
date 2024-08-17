import { client } from '../utils/sanity/client';

export default async function PostIndex() {
  // build military landing page
  // fetch different sections from sanity
  // build page to display the sections
  
  const query = `*[_type == "militaryLangingPage"]`;
  const landingPageSections = await client.fetch(query);

  return (
    <div>
Landing Page
    </div>
  );
}
