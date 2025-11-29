// src/pages/Games/GamesPage.jsx
import { useMemo, useState } from "react";
import "./GamePage_css/GamePage.scss";

import { games } from "../../data/games";
import { gameCollections } from "../../data/gameCollections";
import SpotlightCarouselSection from "../../sections/games/SpotlightCarouselSection";
import GamesGridSection from "../../sections/games/GameGridSection";
import CollectionsSection from "../../sections/games/CollectionsSection";
import GamesStatsCtaSection from "../../sections/games/GamesStatsCtaSection";

function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [primaryFilter, setPrimaryFilter] = useState("all");
  const [genreFilter, setGenreFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [platformFilter, setPlatformFilter] = useState("all");

  const featuredGames = useMemo(
    () => games.filter((g) => g.featured),
    []
  );

  const stats = useMemo(() => {
    const totalPlayers = games.reduce((sum, g) => sum + g.players, 0);
    const totalVisits = games.reduce((sum, g) => sum + g.visits, 0);
    const totalGames = games.length;
    return { totalPlayers, totalVisits, totalGames };
  }, []);

  const filteredGames = useMemo(() => {
    return games
      .filter((game) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          if (
            !game.title.toLowerCase().includes(q) &&
            !game.description.toLowerCase().includes(q)
          ) {
            return false;
          }
        }

        if (primaryFilter === "popular" && !game.isPopular) return false;
        if (primaryFilter === "new" && !game.isNew) return false;
        if (primaryFilter === "featured" && !game.featured) return false;

        if (genreFilter !== "all" && game.genre !== genreFilter) return false;

        if (
          platformFilter !== "all" &&
          !game.platforms.includes(platformFilter)
        ) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "popular") return b.players - a.players;
        if (sortBy === "rating") return b.rating - a.rating;
        if (sortBy === "new")
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        return 0;
      });
  }, [searchQuery, primaryFilter, genreFilter, sortBy, platformFilter]);

  const allGenres = useMemo(() => {
    const set = new Set(games.map((g) => g.genre));
    return ["all", ...Array.from(set)];
  }, []);

  return (
    <main className="games-page">
      <SpotlightCarouselSection featuredGames={featuredGames} />

      <GamesGridSection
        games={filteredGames}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        genres={allGenres}
        genreFilter={genreFilter}
        onGenreFilterChange={setGenreFilter}
        platformFilter={platformFilter}
        onPlatformFilterChange={setPlatformFilter}
      />

      {gameCollections.length > 0 && (
        <CollectionsSection collections={gameCollections} />
      )}

      <GamesStatsCtaSection stats={stats} />
    </main>
  );
}

export default GamesPage;
