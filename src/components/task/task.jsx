import React, { useState } from "react";
import "./task.css";
import { NavLink } from "react-router-dom";
import grad_cap from "./grad-cap.svg";

export default function Task() {
    return (
        <div className="task-main">
            <div className="container">
                <div className="main">
                    <div className="task-text">
                        <div className="textnav">
                            <NavLink to="/" className="text1">
                                Главная →
                            </NavLink>
                            <NavLink to="/course" className="text1-journal">
                                Курс →
                            </NavLink>
                            <div className="text-vkladka">Тема 8</div>
                        </div>
                        <div className="text2">ТЕМА 8</div>
                    </div>
                    <div className="main-task-menu">
                        <div className="task-sidebar">
                            <NavLink to="/" className="sidebar-card">
                                <div className="sidebar-img">
                                    <img src={grad_cap} alt="" />
                                </div>
                                <div className="sidebar-text">Составление алгоритма и создание блок-схемы на основе спецификации программного обеспечения ПО2212</div>
                            </NavLink>
                            <NavLink to="/" className="sidebar-card">
                                <div className="sidebar-img">
                                    <img src={grad_cap} alt="" />
                                </div>
                                <div className="sidebar-text">Организация обработки больших данных ПО2212</div>
                            </NavLink>
                            <NavLink to="/" className="sidebar-card" id="card3">
                                <div className="sidebar-img">
                                    <img src={grad_cap} alt="" />
                                </div>
                                <div className="sidebar-text">Применение информационно-коммуникационных и цифровых технологий ПО2212</div>
                            </NavLink>
                        </div>
                        <div className="task-menu">
                            <div className="text2" id="otvet2">Практическое Задание по Лекции №5 (Производственное Обучение)</div>
                            <div className="text2" id="otvet">СОСТОЯНИЕ ОТВЕТА</div>
                            <table className="task-table">
                                <tbody>
                                    <tr>
                                        <td className="table-label">Дата назначения задания:</td>
                                        <td>01.01.2023 23:00</td>
                                    </tr>
                                    <tr>
                                        <td className="table-label">Дата завершения задания:</td>
                                        <td>04.01.2023 23:00</td>
                                    </tr>
                                    <tr>
                                        <td className="table-label">Статус ответа:</td>
                                        <td>В процессе</td>
                                    </tr>
                                    <tr>
                                        <td className="table-label">Оценка:</td>
                                        <td>Без оценки</td>
                                    </tr>
                                    <tr>
                                        <td className="table-label">Оставшееся время:</td>
                                        <td>3 дня</td>
                                    </tr>
                                    <tr>
                                        <td className="table-label">Прикрепленный файл:</td>
                                        <td>file</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text2" id="otvet">ВАШ ОТВЕТ</div>
                            <table className="task-table">
                                <tbody>
                                    <tr>
                                        <td className="table-label">Статус:</td>
                                        <td>Проверено</td>
                                    </tr>
                                    <tr>
                                        <td className="table-label">Ваш файл:</td>
                                        <td>file</td>
                                    </tr>
                                    <tr>
                                        <td className="table-label">Комментарий преподавателя:</td>
                                        <td>...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



