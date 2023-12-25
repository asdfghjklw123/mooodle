import React, { useState } from "react";
import "./task.css";
import { NavLink } from "react-router-dom";
import grad_cap from "./grad-cap.svg";
import white_cap from "./white-cap.svg" 

export default function Task() {

  const courseData = [
    { number: 1, title: 'Составление алгоритма и создание блок-схемы на основе спецификации программного обеспечения ПО2212'},
    { number: 2, title: 'Организация обработки больших данных ПО2212'},
    { number: 3, title: 'Применение информационно-коммуникационных и цифровых технологий ПО2212'},
];



const [selectedItem, setSelectedItem] = useState(1);
const [selectedCourseTitle, setSelectedCourseTitle] = useState(courseData[0].title);

const handleItemClick = (index) => {
    setSelectedItem(index);
    setSelectedCourseTitle(courseData[index - 1].title);
};

  const [draggedOver, setDraggedOver] = useState(false);

  const handleFiles = (files) => {
    console.log(`Получено файлов: ${files.length}`); 
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDraggedOver(true);
  };

  const handleDragLeave = () => {
    setDraggedOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDraggedOver(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

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
              <NavLink to="/course" className="sidebar-card" id="task-card1">
                <div className="sidebar-img">
                  <img src={white_cap} alt="" />
                </div>
                <div className="sidebar-text">Составление алгоритма и создание блок-схемы на основе спецификации программного обеспечения ПО2212</div>
              </NavLink>
              <NavLink to="/course" className="sidebar-card" id="task-card2">
                <div className="sidebar-img">
                  <img src={grad_cap} alt="" />
                </div>
                <div className="sidebar-text">Организация обработки больших данных ПО2212</div>
              </NavLink>
              <NavLink to="/course" className="sidebar-card" id="task-card3">
                <div className="sidebar-img">
                  <img src={grad_cap} alt="" />
                </div>
                <div className="sidebar-text">Применение информационно-коммуникационных и цифровых технологий ПО2212</div>
              </NavLink>
            </div>
            <div className="task-menu">
              <div className="text2" id="otvet2">
                Практическое Задание по Лекции №5 (Производственное Обучение)
              </div>
              <div className="text2" id="otvet">
                СОСТОЯНИЕ ОТВЕТА
              </div>
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
              <div className={`text2 ${draggedOver ? 'dragged-over' : ''}`} id="otvet">
                ВАШ ОТВЕТ
                <div id="dropZone" className={`drop-zone ${draggedOver ? 'dragged-over' : ''}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                  <div className="drop-zone-icons">
                    <svg className="upload-icon" viewBox="0 0 24 24" fill="#FF5A5F">
                      <path d="M12 6l-4 4h3v4h2v-4h3m-10 6v2h12v-2h-12z"></path>
                    </svg>
                  </div>
                  <span className="drop-zone-text">Перетащите файлы сюда или нажмите, чтобы загрузить</span>
                </div>
                <input type="file" multiple style={{ display: 'none' }} onChange={handleFileInputChange} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





{/* <table className="task-table">
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
</table> */}