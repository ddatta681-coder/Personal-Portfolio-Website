import './styles/TestimonialsGrid.css';

const testimonials = [
  {
    quote:
      "During our family trip to Pench back in 2024, we had the pleasure of being guided by Debarpan, and what stood out immediately was his ability to connect effortlessly with people across age groups. Traveling with a 7½-year-old, we particularly appreciated how thoughtfully he kept our child engaged throughout the safaris, turning each sighting and moment into an interactive learning experience. Debarpan's knowledge extends well beyond identifying flora and fauna; he brings a holistic understanding of the ecosystem, explaining how species, habitats, and human communities are deeply interconnected. Equally impressive is his relationship with the local community. He speaks of them with respect and insight, and he is, in turn, well respected by them. This combination of ecological depth, cultural sensitivity, and genuine warmth makes the experience both enriching and memorable for visitors from any part of the world.",
    name: 'Mr. Sayak Bhanja',
    designation: 'Guest from Delhi',
    category: 'Guest',
  },
  {
    quote:
      "It has been a wonderful experience with Mr. Debarpan during our visit to Svasara Resorts Tadoba. He accompanied us to safari, his knowledge as a naturist is excellent. Many more trips to plan with him, around the jungles in India. All the best Debarpan.",
    name: 'Samir Banavali',
    designation: 'Guest from Mumbai',
    category: 'Guest',
  },
  {
    quote:
      "I first came to know Debarpan Datta through Nikon, and from our very first interaction, I felt that he is a storyteller first and a photographer second. His ability to connect with people through stories, experiences, and visuals makes his work truly special. I had the opportunity to invite him to interact with my students, and the session was immensely enriching. He shared valuable insights, practical knowledge, and real-world experiences that inspired the participants. The students were delighted to learn from him and greatly appreciated his approachable nature and engaging style of teaching. Debarpan sir's passion for photography, truly incredible. I wish him continued success in all his future endeavors.",
    name: 'Sneha Paul',
    designation: 'Mentor and Co-founder Aperture Alchemist',
    category: 'Collaborator',
  },

  // Column 2
  {
    quote:
      "Mr. Debarpan Dutta is a young environmentalist and photography mentor who is truly in a class of his own. Over the years, I have participated in several photo tours and workshops organized by him, and every experience has been exceptional. From logistics and accommodation to food and overall coordination, every aspect of the tours was meticulously planned and flawlessly executed. What sets Debarpan apart, however, is his mentorship. His remarkable ability to identify compelling photographic opportunities and his instinct for finding strong compositions have been invaluable learning experiences for me. Equally impressive is his warmth and inclusiveness. At no point did I feel like a participant or a guest; instead, I felt as though I was traveling with a close group of friends. This sense of camaraderie made every journey enjoyable and inspiring, while also renewing my enthusiasm and commitment to photography. By the end of each tour, I came to realize that this feeling of belonging is the true hallmark of the \"Brand Debarpan.\" He has a unique ability to connect with people of all ages and backgrounds, making everyone feel comfortable, valued, and motivated. I wish Debarpan every success in his journey ahead and look forward to many more enriching photographic experiences with him.",
    name: 'Sayantan Dey',
    designation: 'Retired Scientist, Department of Agriculture, Govt. of West Bengal',
    category: 'Guest',
  },
  {
    quote:
      "Debarpan is the person who started my journey into wildlife photography. He introduced me to this beautiful world and guided me every step of the way, always like a mentor and an elder brother. I'm truly grateful for his constant support, encouragement, and for inspiring my love for wildlife and photography.",
    name: 'Mainak Deb',
    designation: 'Wildlife Photographer, Kolkata',
    category: 'Mentee',
  },
  {
    quote:
      "Debarpan Dutta's lens captures more than just wildlife; it captures the raw, unfiltered pulse of the natural world with breathtaking clarity and deep empathy. A phenomenal young talent. Debarpan combines technical precision with a powerful storytelling voice, making him a true asset to modern wildlife conservation photography.",
    name: 'Subho Saha',
    designation: 'EFIAP/g, EPSA, EFIP, GPU CROWN-3, VIP-1, AHPS, cMoL, RISF1, AIAAP, Hon.PESGSPC, GPA.PESGSPC',
    category: 'Collaborator',
  },

  // Column 3
  {
    quote:
      "We have travelled with Debarpan as our Naturalist/Guide on 36 safari drives over the past two years. We have found him to have excellent knowledge of tigers & other wildlife. He has the most amazing spotting skills, often spotting animals that others have missed. Deb has a great rapport with the park guides & drivers & always conveys their input/comments to us, to keep us in the loop, which is much appreciated by us as overseas visitors who are unable to follow the local language. Deb always tries to ensure that our vehicle is in a good position for taking photographs too. He is considerate toward wildlife, his guests & park officials. He is someone you can count on & trust, an all round nice guy who is a pleasure to be with. We highly recommend him, you won't be disappointed!",
    name: 'John And Kathy Turner',
    designation: 'Guest from UK',
    category: 'Guest',
  },
  {
    quote:
      "My first visit to India was a memorable one thanks to Debarpan! It was my lifelong dream to catch a glimpse of a wild tiger and under Debarpan's professional guidance this dream came true. He went above and beyond to give me the best wildlife experience I have ever had. My next visit to India is already planned with Debarpan's help, in 2027 we will explore the jungles of Central India together. Five stars and highly recommended!",
    name: 'Rick E.',
    designation: 'Guest from The Netherlands',
    category: 'Guest',
  },  
  {
      quote:
        "Crafted with love and devotion for an artist whose work demands to be seen by the world. Here, every thoughtful design choice mirrors Debarpan’s profound passion and lifelong commitment to the rich tapestry of earth's flora and fauna.",
      name: 'Rounak Chakraborti',
      designation: 'Designer & Developer',
      category: 'Developer',
      featured: true,
  },
  {
    quote:
    "Having shared the field and the stage with him, I can confidently say that he is not just an exceptional photographer but a remarkable naturalist and storyteller and a fantastic observer. The part where I connect with him the most is his old school way of learning the things and then honing the skills blending with the modern perspectives. His understanding of both camera technology and forest ecology is deep, practical, and true to his heart. What genuinely sets him apart is his ability to connect, observe, interpret, and explain small details that often goes unnoticed. His oration is simple, engaging, and incredibly effective, making even complex ideas very easy to grasp. Above all, he remains honest, humble, and always approachable. These qualities make him an outstanding personality who can make photography look joyful and the forests look like pages from storybooks to the people having his company.",
    name: 'Krishnendu Bhattacharjee',
    designation: 'Route Trainer & Supervisor,Nikon India (West Bengal) Pvt. Ltd.',
    category: 'Collaborator',    
  },
];

/* Category badge colours */
const categoryColor = {
  'Workshop Participant': 'badge--green',
  'Field Collaborator':   'badge--gold',
  'Collaborator':         'badge--gold',
  'Co-author':            'badge--ink',
  'Editorial Collaboration': 'badge--ink',
  'Field Tour':           'badge--green',
  'Mentee':               'badge--dust',
};

export default function TestimonialsGrid() {
  const featured = testimonials.find(t => t.featured);
  const rest = testimonials.filter(t => !t.featured);
  return (
    <section className="t-grid-section" id="testimonials">
      <div className="t-grid-inner">
        <div className="section-header fade-up">
          <div className="section-label">Testimonials</div>
          <h2>What People Say</h2>
        </div>

        <div className="t-grid fade-up">
          {rest.map((t, i) => (
            <article key={i} className="t-card">
              {/* Opening quote glyph */}
              <div className="t-card__quote-mark" aria-hidden="true">"</div>

              {/* Category badge */}
              <span className={`t-card__badge ${categoryColor[t.category] || 'badge--dust'}`}>
                {t.category}
              </span>

              {/* Body */}
              <blockquote className="t-card__body">
                <p>{t.quote}</p>
              </blockquote>

              {/* Attribution */}
              <footer className="t-card__footer">
                <div className="t-card__divider" />
                <div className="t-card__person">
                  <span className="t-card__name">{t.name}</span>
                  <span className="t-card__designation">{t.designation}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {featured && (
          <article className="t-card t-card--featured fade-up">
            <div className="t-card__quote-mark" aria-hidden="true">"</div>
            <span className={`t-card__badge ${categoryColor[featured.category] || 'badge--gold'}`}>
              {featured.category}
            </span>
            <blockquote className="t-card__body"><p>{featured.quote}</p></blockquote>
            <footer className="t-card__footer">
              <div className="t-card__divider" />
              <div className="t-card__person">
                <span className="t-card__name">{featured.name}</span>
                <span className="t-card__designation">{featured.designation}</span>
              </div>
            </footer>
          </article>
        )}
      </div>
    </section>
  );
}