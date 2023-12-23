import React, { useState } from 'react';
import './courses.css';
import { NavLink } from 'react-router-dom';
import arrow from './arrow.svg';
import whiteArrow from './white-arrow.svg';
import grad_cap from "./grad-cap.svg";

export default function Course() {
    const themeData = [
        { number: 1, title: 'Тема 1', date: '01.01.2023', deadline: '10.01.2023'},
        { number: 2, title: 'Тема 2', date: '02.02.2023', deadline: '20.02.2023'},
        { number: 3, title: 'Тема 3', date: '03.03.2023', deadline: '30.03.2023'},
        // Добавьте еще 6 строк данных по аналогии...
        { number: 4, title: 'Тема 4', date: '04.04.2023', deadline: '10.04.2023'},
        { number: 5, title: 'Тема 5', date: '05.05.2023', deadline: '15.05.2023'},
        { number: 6, title: 'Тема 6', date: '06.06.2023', deadline: '20.06.2023'},
        { number: 7, title: 'Тема 7', date: '07.07.2023', deadline: '25.07.2023'},
        { number: 8, title: 'Тема 8', date: '08.08.2023', deadline: '18.08.2023'},
        { number: 9, title: 'Тема 9', date: '09.09.2023', deadline: '30.09.2023'},
    ];

    const [hoveredArrow, setHoveredArrow] = useState(null);

    return (
        <div className="main__theme">
            <div className="container">
                <div className="theme__inner">
                    <div className="courses-text">
                        <div className="textnav">
                            <NavLink to="/" className="text1">Главная →</NavLink>
                            <div className="text-vkladka">КУРСЫ</div>
                        </div>
                        <div className="text2">КУРСЫ</div>
                    </div>
                    <div className="course-wrapper">
                        <div className="course-sidebar">
                            <NavLink to="/" className="course-sidebar-card">
                                <div className="course-sidebar-img">
                                    <img src={grad_cap} alt="" />
                                </div>
                                <div className="course-sidebar-text">Составление алгоритма и создание блок-схемы на основе спецификации программного обеспечения ПО2212</div>
                            </NavLink>
                            <NavLink to="/" className="course-sidebar-card">
                                <div className="course-sidebar-img">
                                    <img src={grad_cap} alt="" />
                                </div>
                                <div className="course-sidebar-text">Организация обработки больших данных ПО2212</div>
                            </NavLink>
                            <NavLink to="/" className="course-sidebar-card" id="course-card3">
                                <div className="course-sidebar-img">
                                    <img src={grad_cap} alt="" />
                                </div>
                                <div className="course-sidebar-text">Применение информационно-коммуникационных и цифровых технологий ПО2212</div>
                            </NavLink>
                        </div>
                        <table className="theme__table">
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>Название</th>
                                    <th>Дата и время назначения</th>
                                    <th>Дата и время завершения</th>
                                    <th>Ответ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {themeData.map((theme, index) => (
                                    <tr key={index}>
                                        <td>{theme.number}</td>
                                        <td>{theme.title}</td>
                                        <td>{theme.date}</td>
                                        <td>{theme.deadline}</td>
                                        <td>
                                            <NavLink
                                                to="/task"
                                                className="journal-btn"
                                                onMouseEnter={() => setHoveredArrow(index)}
                                                onMouseLeave={() => setHoveredArrow(null)}
                                            >
                                                <img
                                                    className="arrow-image"
                                                    src={hoveredArrow === index ? whiteArrow : arrow}
                                                    alt="Стрелка"
                                                    width="16"
                                                    height="16"
                                                />
                                            </NavLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
