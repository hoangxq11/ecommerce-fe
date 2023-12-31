import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {IMG_URL} from "../../utils/constants/url";
import {Perfume} from "../../types/types";
import StarRating from "../StarRating/StarRating";

type PropsType = {
    key: number
    perfume: Perfume
    colSize: number
    link: string
    btnName: string
};

const PerfumeCardItem: FC<PropsType> = ({key, perfume, colSize, link, btnName}) => {
    return (
        <div key={key} className={`col-lg-${colSize}`}>
            <div className="card mb-5" style={{height: "400px"}}>
                <div style={{height: "150px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <LazyLoadImage
                        effect="blur"
                        style={{width: "150px", marginTop: "20px"}}
                        src={`${IMG_URL}${perfume.filename}`}/>
                </div>
                <div className="card-body text-center">
                    <StarRating perfumeRating={perfume.perfumeRating}/>
                    <h6>{perfume.perfumeTitle}</h6>
                    <h6>{perfume.perfumer}</h6>
                    <h6><span><sup>đ</sup>{new Intl.NumberFormat().format(perfume.price)}</span></h6>
                </div>
                <div className="text-center align-items-end mb-3">
                    <Link to={`${link}/${perfume.id}`}>
                        {btnName}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PerfumeCardItem;
