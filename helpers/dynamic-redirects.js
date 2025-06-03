const { createClient } = require('next-sanity');

const previewClient = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-03-25',
  useCdn: true
});

const getClient = () => previewClient;

module.exports = async () => {
  // pipe in manual unique redirects from the CMS (highest priority)
  const query = `
  *[_type == "redirect"]{ 
    destination,
    source,
    permanent
  }
  `;

  const redirects = await getClient().fetch(query);

  // Wildcard/regex matching automated redirects (lower priorty, with specific stuff higher)
  redirects.push({
    // Anything with 'student-discount' in the last part of the URL
    source: '/directory/:slug*/:slug*(student-discount)',
    destination: '/news/student-discounts-nottingham', 
    permanent: true,
  },{
    source: '/directory/food/:slug',
    destination: '/news/places-to-eat-in-nottingham-city-centre/',
    permanent: true,
  },{
    source: '/directory/food/:slug*',
    destination: '/news/places-to-eat-in-nottingham-city-centre/',
    permanent: true,
  },{
    source: '/directory/food/:slug*/:slug*',
    destination: '/news/places-to-eat-in-nottingham-city-centre/',
    permanent: true,
  },{
    source: '/directory/shopping/:slug*(fashion)',
    destination: '/news/clothes-shops-in-nottingham-city-centre',
    permanent: true,
  },{
    source: '/directory/shopping/:slug',
    destination: '/news/shopping',
    permanent: true,
  },{
    source: '/directory/shopping/:slug/:slug',
    destination: '/news/shopping',
    permanent: true,
  },{
    source: '/directory/:slug',
    destination: '/whats-on',
    permanent: true,
  },{
    source: '/whats-on/:slug',
    destination: '/whats-on',
    permanent: true,
  },{
    source: '/whats-on/:slug/:slug',
    destination: '/whats-on',
    permanent: true,
  },{
    source: '/directory/:slug/:slug',
    destination: '/whats-on',
    permanent: true,
  },{
    source: '/media/:slug',
    destination: '/',
    permanent: true,
  },{
    source: '/media/:slug/:slug',
    destination: '/',
    permanent: true,
  },{
    source: '/directory/:slug/:slug/:slug',
    destination: '/whats-on',
    permanent: true,
  },{
    source: '/green-healthy-city/:slug',
    destination: '/news/categories/green-healthy-city', 
    permanent: true,
  },{
    source: '/news-and-opportunities/:slug*',
    destination: '/news', 
    permanent: true,
  },{
    // Anything with 'student-discount' in the last part of the URL
    source: '/news-and-opportunities/:slug*(page)',
    destination: '/news', 
    permanent: true,
  })

  return redirects;
};


// {
//   source: '/offers/:slug',
//   destination: '/news/student-discounts-nottingham',
//   permanent: true,
// },{
//   source: '/offers/:slug/:slug',
//   destination: '/news/student-discounts-nottingham',
//   permanent: true,
// },