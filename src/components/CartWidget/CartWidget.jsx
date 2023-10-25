import React from 'react';
import { BiCart } from "react-icons/bi";

const CartWidget = () => {
    return (
        <div>
            <BiCart/>
            <p>0</p>
        </div>
    );
};

export default CartWidget;