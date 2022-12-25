import React from 'react';
import marking from '../styles/markings.css'

function Markings() {

    return (
        <>

            <details>
                <summary id='Paper'>Бумага</summary>
                <p>
                    <div className='border' id='Paper'>
                        <table  align='center' className='table_of_mk' ><tbody>
                            <tr>
                                <td><table align="center" border={1}>
                                    <thead>

                                        <tr>

                                            <th>Код</th>
                                            <th>Описание</th>
                                            <th>Пример</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>20 pap (pcb)</td>
                                            <td>Гофрированный картон</td>
                                            <td>Коробки от бытовой техники, продуктов, косметики</td>
                                        </tr>

                                        <tr>
                                            <td>21 pap</td>
                                            <td>Прочий картон</td>
                                            <td>Открытки, обложки книг, короб-упаковка</td>
                                        </tr>

                                        <tr>
                                            <td>22 pap</td>
                                            <td>Бумага</td>
                                            <td>Журналы и газеты, конверты, бумажные пакеты, бумага для печати</td>
                                        </tr>

                                        <tr>
                                            <td>23 pbd (ppb)</td>
                                            <td>Вощёная бумага</td>
                                            <td>Упаковка для почтовых отправлений или для декора букетов</td>
                                        </tr>
                                    </tbody>
                                </table></td>
                            </tr></tbody>
                        </table>
                    </div>
                </p>
            </details>
            <hr />

            <details>
                <summary id='Plastic'>Пластик</summary>
                <p>
                    <div className='border' id='Plastic'>
                        <table className='table_of_mk' ><tbody>
                            <tr>
                                <td><table align="center" border="1" >
                                    <thead>

                                        <tr>

                                            <th>Код</th>
                                            <th>Описание</th>
                                            <th>Пример</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>1 pet</td>
                                            <td>Полиэтилентерефталат (лавсан)</td>
                                            <td>Полиэстер, бутылки для напитков</td>
                                        </tr>

                                        <tr>
                                            <td>2 pehd</td>
                                            <td>Полиэтилен высокой плотности (низкого давления)</td>
                                            <td>Пластиковые бутылки, пакеты, мусорные вёдра</td>
                                        </tr>

                                        <tr>
                                            <td>3 pvc</td>
                                            <td>Поливинилхлорид</td>
                                            <td>Оконные рамы, бутылки для химических продуктов, покрытия дляполов, изоляция электрических проводов, обложки для тетрадей и учебников</td>
                                        </tr>

                                        <tr>
                                            <td>4 peld</td>
                                            <td>Полиэтилен низкой плотности (высокого давления)</td>
                                            <td>Пакеты, вёдра, трубы, крышки, пищевые емкости</td>
                                        </tr>

                                        <tr>
                                            <td>5 pp</td>
                                            <td>Полипропилен</td>
                                            <td>Автомобильные бамперы, внутренняя отделка автомобилей, корпуса электроинструмента, упаковка из-под шоколадок, макарон, пластиковые стаканчики, пакеты</td>
                                        </tr>

                                        <tr>
                                            <td>6 ps</td>
                                            <td>Полистирол</td>
                                            <td>Игрушки, одноразовая посуда, цветочные горшки, видеокассеты, чемоданы, одноразовые стаканчики</td>
                                        </tr>

                                        <tr>
                                            <td>7 о (other)</td>
                                            <td>Остальные виды пластика</td>
                                            <td>Пластиковая упаковка, различные пластиковые изделия, полиуретан, поликарбонат, полиамиды, полиакрилонитрил и др., биопластики, смесь полиэтилена высокого и низкого давления (hdpe и ldpe), смесь материалов полиолефиновой группы и др.</td>
                                        </tr>
                                    </tbody>
                                </table></td>
                            </tr></tbody>
                        </table>
                    </div>
                </p>
            </details>
            <hr />

            <details>
                <summary id='Glass'>Стекло</summary>
                <p>
                    <div className='border' id='Glass'>
                        <table align='center' className='table_of_mk'><tbody>
                            <tr>
                                <td><table align="center" border="1">
                                    <thead>

                                        <tr>

                                            <th>Код</th>
                                            <th>Описание</th>
                                            <th>Пример</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>20 pap (pcb)</td>
                                            <td>Гофрированный картон</td>
                                            <td>Коробки от бытовой техники, продуктов, косметики</td>
                                        </tr>

                                        <tr>
                                            <td>21 pap</td>
                                            <td>Прочий картон</td>
                                            <td>Открытки, обложки книг, короб-упаковка</td>
                                        </tr>

                                        <tr>
                                            <td>22 pap</td>
                                            <td>Бумага</td>
                                            <td>Журналы и газеты, конверты, бумажные пакеты, бумага для печати</td>
                                        </tr>

                                        <tr>
                                            <td>23 pbd (ppb)</td>
                                            <td>Вощёная бумага</td>
                                            <td>Упаковка дляпочтовыхотправлений или для декора букетов</td>
                                        </tr>
                                    </tbody>
                                </table></td>
                            </tr></tbody>
                        </table>
                    </div>
                </p>
            </details>
            <hr />


            <details>
                <summary id='Metall'>Металл</summary>
                <p>
                    <div className='border' id='Metall'>
                        <table align='center' className='table_of_mk'><tbody>
                            <tr>
                                <td><table align="center" border="1">
                                    <thead>

                                        <tr>

                                            <th>Код</th>
                                            <th>Описание</th>
                                            <th>Пример</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>20 pap (pcb)</td>
                                            <td>Гофрированный картон</td>
                                            <td>Коробки от бытовой техники, продуктов, косметики</td>
                                        </tr>

                                        <tr>
                                            <td>21 pap</td>
                                            <td>Прочий картон</td>
                                            <td>Открытки, обложки книг, короб-упаковка</td>
                                        </tr>

                                        <tr>
                                            <td>22 pap</td>
                                            <td>Бумага</td>
                                            <td>Журналы и газеты, конверты, бумажные пакеты, бумага для печати</td>
                                        </tr>

                                        <tr>
                                            <td>23 pbd (ppb)</td>
                                            <td>Вощёная бумага</td>
                                            <td>Упаковка дляпочтовыхотправлений или для декора букетов</td>
                                        </tr>
                                    </tbody>
                                </table></td>
                            </tr></tbody>
                        </table>
                    </div>
                </p>
            </details>
            <hr />

            <details>
                <summary id='Other'>Другое</summary>
                <p>
                    <div className='border' id='Other'>
                        <table align='center' className='table_of_mk'><tbody>
                            <tr>
                                <td><table align="center" border="1">
                                    <thead>

                                        <tr>

                                            <th>Код</th>
                                            <th>Описание</th>
                                            <th>Пример</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>20 pap (pcb)</td>
                                            <td>Гофрированный картон</td>
                                            <td>Коробки от бытовой техники, продуктов, косметики</td>
                                        </tr>

                                        <tr>
                                            <td>21 pap</td>
                                            <td>Прочий картон</td>
                                            <td>Открытки, обложки книг, короб-упаковка</td>
                                        </tr>

                                        <tr>
                                            <td>22 pap</td>
                                            <td>Бумага</td>
                                            <td>Журналы и газеты, конверты, бумажные пакеты, бумага для печати</td>
                                        </tr>

                                        <tr>
                                            <td>23 pbd (ppb)</td>
                                            <td>Вощёная бумага</td>
                                            <td>Упаковка дляпочтовыхотправлений или для декора букетов</td>
                                        </tr>
                                    </tbody>
                                </table></td>
                            </tr></tbody>
                        </table>
                    </div>
                </p>
            </details>
            <hr />



        </>
    )
}

export default Markings;