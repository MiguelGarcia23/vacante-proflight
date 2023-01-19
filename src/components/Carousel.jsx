import { useState } from 'react';

import '../App.css';

function Carousel() {

    /* Estado que contiene el número de la caja de imagen activa */
    let [ numberImg, setNumberImg ] = useState( 1 );

    /* Función que se activa al pulsar la flecha izquierda, cambiando la caja activa */
    function clickLeftArrow() {

        if (numberImg === 1) {
            setNumberImg( 4 );
        } else if (numberImg === 2) {
            setNumberImg( 1 );
        } else if (numberImg === 3) {
            setNumberImg( 2 );
        } else if (numberImg === 4) {
            setNumberImg( 3 );
        }

    }

    /* Función que se activa al pulsar la flecha derecha, cambiando la caja activa */
    function clickRightArrow() {

        if (numberImg === 1) {
            setNumberImg( 2 );
        } else if (numberImg === 2) {
            setNumberImg( 3 );
        } else if (numberImg === 3) {
            setNumberImg( 4 );
        } else if (numberImg === 4) {
            setNumberImg( 1 );
        }

    }

    return (

        <div className='carousel'>

            {/* Caja de la flecha izquierda */}      
            <div className='arrow-box left-arrow'>
                <img src='/flecha-izquierda.svg' alt='Flecha izquierda del carrusel' className='arrow-img' onClick={ clickLeftArrow } />
            </div>

            {/* Caja del conjunto de imagenes del carrusel */}
            <div className='carousel-imgs'>

                <div className={ numberImg === 1 ? 'carousel-img-box-active' : 'carousel-img-box' }>
                    <img src='/logo-proflight.svg' alt='Logo de Proflight' className='carousel-img' />
                </div>
                <div className={ numberImg === 2 ? 'carousel-img-box-active' : 'carousel-img-box' }>
                    <img src='/logo-proflight.svg' alt='Logo de Proflight' className='carousel-img' />
                </div>
                <div className={ numberImg === 3 ? 'carousel-img-box-active' : 'carousel-img-box' }>
                    <img src='/logo-proflight.svg' alt='Logo de Proflight' className='carousel-img' />
                </div>
                <div className={ numberImg === 4 ? 'carousel-img-box-active' : 'carousel-img-box' }>
                    <img src='/logo-proflight.svg' alt='Logo de Proflight' className='carousel-img' />
                </div>

            </div>

            {/* Caja de la flecha derecha */}   
            <div className='arrow-box right-arrow'>
                <img src='/flecha-derecha.svg' alt='Flecha derecha del carrusel' className='arrow-img' onClick={ clickRightArrow } />
            </div>

        </div>

    )
}

export default Carousel;