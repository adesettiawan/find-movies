import React from "react";
import { useLottie } from "lottie-react";
import notFoundAnimation from "./assets/not-found.json";

const NoData = () => {
    const style = {
        height: 300,
    };

    const options = {
        animationData: notFoundAnimation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options, style);

    return View;
};

export default NoData;
