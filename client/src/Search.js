function Search(){

    function handleClick() {
        console.log("clicked")
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("submitted")
    }

    return(
        <div>
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." id="search"/>
                <button id="search-button" type="button" onClick={handleClick}></button>
            </form>
        </div>
    )
}

export default Search;