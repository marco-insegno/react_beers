import './MainHeader.css';

function MainHeader() {
    return (
        <>
            <section className="py-5 text-center container-fluid main-header-custom">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Album example</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                            <button className="btn btn-custom my-2">Main call to action</button>
                            <button className="btn btn-custom-2 my-2">Secondary action</button>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainHeader;