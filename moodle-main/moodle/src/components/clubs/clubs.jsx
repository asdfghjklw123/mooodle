import React, { useState } from 'react';
import './clubs.css';
import dota from './dota.jpg'
import cs2 from './cs2.jpg'
import dance from './dance.jpg'
import chess from './chess.jpg'
import mafia from './mafia.jpg'
import tennis from './tennis.jpg'
import { NavLink } from 'react-router-dom';


export default function Clubs() {
    return (
        <div className="main-clubs">
            <div className="container">
                <div className="clubs-text">
                    <div className="textnav">
                        <NavLink to="/" className="text1">Главная →</NavLink>
                        <div className="text-vkladka">Клубы</div>
                    </div>
                    <div className="text2">КЛУБЫ</div>
                </div>
                <div className="cards-list">
                    <div className="clubs-card 1">
                        <div className="clubs-card_image">
                            <img src={dota} />
                        </div>
                        <div className="clubs-card_title clubs-title-white">
                            <p>Dota 2</p>
                        </div>
                    </div>
                    <div className="clubs-card 2">
                        <div className="clubs-card_image">
                            <img src={chess} />
                        </div>
                        <div className="clubs-card_title clubs-title-white">
                            <p>Chess</p>
                        </div>
                    </div>
                    <div className="clubs-card 3">
                        <div className="clubs-card_image">
                            <img src={mafia} />
                        </div>
                        <div className="clubs-card_title clubs-title-black">
                            <p>Mafia</p>
                        </div>
                    </div>
                    <div className="clubs-card 4">
                        <div className="clubs-card_image" >
                            <img id="dance-img" src={dance} />
                        </div>
                        <div className="clubs-card_title clubs-title-black">
                            <p>Dance</p>
                        </div>
                    </div>
                    <div className="clubs-card 5">
                        <div className="clubs-card_image">
                            <img src={cs2} />
                        </div>
                        <div className="clubs-card_title clubs-title-white">
                            <p>Counter-Strike 2</p>
                        </div>
                    </div>
                    <div className="clubs-card 6">
                        <div className="clubs-card_image">
                            <img src={tennis} />
                        </div>
                        <div className="clubs-card_title clubs-title-black">
                            <p>Table tennis</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
