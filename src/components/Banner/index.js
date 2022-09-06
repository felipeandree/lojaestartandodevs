import React from 'react';
import bannerCamisa from '../../assets/images/img/banner-camisa.png';
import './styles.css';
import 'material-symbols';

export function Banner() {
    return (
        <div className='banner-camisa'>
            <img src={bannerCamisa} alt='Baner camisa Estartando Devs' />
        </div>
    );
}
