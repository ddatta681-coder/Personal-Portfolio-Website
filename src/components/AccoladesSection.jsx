import './styles/AccoladesSection.css';



const categories = [
  {
    id: 'awards',
    label: 'Awards',
    heading: 'Photography Awards',
    tier: 'award',
    items: [
      {
        year: 'May 2017',
        title: 'Winner of the Day',
        subtitle: 'National Geographic Traveller India',
        venue: 'Daily Shot Photography Contest — 17 May 2017',
        link: 'https://www.instagram.com/p/BUJu5wyBz_v/',
        linkLabel: 'View on Instagram',
      },
      {
        year: 'Feb 2017',
        title: 'Picture of the Month',
        subtitle: 'Smart Photography — February 2017',
        venue: 'Featured photograph of the month',
        link: 'https://smartphotography.in/february-2017-picture-of-the-month/',
        linkLabel: 'View Feature',
      },
      {
        year: '2018',
        title: 'FIAP Gold Medal',
        subtitle: 'Monochrome Section',
        venue: 'Photophilics Sambalpur National Photography Salon, Sambalpur',
        link: null,
      },
      {
        year: '2021–22',
        title: 'FIP Ribbon',
        subtitle: 'Nature Category',
        venue: 'FIP Annual Inter Club Contest',
        link: null,
      },
      {
        year: '2017–18',
        title: 'FIP Certificate of Merit',
        subtitle: 'Photo Journalism Category',
        venue: 'FIP Annual Inter Club Contest',
        link: null,
      },   
    ],
  },
  {
    id: 'photo-features',
    label: 'Photo Features',
    heading: 'Photo Features & Stories',
    tier: 'publication',
    items: [
      {
        year: '2026',
        title: 'Photo-story Publication',
        subtitle: 'Wildlife conservation awareness series',
        venue: 'Roundglass Sustain — Human-wildlife conflict with free-ranging dogs',
        link: 'https://youtu.be/0LwOGDkbiBg?si=71j_7EWoiMziKG-Y',
        linkLabel: 'Watch on YouTube',
      },
      {
        year: 'Jul 2024',
        title: 'Magazine Cover & Photo Feature',
        subtitle: 'Smart Photography — July 2024 Edition',
        venue: 'Cover photograph and multi-image showcase',
        link: 'https://smartphotography.in/july-2024/',
        linkLabel: 'View Edition',
      },
      
    ],
  },
  {
    id: 'articles',
    label: 'Articles',
    heading: 'Articles & Written Work',
    tier: 'print',
    items: [
      {
        year: '2022',
        title: 'Preserve Newtown Grasslands to Preserve Local, Migrant Birds',
        subtitle: 'The Telegraph',
        venue: 'Conservation success story — newspaper publication',
        link: 'https://www.telegraphindia.com/my-kolkata/news/preserve-new-towngrasslands-to-save-local-and-migrant-birds/cid/1850420',
        linkLabel: 'Read Article',
      },
      {
        year: 'Oct 2021',
        title: 'Beauty in the Barren',
        subtitle: 'PawsTrails Explorers Magazine — Vol. 31',
        venue: 'Feature on Desert National Park',
        link: 'https://www.pawstrailsmagazine.com/wp-content/uploads/2021/10/PT_Vol_31_Oct_2021.pdf',
        linkLabel: 'Read in Magazine',
      },
      {
        year: '2017',
        title: 'An Eastern Palette',
        subtitle: 'Saevus Magazine',
        venue: 'Featured article',
        link: 'https://www.magzter.com/stories/Lifestyle/Saevus/An-EasternPalette',
        linkLabel: 'Read on Magzter',
      },
      {
        year: 'Dec 2016',
        title: 'Pictorial Story on Gir National Park',
        subtitle: 'Akhnon Aranyak',
        venue: 'Bengali wildlife magazine — December 2016',
        link: null,
      },
    ],
  },
  {
    id: 'editorial',
    label: 'Editorial',
    heading: 'Guidebook Contributions',
    tier: 'editorial',
    items: [
      {
        year: '2020',
        title: 'Butterflies of Buxa Tiger Reserve',
        subtitle: 'Illustrator',
        venue: 'Published by Buxa Tiger Conservation Foundation Trust',
        link: null,
      },
      {
        year: '2019',
        title: 'Birds of Indian Sundarbans',
        subtitle: 'Editor',
        venue: 'Authored by Prasanta Kumar Pandit and Arjan Basu Roy',
        link: null,
      },
    ],
  },
  {
    id: 'science',
    label: 'Science',
    heading: 'Scientific Publications',
    tier: 'science',
    items: [
      {
        year: '2023',
        title: 'Survey of Waders and Aquatic Birds at Bakkhali',
        subtitle: 'GBIF Sampling Event Dataset',
        venue:
          'Dasgupta S, Ghosh M, et al. — Nature Mates–Nature Club. doi:10.15468/zr5mc8',
        link: 'https://www.gbif.org/dataset/9981c90c-7373-4b5a-852a-9316a90428d6',
        linkLabel: 'View on GBIF',
      },
    ],
  },
];

export default function AccoladesSection() {
  return (
    <section className="accolades-section" id="accolades">
      <div className="accolades-inner">
        {/* Sticky side nav for large screens */}
        <nav className="accolades-sidenav" aria-label="Accolades categories">
          {categories.map((cat) => (
            <a key={cat.id} href={`#cat-${cat.id}`} className="sidenav-link">
              {cat.label}
            </a>
          ))}
        </nav>

        {/* Main content */}
        <div className="accolades-content">
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={`cat-${cat.id}`}
              className={`accolades-category tier--${cat.tier} fade-up`}
            >
              <div className="category-header">
                <span className="section-label">{cat.label}</span>
                <h2 className="category-heading">{cat.heading}</h2>
                <div className="category-rule" />
              </div>

              <ul className="accolade-list">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="accolade-item">
                    <span className="accolade-year">{item.year}</span>
                    <div className="accolade-body">
                      <h3 className="accolade-title">{item.title}</h3>
                      <p className="accolade-subtitle">{item.subtitle}</p>
                      <p className="accolade-venue">{item.venue}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="accolade-link"
                        >
                          {item.linkLabel || 'View'}&nbsp;↗
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
