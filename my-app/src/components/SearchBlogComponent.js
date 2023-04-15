function SearchBlogComponent(props) {
    return <div className="container-fluid">
        <div className="row mt-3">
            <div className="col-lg-6">
                <input type="search" className="form-control rounded rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            </div>
            <div className="row col-lg-6 col-12 justify-content-end mt-2">
                <p className="col-lg-4 col-3" style={{color:'white', textAlign:'right'}}>Trier par:</p>
                <div className="dropdown col-lg-6 col-9 p-0">
                    <button className="btn btn-secondary dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SearchBlogComponent;