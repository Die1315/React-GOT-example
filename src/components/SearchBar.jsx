function SearchBar({search,doSearch}){
    return(
        <div className="container-fluid">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={search}
          onChange={(event) => {
            console.log("change.......");
            console.log(event.target.value);
            doSearch(event.target.value);
          }}
        />
      </div>

    )
}
export default SearchBar;