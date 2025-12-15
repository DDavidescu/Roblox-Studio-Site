// src/components/filters/GamesFilterBar.jsx
import "./GamesFilterBar/GamesFilterBar.scss";

function GamesFilterBar({
  genres,
  genreFilter,
  onGenreFilterChange,
  sortBy,
  onSortByChange,
  platformFilter,
  onPlatformFilterChange,
  compact = false,
}) {
  const platforms = [
    { id: "all", label: "All platforms" },
    { id: "desktop", label: "Desktop" },
    { id: "mobile", label: "Mobile" },
    { id: "console", label: "Console" },
  ];

  return (
    <div className={`games-filter-bar ${compact ? "games-filter-bar--compact" : ""}`}>
      <div className="games-filter-bar__secondary">
        <div className="games-filter-bar__select-group">
          <label className="games-filter-bar__label">Genre</label>
          <select
            className="games-filter-bar__select"
            value={genreFilter}
            onChange={(e) => onGenreFilterChange(e.target.value)}
          >
            {genres.map((g) => (
              <option key={g} value={g}>
                {g === "all" ? "All genres" : g}
              </option>
            ))}
          </select>
        </div>

        <div className="games-filter-bar__select-group">
          <label className="games-filter-bar__label">Sort by</label>
          <select
            className="games-filter-bar__select"
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
          >
            <option value="popular">Most popular</option>
            <option value="new">Newest</option>
            <option value="rating">Top rated</option>
          </select>
        </div>

        <div className="games-filter-bar__select-group">
          <label className="games-filter-bar__label">Platform</label>
          <select
            className="games-filter-bar__select"
            value={platformFilter}
            onChange={(e) => onPlatformFilterChange(e.target.value)}
          >
            {platforms.map((p) => (
              <option key={p.id} value={p.id}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default GamesFilterBar;
