const PageNotFound = () => {
    return (
        <>
            <h1>
                <center>
                    Page is not found...
                </center>
                <a href="/">Back </a>
            </h1>
            <div id="notfound" className="vh-100">
                <div className="notfound">
                    <div className="notfound-404" />
                    <h1>404</h1>
                    <h2>Oops! Page Not Be Found</h2>
                    <a href="/">Back </a>
                </div>
            </div>
        </>
    );
}

export default PageNotFound;