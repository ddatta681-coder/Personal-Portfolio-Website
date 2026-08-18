import "./styles/MemoriesSignoff.css";

export default function MemoriesSignoff() {
  return (
    <section className="memories-signoff">
      <div className="memories-signoff__inner">
        <img
          src="/logo_memo.png"
          alt="Memories in the Woods logo"
          className="memories-signoff__logo"
        />
        <p className="memories-signoff__label">Presented to you by</p>
        <h2 className="memories-signoff__title">Memories in the Woods</h2>
        <h2 className="memories-signoff__tagline">A wildlife experience & photography expedition initiative by Debarpan Datta</h2>
      </div>
    </section>
  );
}
