import React, { FC, useEffect } from 'react';
import { useDispatch } from "react-redux";
import HomePageTheme from "../../component/HomePageTheme/HomePageTheme";
import SliderCards from "../../component/PerfumeCardsSlider/PerfumeCardsSlider";
import ScrollButton from "../../component/ScrollButton/ScrollButton";
import SliderBrands from "../../component/SliderBrands/SliderBrands";
import { fetchCart } from "../../redux/thunks/cart-thunks";


const HomePage: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const perfumesFromLocalStorage: Map<number, number> = new Map(JSON.parse(localStorage.getItem("perfumes") as string));
        dispatch(fetchCart(Array.from(perfumesFromLocalStorage.keys())))
    }, []);

    return (
        <div>
            <ScrollButton />
            <img
                src="https://www.cartrollers.com/wp-content/uploads/2022/07/Watch-Banner-Sale.jpg"
                className="mt-3"
                style={{ marginLeft: '20%' }}
            />
            <SliderBrands />
            <HomePageTheme />
            <SliderCards />
        </div>
    );
};

export default HomePage;
