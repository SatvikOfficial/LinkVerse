import React, { useState, useEffect } from 'react';
import './App.css';

const narutoEpisodes = [
  {
    name: "Naruto Ep 1",
    link: "https://youtu.be/E-E0Ipj69OE?si=bcebK6o9MKDaTBx8",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Ep 2",
    link: "https://www.facebook.com/61550515226387/videos/240769985610348",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Ep 3",
    link: "https://www.facebook.com/61550265448336/videos/309333944914568",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Ep 4",
    link: "https://www.facebook.com/61553770695357/videos/678144880785379",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Ep 5",
    link: "https://www.facebook.com/61563325213450/videos/334516949754748",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Ep 6",
    link: "https://www.facebook.com/61563325213450/videos/1165824758048891/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Ep 7",
    link: "https://www.facebook.com/61563325213450/videos/1564940637770383/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Ep 8",
    link: "https://www.facebook.com/Ablanksvideo/videos/6929732213722159/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Ep 9",
    link: "https://www.facebook.com/61550360222435/videos/533722362367386",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Ep 10",
    link: "https://www.facebook.com/61553770695357/videos/233533642957271/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 11",
    link: "https://www.facebook.com/61550360222435/videos/naruto-seson-1-episode-11-in-hindi-dub/1093600308776447/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 12",
    link: "https://www.facebook.com/61550360222435/videos/505844892314608/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 13",
    link: "https://www.facebook.com/61551784916429/videos/1023916499446452/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 14",
    link: "https://www.facebook.com/61551784916429/videos/1707052783387822/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 15",
    link: "https://www.facebook.com/61550360222435/videos/554514160370033/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 16",
    link: "https://www.facebook.com/100088945161475/videos/1635144580430878/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 17",
    link: "https://www.facebook.com/61553770695357/videos/885695609492940/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 18",
    link: "https://www.facebook.com/61553770695357/videos/1039038880733590/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 19",
    link: "https://www.facebook.com/61553770695357/videos/1379559976332727/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 20",
    link: "https://www.facebook.com/61553770695357/videos/363485676039268/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
  {
    name: "Naruto Season 1 Ep. 21",
    link: "https://www.facebook.com/61550925188602/videos/301175849430827/",
    language: "Hindi",
    category: "Anime Hindi",
    type: "video"
  },
];

function Card({ card }) {
  const [unlocked, setUnlocked] = useState(
    localStorage.getItem(`card-unlocked-${card.name}`) === "true"
  );

  const [showAd, setShowAd] = useState(false);

  const handleCardClick = (e) => {
    if (!unlocked) {
      e.preventDefault();
      setShowAd(true);
      // Simulate ad display time, then unlock
      setTimeout(() => {
        localStorage.setItem(`card-unlocked-${card.name}`, "true");
        setUnlocked(true);
        window.open(card.link, "_blank"); // Open link after ad
        setShowAd(false); // Hide ad after link opens
      }, 3000); // Adjust delay as needed for ad to load
    }
  };

  return (
    <a
      className={`card card-visible ${unlocked ? "unlocked" : ""}`}
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      data-language={card.language}
      data-category={card.category}
      tabIndex={0}
      aria-label={card.name}
      onMouseDown={e => e.currentTarget.classList.add("card-pressed")}
      onMouseUp={e => e.currentTarget.classList.remove("card-pressed")}
      onMouseLeave={e => e.currentTarget.classList.remove("card-pressed")}
      onClick={handleCardClick}
    >
      <div className="card-thumb">
        <img src={"https://i.ytimg.com/vi/E-E0Ipj69OE/hqdefault.jpg"} alt={card.name + " thumbnail"} />
      </div>
      <div className="card-info">
        <div className="card-title">{card.name}</div>
        <div className="card-tags">
          <span className="card-tag lang">{card.language}</span>
          <span className="card-tag cat">{card.category}</span>
        </div>
      </div>
      {showAd && (
        <div className="ad-container">
          <script async type="application/javascript" src="https://a.magsrv.com/ad-provider.js"></script>
          <ins className="eas6a97888e2" data-zoneid="5684516"></ins>
          <script>(AdProvider = window.AdProvider || []).push({"serve": {}});</script>
        </div>
      )}
    </a>
  );
}

function NarutoPage() {
  return (
    <div className="card-grid-categories">
      <div className="card-category-.block">
        <h2 className="card-category-title">Naruto Hindi Dub</h2>
        <div className="card-grid">
          {narutoEpisodes.map((card, idx) => (
            <Card card={card} key={card.name + idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NarutoPage;

