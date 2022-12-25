import React from 'react';
import recommendations from '../styles/recommendations.css'


function Recommendations() {

    return (
        <>


            <details>
                <summary>Что такое ПДК?</summary>
                <p>Предельно допустимая концентрация (ПДК) – это такое содержание вредных химических веществ в окружающей среде, которое практически не влияет на здоровье человека при постоянном контакте или воздействии за определенный промежуток времени.</p>
            </details>
            <hr />

            <details>
                <summary>ПДК веществ</summary>
                <p>
                    <div className='border'>
                        <p align='center'> У каждого вещества есть свой ПДК (м.р - максимально-разовое, с.с - среднесуточное)</p>

                        <table align='center' className='table_of_rec' border={1}>
                            <tbody border='1'>

                                <tr>
                                    <td>Наименование</td>
                                    <td>ПДК м.р.</td>
                                    <td>ПДК с.с.</td>
                                </tr >

                                <tr>
                                    <td>Взвешенные частицы РМ10</td>
                                    <td>0.3</td>
                                    <td>0.06</td>
                                </tr>
                                <tr>
                                    <td>Взвешенные частицы РМ2.5</td>
                                    <td>0.16</td>
                                    <td>0.16</td>
                                </tr>
                                <tr>
                                    <td>Диоксид серы</td>
                                    <td>0.5</td>
                                    <td>0.05</td>
                                </tr>
                                <tr>
                                    <td>Оксид углерода</td>
                                    <td>5</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Диоксид азота</td>
                                    <td>0.2</td>
                                    <td>0.1</td>
                                </tr>
                                <tr>
                                    <td>Сероводород</td>
                                    <td>0.008</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Аммиак</td>
                                    <td>0.2</td>
                                    <td>0.1</td>
                                </tr>
                                <tr>
                                    <td>Формальдегид</td>
                                    <td>0.05</td>
                                    <td>0.01</td>
                                </tr>
                                <tr>
                                    <td>Оксид серы</td>
                                    <td>0.3</td>
                                    <td>0.1</td>
                                </tr>
                                <tr>
                                    <td>Оксид азота</td>
                                    <td>0.4</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Озон</td>
                                    <td>0.16</td>
                                    <td>0.1</td>
                                </tr>
                                <tr>
                                    <td>Бензол</td>
                                    <td>0.3</td>
                                    <td>0.06</td>
                                </tr>
                                <tr>
                                    <td>Стирол</td>
                                    <td>0.04</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Толуол</td>
                                    <td>0.6</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Аммиак</td>
                                    <td>0.2</td>
                                    <td>0.1</td>
                                </tr>
                                <tr>
                                    <td>Формальдегид </td>
                                    <td>0.05</td>
                                    <td>0.01</td>
                                </tr>
                                <tr>
                                    <td>Хлорбензол </td>
                                    <td>0.1</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Этилбензол</td>
                                    <td>0.02</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Мп-ксилол</td>
                                    <td>0.3</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>О-ксилол</td>
                                    <td>0.25</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </p>
            </details>
            <hr />

            <details>
                <summary>Что такое СИ?</summary>
                <p>Стандартный Индекс (СИ) – наибольшая измеренная максимальная разовая концентрациях любого загрязняющего вещества, деленная на ПДК</p>
            </details>
            <hr />

            <details >
                <summary>Рекомендации по здоровью</summary>
                <div className='border'>
                    <p>
                        <table align="center"  className='table_of_rec' border={1}>
                            <tr>
                                <td>Градации</td>
                                <td>Загрязнение атмосферного воздуха</td>
                                <td>Рекомендация</td>
                                <td>Оценка</td>
                            </tr>
                            <tr  id='first'>
                                <td>I</td>
                                <td>Низкое</td>
                                <td>Дети и взрослые могут спокойно находиться на свежем воздухе</td>
                                <td>0-1</td>
                            </tr>
                            <tr id='second'>
                                <td>II</td>
                                <td>Повышенное</td>
                                <td>Люди с респираторными заболеваниями, например астма, должны ограничить пребывание на улице</td>
                                <td>2-4</td>
                            </tr>
                            <tr id='third'>
                                <td>III</td>
                                <td>Высокое</td>
                                <td>Представители групп риска могут испытвать проблемы</td>
                                <td>5-10</td>
                            </tr>
                            <tr id='fourth'>
                                <td>IV</td>
                                <td>Очень высокое</td>
                                <td>Каждый может начать испытывать проблемы со здоровьем</td>
                                <td>›10</td>
                            </tr>
                        </table>
                    </p>
                </div>
            </details>
            <hr />

            <details>
                <summary>Чем опасно каждое вещество?</summary>
                <p>Сюда закину вред веществ</p>
            </details>
            <hr />



        </>
    )
}

export default Recommendations;