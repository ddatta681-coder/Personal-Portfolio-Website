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
    designation: 'Tourist from The Netherlands',
    category: 'Tourist',
  },
  {
    quote:
      "It has been a wonderful experience ,with Mr. Debarpan during our visit to Svasara Resorts Tadoba .He accompanied us to safari ,his knowledge as a naturist is excellent.Many more trips to plan with him,around the jungles in India. All the best Debarpan",
    name: 'Samir Banavali',
    designation: 'Tourist from Mumbai',
    category: 'Tourist',
  },
  {
    quote:
      "Debarpan Dutta’s lens captures more than just wildlife; it captures the raw, unfiltered pulse of the natural world with breathtaking clarity and deep empathy.A phenomenal young talent. Debarpan combines technical precision with a powerful storytelling voice, making him a true asset to modern wildlife conservation photography.",
    name: 'Subho Saha',
    designation: 'Conservation Communications, Delhi',
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