import './styles/AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about-inner fade-up">
        <div className="section-label">About</div>
        <div className="about-content">
          <h2 className="about-heading">
            I photograph the world<br /><em>before the light changes.</em>
          </h2>
          <div className="about-text">
            <p>
              A wildlife researcher turned naturalist, Debarpan has been a keen
              observer and photographer since his high school days. Calling the
              forests of Central India his home and the wetlands of Eastern
              India his backyard, he has spent over a decade capturing nature
              with a childlike curiosity. His passion was sparked by "Born
              Free", leading him to pursue wildlife storytelling and earn
              recognition from platforms like National Geographic Traveller,
              Smart Photography, and Saevus.
            </p>
            <p>
              Alongside his creative work, he mentors aspiring photographers
              across West Bengal and conducts field workshops in collaboration
              with Nikon India. Whether documenting wildlife through his lens or
              sharing his experiences with others, he strives to connect people
              with the beauty and magic of the natural world.
            </p>
            <a href="/accolades" className="btn-outline">View Accolades →</a>
          </div>
        </div>
      </div>
    </section>
  );
}