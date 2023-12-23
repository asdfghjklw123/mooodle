import React, { useState } from "react";
import "./journal.css";
import { NavLink } from 'react-router-dom';
import arrow from './arrow.svg';
import whiteArrow from './white-arrow.svg';

export default function Journal() {
    const [data, setData] = useState([
        {
            id: 1,
            number: 1,
            title: "Журнал 1",
            group: "Группа 1",
            teacher: "Преподаватель 1",
            finalGrade: 81,
        },
        {
            id: 2,
            number: 2,
            title: "Журнал 2",
            group: "Группа 2",
            teacher: "Преподаватель 2",
            finalGrade: 81,
        },
        {
            id: 3,
            number: 3,
            title: "Журнал 3",
            group: "Группа 3",
            teacher: "Преподаватель 3",
            finalGrade: 81,
        },
        {
            id: 4,
            number: 4,
            title: "Журнал 4",
            group: "Группа 4",
            teacher: "Преподаватель 4",
            finalGrade: 81,
        },
        {
            id: 5,
            number: 5,
            title: "Журнал 5",
            group: "Группа 5",
            teacher: "Преподаватель 5",
            finalGrade: 81,
        },
        {
            id: 6,
            number: 6,
            title: "Журнал 6",
            group: "Группа 6",
            teacher: "Преподаватель 6",
            finalGrade: 81,
        },
        {
            id: 7,
            number: 7,
            title: "Журнал 7",
            group: "Группа 7",
            teacher: "Преподаватель 7",
            finalGrade: 81,
        },
        {
            id: 8,
            number: 8,
            title: "Журнал 8",
            group: "Группа 8",
            teacher: "Преподаватель 8",
            finalGrade: 81,
        },
        {
            id: 9,
            number: 9,
            title: "Журнал 9",
            group: "Группа 9",
            teacher: "Преподаватель 9",
            finalGrade: 81,
        },
        {
            id: 10,
            number: 10,
            title: "Журнал 10",
            group: "Группа 10",
            teacher: "Преподаватель 10",
            finalGrade: 81,
        },
    ]);

    const [hoveredArrow, setHoveredArrow] = useState(null);

    return (
        <div className="journal-main">
            <div className="container">
                <div className="journal-text">
                    <div className="textnav">
                        <NavLink to="/" className="text1">Главная →</NavLink>
                        <div className="text-vkladka">Журнал</div>
                    </div>
                    <div className="text2">ЖУРНАЛ</div>
                </div>
                <table className="journal-table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Название</th>
                            <th>Группа</th>
                            <th>Преподаватель</th>
                            <th>Итоговая оценка</th>
                            <th>Все оценки</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.number}</td>
                                <td>{item.title}</td>
                                <td>{item.group}</td>
                                <td>{item.teacher}</td>
                                <td>{item.finalGrade}</td>
                                <td>
                                    <NavLink
                                        to="/grades"
                                        className="journal-btn"
                                        onMouseEnter={() => setHoveredArrow(item.id)}
                                        onMouseLeave={() => setHoveredArrow(null)}
                                    >
                                        <img
                                            className="arrow-image"
                                            src={hoveredArrow === item.id ? whiteArrow : arrow}
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
    );
}
