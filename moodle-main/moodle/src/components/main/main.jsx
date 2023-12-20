import { Link as ScrollLink } from 'react-scroll';
import React from 'react'
import './main.css'
import vector from './vector.svg'
import cap from './cap.svg'
import photo1 from './image1.svg'
import photo2 from './image2.svg'
import photo3 from './image3.svg'
import photo4 from './image4.svg'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Main() {
    return (
        <div className='main'>
            <div className="main-bg">
                <div className="container">
                    <div className="main-main">
                        <div className="main-text">
                            LEARN FROM ANYWHERE
                        </div>
                        <div className="main-desc-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        </div>
                        <div className="btn">
                            <a href="#" className='btn-a'>
                                <div className="btn-text">CLICK HERE</div>
                            </a>
                        </div>
                        <div className="vector">
                            <ScrollLink to="group" smooth={true} duration={500}>
                                <img src={vector} alt="" />
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grooo' id='group'>
                <div className="containerr">
                    <div className='group'>
                        <div className="group__images">
                            <div className="group__1">
                                <img src={photo2} alt="" />
                                <p>
                                    DIWAIDMW
                                </p>
                            </div>
                            <div className="group__2">
                                <img src={photo3} alt="" />
                                <p>
                                    DIWAIDMW
                                </p>
                            </div>
                            <div className="group__3">
                                <img src={photo4} alt="" />
                                <p>
                                    DIWAIDMW
                                </p>
                            </div>
                            <div className="group__4">
                                <img src={photo1} alt="" />
                                <p>
                                    DIWAIDMW
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="group2">
                        <div className='group2__text'>OUR CORE VALUES</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa omnis illum in dignissimos dolorem quas beatae perferendis atque quibusdam fugiat culpa nisi esse vitae, asperiores voluptate veniam quisquam placeat.</p>
                        <div className="btn-gr">
                            <a href="#" className='btn-a-group'>
                                <div className="btn-text">CLICK HERE</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



            <div className="main-achieves">
                <div className="achieves-bg">
                    <div className="container">
                        <div className="achieves-menu">
                            <div className="achieves-text">
                                <div className="achieves-main-text">OUR ACHIEVES</div>
                                <div className="achieves-desc-text">
                                    diwamdawidmaimdiwadiwamdawidmaimdiwadiwamdawidmaimdiwa
                                    diwamdawidmaimdiwadiwamdawidmaimdiwadiwamdawidmaimdiwa
                                </div>
                            </div>
                            <div className="achieves-cards">
                                <div className="achieves-card">
                                    <img src={cap} alt="" />
                                    <div className="cap-text">GRADUATES</div>
                                    <div className="cap-text">139742</div>
                                </div>
                                <div className="achieves-card">
                                    <img src={cap} alt="" />
                                    <div className="cap-text">GRADUATES</div>
                                    <div className="cap-text">139742</div>
                                </div>
                                <div className="achieves-card">
                                    <img src={cap} alt="" />
                                    <div className="cap-text">GRADUATES</div>
                                    <div className="cap-text">139742</div>
                                </div>
                                <div className="achieves-card">
                                    <img src={cap} alt="" />
                                    <div className="cap-text">GRADUATES</div>
                                    <div className="cap-text">139742</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="swiper-menu">
                <div className="container">
                    <div className="swiper-text">
                        LATEST NEWS ON SITE
                    </div>
                    <div className="swiper-container">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation
                            scrollbar={{ draggable: true }}
                        >
                            <SwiperSlide>
                                <img src="https://via.placeholder.com/500" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://via.placeholder.com/500" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://via.placeholder.com/500" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://via.placeholder.com/500" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
