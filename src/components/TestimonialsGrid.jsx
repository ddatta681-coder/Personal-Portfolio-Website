import './styles/TestimonialsGrid.css';

const testimonials = [
  {
    quote:
      "Debarpan is the person who started my journey into wildlife photography. He introduced me to this beautiful world and guided me every step of the way, always like a mentor and an elder brother. I'm truly grateful for his constant support, encouragement, and for inspiring my love for wildlife and photography.",
    name: 'Mainak Deb',
    designation: 'Wildlife Photographer, Kolkata',
    category: 'Mentee',
  },
  {
    quote:
      "My first visit to India was a memorable one thanks to Debarpan! It was my lifelong dream to catch a glimpse of a wild tiger and under Debarpans’ professional guidance this dream came true. He went above and beyond to give me the best wildlife experience I have ever had. My next visit to India is already planned with Deparbans’ help, in 2027 we will explore the jungles of Central India together. Five stars and highly recommended! ",
    name: 'Rick E.',
    designation: 'Guest from The Netherlands',
    category: 'Guest',
  },
  {
    quote:
      "It has been a wonderful experience ,with Mr. Debarpan during our visit to Svasara Resorts Tadoba .He accompanied us to safari ,his knowledge as a naturist is excellent.Many more trips to plan with him,around the jungles in India. All the best Debarpan",
    name: 'Samir Banavali',
    designation: 'Guest from Mumbai',
    category: 'Guest',
  },
  {
    quote:
      "Debarpan Dutta’s lens captures more than just wildlife; it captures the raw, unfiltered pulse of the natural world with breathtaking clarity and deep empathy.A phenomenal young talent. Debarpan combines technical precision with a powerful storytelling voice, making him a true asset to modern wildlife conservation photography.",
    name: 'Subho Saha',
    designation: 'EFIAP/g, EPSA, EFIP, GPU CROWN-3, VIP-1, AHPS, cMoL, RISF1, AIAAP, Hon.PESGSPC, GPA.PESGSPC',
    category: 'Collaborator',
  },
  {
    quote: 
    "During our family trip to Pench back in 2024, we had the pleasure of being guided by Debarpan, and what stood out immediately was his ability to connect effortlessly with people across age groups. Traveling with a 7½-year-old, we particularly appreciated how thoughtfully he kept our child engaged throughout the safaris, turning each sighting and moment into an interactive learning experience. Debarpan’s knowledge extends well beyond identifying flora and fauna; he brings a holistic understanding of the ecosystem, explaining how species, habitats, and human communities are deeply interconnected. Equally impressive is his relationship with the local community. He speaks of them with respect and insight, and he is, in turn, well respected by them. This combination of ecological depth, cultural sensitivity, and genuine warmth makes the experience both enriching and memorable for visitors from any part of the world.",
    name: ' Mr. Sayak Bhanja',
    designation: 'Guest from Delhi',
    category: 'Guest',
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
  return (
    <section className="t-grid-section" id="testimonials">
      <div className="t-grid-inner">
        <div className="section-header fade-up">
          <div className="section-label">Testimonials</div>
          <h2>What People Say</h2>
        </div>

        <div className="t-grid fade-up">
          {testimonials.map((t, i) => (
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
      </div>
    </section>
  );
}