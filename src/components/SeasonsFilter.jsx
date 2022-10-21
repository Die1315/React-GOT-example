function SeasonsFilter({ season, filterSeason }) {
  const seasons = [1, 2, 3, 4, 5, 6, 7, 8];
  return seasons.map((s) => (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        key={s}
        type="button"
        className={`btn btn-primary ${s === season ? "active" : ""}`}
        onClick={() => {
          filterSeason(s);
        }}
      >
        S0{s}
      </button>
    </div>
  ));
}

export default SeasonsFilter;
