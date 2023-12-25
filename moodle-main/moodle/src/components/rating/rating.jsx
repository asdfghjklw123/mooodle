import React, { useState } from 'react';
import './rating.css';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';


const teachersData = [
    { id: 1, name: 'Преподаватель 1', subject: 'Предмет 1', rating: 5 },
    { id: 2, name: 'Преподаватель 2', subject: 'Предмет 2', rating: 4 },
    // Добавьте дополнительные записи, если необходимо
];

export default function Rating_Teacher() {
    const [teacherRatings, setTeacherRatings] = useState(teachersData);

    const handleRatingChange = (value, teacherId) => {
        // Обновляем оценку преподавателя в массиве
        const updatedRatings = teacherRatings.map((teacher) =>
            teacher.id === teacherId ? { ...teacher, rating: value } : teacher
        );

        setTeacherRatings(updatedRatings);
    };

    return (
        <div className="rating-main">
            <div className="container">
                <div className="rating-text">
                    <div className="textnav">
                        <NavLink to="/" className="text1">
                            Главная →
                        </NavLink>
                        <div className="text-vkladka">Оценка</div>
                    </div>
                    <div className="text2">Оценка преподавателей</div>
                </div>
                <table className="rating-table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Преподаватель</th>
                            <th>Предмет</th>
                            <th>Оценивание</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachersData.map((teacher, index) => (
                            <tr key={teacher.id}>
                                <td>{index + 1}</td>
                                <td>{teacher.name}</td>
                                <td>{teacher.subject}</td>
                                <td>
                                    <Rating
                                        initialRating={teacher.rating}
                                        emptySymbol="☆"
                                        fullSymbol="★"
                                        onChange={(value) =>
                                            handleRatingChange(value, teacher.id)
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
