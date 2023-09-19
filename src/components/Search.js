const Search = ({searchText, setSearchText}) => {
    return <>
        <input type="text" placeholder="Search for note" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    </>;
}

export default Search;