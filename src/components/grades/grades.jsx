import React, { useState } from "react";
import "./grades.css";
import { NavLink } from "react-router-dom";

export default function Grades() {
  const [gradeData, setGradeData] = useState([
    { id: 1, subject: "Math", grade: "A A B C A A A A ", records: 5, semesterTotal: 95 },
    { id: 2, subject: "Science", grade: "A A B C A A A A", records: 4, semesterTotal: 85 },
    { id: 3, subject: "Science", grade: "A A B C A A A A", records: 4, semesterTotal: 85 },
    { id: 4, subject: "Science", grade: "A A B C A A A A", records: 4, semesterTotal: 85 },
    { id: 5, subject: "Science", grade: "A A B C A A A A", records: 4, semesterTotal: 85 },

  ]);

  return (
    <div className="grades-main">
      <div className="container">
        <div className="main">
          <div className="grades-text">
            <div className="textnav">
              <NavLink to="/" className="text1">
                Главная →
              </NavLink>
              <NavLink to="/journal" className="text1-journal">
                Журнал →
              </NavLink>
              <div className="text-vkladka">Оценки</div>
            </div>
            <div className="text2">ОЦЕНКИ</div>
          </div>


          <table className="grades-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Предмет</th>
                <th>Оценки</th>
                <th>Записи</th>
                <th>Итог за семестр</th>
              </tr>
            </thead>
            <tbody>
              {gradeData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.subject}</td>
                  <td>{row.grade}</td>
                  <td>{row.records}</td>
                  <td>{row.semesterTotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
