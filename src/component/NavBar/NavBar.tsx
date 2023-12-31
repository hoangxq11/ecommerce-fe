import React, { FC } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import { logout } from "../../redux/thunks/auth-thunks";
import "./NavBar.css";
import { AppStateType } from "../../redux/reducers/root-reducer";
import { Perfume } from "../../types/types";

const NavBar: FC = () => {
    const dispatch = useDispatch();
    const perfumes: Array<Perfume> = useSelector((state: AppStateType) => state.cart.perfumes);
    const isLoggedIn: boolean = useSelector((state: AppStateType) => state.user.isLoggedIn);

    const handleLogout = () => {
        dispatch(logout())
    };

    let links;
    let signOut;

    if (localStorage.getItem("isLoggedIn") || isLoggedIn) {
        links = (
            <li className="nav-item">
                <Link to={"/account"}><span className="nav-link pl-5 pr-5">
                    <FontAwesomeIcon className="mr-2" icon={faUser} />TÀI KHOẢN</span></Link>
            </li>
        );
        signOut = (
            <Link to={"/"} onClick={handleLogout}>
                <FontAwesomeIcon className="mr-2" icon={faSignOutAlt} />ĐĂNG XUẤT
            </Link>
        );
    } else {
        links = (
            <>
                <li className="nav-item">
                    <Link to={"/login"} className="nav-link pl-3 pr-3">
                        <FontAwesomeIcon className="mr-2" icon={faSignInAlt} />ĐĂNG NHẬP</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/registration"} className="nav-link">
                        <FontAwesomeIcon className="mr-2" icon={faUserPlus} />ĐĂNG KÝ</Link>
                </li>
            </>
        );
        signOut = null;
    }

    return (
        <div className="container-fluid bg-black">
            <nav id="navbar-main" className={`container navbar navbar-expand-lg bg-black text-white `}
                style={{ fontSize: "18px" }}>
                <Link to={"/"} className="navbar-brand mr-3" style={{ fontSize: "24px" }}>
                    Watch Store
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item">
                            <Link to={{ pathname: "/menu", state: { id: "all" } }}>
                                <span className="nav-link px-3">Đồng hồ</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/contacts"}>
                                <span className="nav-link px-3">LIÊN HỆ</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/cart"}>
                                <i className="fas fa-shopping-cart fa-lg pl-5" style={{ color: "white" }}></i>
                                <h5 className="d-inline"
                                    style={{ position: "relative", right: "15px", bottom: "8px" }}>
                                    <span className="badge badge-secondary" style={{ fontSize: '0.8rem' }}>{perfumes.length}</span>
                                </h5>
                            </Link>
                        </li>
                        {links}
                    </ul>
                    {signOut}
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
