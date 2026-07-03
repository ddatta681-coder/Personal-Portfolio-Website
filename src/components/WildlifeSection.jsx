import './styles/WildlifeSection.css';

const cards = [
  {
    img:   '/static/assets/desktop/InfoImage/img1.jpeg',
    tag:   'Panthera tigris',
    title: 'Bengal Tiger',
    desc:  'Photographed prowling through the dense undergrowth of a sun-dappled forest. This powerful predator moves with silent grace, its iconic orange and black stripes providing perfect camouflage against the shifting shadows of the jungle floor.',
  },
  {
    img:   '/static/assets/desktop/InfoImage/img2.jpeg',
    tag:   'Panthera pardus fusca',
    title: 'Indian Leopard',
    desc:  'Spotted navigating the vertical world of the forest canopy with remarkable agility. A master of stealth and strength, this spotted hunter is as comfortable patrolling the high branches as it is stalking prey through the tall grass below.',
  },
  {
    img:   '/static/assets/desktop/InfoImage/img3.jpeg',
    tag:   'Anser indicus',
    title: 'Bar-headed Goose',
    desc:  'Caught mid-stretch along a misty shoreline, showing the distinctive black bars on its head. These incredible high-altitude flyers are famous for their grueling migration over the Himalayas, reaching heights that few other birds can survive.',
  },
];

export default function WildlifeSection() {
  return (
    <section className="wildlife" id="wildlife">
      <div className="section-header light">
        <div className="section-label">Wildlife</div>
        <h2>In the Field</h2>
      </div>
      <div className="wildlife-grid">
        {cards.map(({ img, tag, title, desc }) => (
          <article key={title} className="wildlife-card fade-up">
            <div className="wc-image">
              <img src={img} alt={title} loading="lazy" />
              <div className="wc-tag">{tag}</div>
            </div>
            <div className="wc-body">
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}