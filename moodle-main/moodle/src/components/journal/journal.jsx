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
            journalType: "Тип 1",
            group: "Группа 1",
            teacher: "Преподаватель 1",
        },
        {
            id: 2,
            number: 2,
            title: "Журнал 2",
            journalType: "Тип 2",
            group: "Группа 2",
            teacher: "Преподаватель 2",
        },
        {
            id: 3,
            number: 3,
            title: "Журнал 3",
            journalType: "Тип 3",
            group: "Группа 3",
            teacher: "Преподаватель 3",
        },
        {
            id: 4,
            number: 4,
            title: "Журнал 4",
            journalType: "Тип 4",
            group: "Группа 4",
            teacher: "Преподаватель 4",
        },
        {
            id: 5,
            number: 5,
            title: "Журнал 5",
            journalType: "Тип 5",
            group: "Группа 5",
            teacher: "Преподаватель 5",
        },
        {
            id: 6,
            number: 6,
            title: "Журнал 6",
            journalType: "Тип 6",
            group: "Группа 6",
            teacher: "Преподаватель 6",
        },
        {
            id: 7,
            number: 7,
            title: "Журнал 7",
            journalType: "Тип 7",
            group: "Группа 7",
            teacher: "Преподаватель 7",
        },
        {
            id: 8,
            number: 8,
            title: "Журнал 8",
            journalType: "Тип 8",
            group: "Группа 8",
            teacher: "Преподаватель 8",
        },
        {
            id: 9,
            number: 9,
            title: "Журнал 9",
            journalType: "Тип 9",
            group: "Группа 9",
            teacher: "Преподаватель 9",
        },
        {
            id: 10,
            number: 10,
            title: "Журнал 10",
            journalType: "Тип 10",
            group: "Группа 10",
            teacher: "Преподаватель 10",
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
                            <th>Тип журнала</th>
                            <th>Группа</th>
                            <th>Преподаватель</th>
                            <th>Оценки</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.number}</td>
                                <td>{item.title}</td>
                                <td>{item.journalType}</td>
                                <td>{item.group}</td>
                                <td>{item.teacher}</td>
                                <td>
                                    <NavLink
                                        to=""
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
