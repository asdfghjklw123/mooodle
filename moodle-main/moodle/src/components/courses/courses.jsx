import React, { useState } from 'react';
import './courses.css';
import { NavLink } from 'react-router-dom';
import arrow from './arrow.svg';
import whiteArrow from './white-arrow.svg';
import grad_cap from "./grad-cap.svg";
import white_cap from "./white-cap.svg" 

export default function Course() {
    const courseData = [
        { number: 1, title: 'Составление алгоритма и создание блок-схемы на основе спецификации программного обеспечения ПО2212'},
        { number: 2, title: 'Организация обработки больших данных ПО2212'},
        { number: 3, title: 'Применение информационно-коммуникационных и цифровых технологий ПО2212'},
    ];

    const themeData = [
        { number: 1, title: 'Тема 1', date: '01.01.2023', deadline: '10.01.2023'},
        { number: 2, title: 'Тема 2', date: '02.02.2023', deadline: '20.02.2023'},
        { number: 3, title: 'Тема 3', date: '03.03.2023', deadline: '30.03.2023'},
        { number: 4, title: 'Тема 4', date: '04.04.2023', deadline: '10.04.2023'},
        { number: 5, title: 'Тема 5', date: '05.05.2023', deadline: '15.05.2023'},
        { number: 6, title: 'Тема 6', date: '06.06.2023', deadline: '20.06.2023'},
        { number: 7, title: 'Тема 7', date: '07.07.2023', deadline: '25.07.2023'},
        { number: 8, title: 'Тема 8', date: '08.08.2023', deadline: '18.08.2023'},
        { number: 9, title: 'Тема 9', date: '09.09.2023', deadline: '30.09.2023'},
        { number: 10, title: 'Тема 10', date: '09.09.2023', deadline: '30.09.2023'},
    ];

    

    const [selectedItem, setSelectedItem] = useState(1);
    const [selectedCourseTitle, setSelectedCourseTitle] = useState(courseData[0].title);

    const handleItemClick = (index) => {
        setSelectedItem(index);
        setSelectedCourseTitle(courseData[index - 1].title);
    };

    return (
        <div className="main__theme">
            <div className="container">
                <div className="theme__inner">
                    <div className="courses-text">
                        <div className="textnav">
                            <NavLink to="/" className="text1">Главная →</NavLink>
                            <div className="text-vkladka">Курсы</div>
                        </div>
                        <div className="text2">{selectedCourseTitle}</div>
                    </div>
                    <div className="course-wrapper">
                        <div className="course-sidebar">
                            {courseData.map((course, index) => (
                                <NavLink
                                    key={index + 1}
                                    to="/course"
                                    className={`course-sidebar-card ${selectedItem === index + 1 ? 'selected' : ''}`}
                                    id={`course-card${index + 1}`}
                                    onClick={() => handleItemClick(index + 1)}
                                >
                                    <div className="course-sidebar-img">
                                        <img src={selectedItem === index + 1 ? white_cap : grad_cap} alt="" />
                                    </div>
                                    <div className="course-sidebar-text">{course.title}</div>
                                </NavLink>
                            ))}
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
                                            >
                                                <img
                                                    className="arrow-image"
                                                    src={arrow}
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
