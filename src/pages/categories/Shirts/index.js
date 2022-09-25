import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { MenuMobile } from "../../components/MenuMobile/MenuMobile.js";
import { Wrapper } from "./styles";




export const Shirts = () => {


    const [menuIsVisible, setMenuIsVisible] = useState(false)
    return (

        <>
            <MenuMobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible} />
            <Header setMenuIsVisible={setMenuIsVisible} />
            <h1>Camisas</h1>
        </>
    )

}

export default Shirts