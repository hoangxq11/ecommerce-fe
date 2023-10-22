import React, {FC} from 'react';
import {Link} from "react-router-dom";

const HomePageTheme: FC = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card mb-5" >
                        <Link to={{pathname: "/menu", state: { id: "female" }}}>
                            <img className="img-fluid" src="https://www.citywatches.co.nz/wp-content/uploads/2018/06/timex-banner.jpg"/>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-5">
                        <Link to={{pathname: "/menu", state: { id: "male" }}}>
                            <img className="img-fluid" src="https://m.media-amazon.com/images/I/51rUqc-Yt5L.jpg"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageTheme;
