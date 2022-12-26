import React from 'react';
import marking from '../styles/markings.css'

function Markings() {

    return (
        <>

            <details>
                <summary id='Paper'>Бумага</summary>
                <p>
                    <div className='border' id='Paper'>
                        <table align='center' className='table_of_mk' ><tbody>
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

                                        <tr className='delete_divider'>
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
                        <table align='center' className='table_of_mk' ><tbody>
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

                                        <tr className='delete_divider'>
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
                        <table align='center' className='table_of_mk' >
                            <tr>
                                <td><table border={1}>
                                    <thead>

                                        <tr>

                                            <th>Код</th>
                                            <th>Описание</th>
                                            <th>Пример</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>70 gl</td>
                                            <td>Бесцветное стекло</td>
                                            <td>Прозрачное стекло</td>
                                        </tr>

                                        <tr>
                                            <td>71 gl</td>
                                            <td>Зелёное стекло</td>
                                            <td>Используется в производстве бутылок</td>
                                        </tr>

                                        <tr>
                                            <td>72 gl</td>
                                            <td>Коричневое стекло</td>
                                            <td>Используется в производстве бутылоки баночек для эфирных масел</td>
                                        </tr>

                                        <tr>
                                            <td>73 gl</td>
                                            <td>Бутылочное стекло тёмно-коричневое</td>
                                            <td>Используется в производстве бутылок</td>
                                        </tr>

                                        <tr>
                                            <td>74 gl</td>
                                            <td>Бутылочное стекло светло-коричневое</td>
                                            <td>Используется в производстве бутылок</td>
                                        </tr>

                                        <tr>
                                            <td>75 gl</td>
                                            <td>Стекло с малым содержанием свинца</td>
                                            <td>Используется в современных телевизорах и электронных приборах</td>
                                        </tr>

                                        <tr>
                                            <td>76 gl</td>
                                            <td>Хрусталь</td>
                                            <td>Используется в хрустальной посуде</td>
                                        </tr>

                                        <tr>
                                            <td>77 gl</td>
                                            <td>Стекло, покрытое медью</td>
                                            <td>Используется в электронике, часах</td>
                                        </tr>

                                        <tr>
                                            <td>78 gl</td>
                                            <td>Стекло, покрытое серебром</td>
                                            <td>Используется в зеркале, посуде для сервировки</td>
                                        </tr>

                                        <tr className='delete_divider'>
                                            <td>79 gl</td>
                                            <td>Позолоченное стекло</td>
                                            <td>Используется в посуде для сервировки</td>
                                        </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                        </table>
                    </div>
                </p>
            </details>
            <hr />


            <details>
                <summary id='Metall'>Металл</summary>
                <p>
                    <div className='border' id='Metall'>
                        <table align='center' className='table_of_mk'>
                            <tr>
                                <td><table border={1}>
                                    <thead>

                                        <tr>

                                            <th>Код</th>
                                            <th>Описание</th>
                                            <th>Пример</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>40 fe</td>
                                            <td>Сталь</td>
                                            <td>Банки из-подсгущённого молока, кофе, консервов, некоторых марок пива</td>
                                        </tr>

                                        <tr className='delete_divider'>
                                            <td>41 alu</td>
                                            <td>Алюминий</td>
                                            <td>Алюминиевые банки, тюбики для крема</td>
                                        </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                        </table>
                    </div>
                </p>
            </details>
            <hr />

            <details>
                <summary id='Other'>Другое</summary>
                <p>
                    <div className='border' id='Other'>
                        <table align='center' className='table_of_mk'>
                            <tr>
                                <td><table border={1}>
                                    <thead>

                                        <tr>

                                            <th>Код</th>
                                            <th>Описание</th>
                                            <th>Пример</th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>8 lead</td>
                                            <td>Свинцово-кислотный аккумулятор</td>
                                            <td>Автомобильные аккумуляторы</td>
                                        </tr>

                                        <tr>
                                            <td>10 nicd</td>
                                            <td>Никель-кадмиевый аккумулятор</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>11 nimh</td>
                                            <td>Никель-металл-гидридный аккумулятор</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>12 li</td>
                                            <td>Литиевый элемент</td>
                                            <td>Батареи мобильных телефонов, переносные зарядные устройства</td>
                                        </tr>

                                        <tr>
                                            <td>13 so(z)</td>
                                            <td>Серебряно-цинковый аккумулятор</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>14 cz</td>
                                            <td>Марганцево-цинковый элемент</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>80</td>
                                            <td>Бумага (картон) / различные материалы</td>
                                            <td>Упаковка от бургеров</td>
                                        </tr>

                                        <tr>
                                            <td>81</td>
                                            <td>Бумага (картон) / пластик</td>
                                            <td>Упаковки для кондитерских изделий, упаковка некоторых видов молока (тетрапак)</td>
                                        </tr>

                                        <tr>
                                            <td>82</td>
                                            <td>Бумага (картон) / алюминий</td>
                                            <td>Упаковка— картонный тубус, покрытый алюминий-содержащей плёнкой</td>
                                        </tr>

                                        <tr>
                                            <td>83</td>
                                            <td>Бумага (картон) / белая жесть</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>84</td>
                                            <td>Бумага (картон) / пластик / алюминий</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>85</td>
                                            <td>Бумага (картон) / пластик / алюминий / жесть</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>87</td>
                                            <td>Биоразлагаемый пластик</td>
                                            <td>Используется для ламината, закладки, визитки, флаеры, листовки</td>
                                        </tr>

                                        <tr>
                                            <td>90</td>
                                            <td>Пластик / алюминий</td>
                                            <td>Антистатические пакеты, упаковка еды быстрого приготовления, металлизированные пакеты, пробки с пластмассовой втулкой-вкладышем</td>
                                        </tr>

                                        <tr>
                                            <td>91</td>
                                            <td>Пластик / белая жесть</td>
                                            <td>Крышка баночек — основа из жести, изнутри покрытая пластиком, обеспечивающим герметизацию</td>
                                        </tr>

                                        <tr>
                                            <td>92</td>
                                            <td>Пластик / различные металлы</td>
                                            <td>Упаковка</td>
                                        </tr>

                                        <tr>
                                            <td>95</td>
                                            <td>Стекло / пластик</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>96</td>
                                            <td>Стекло / алюминий</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td>97 c/gl</td>
                                            <td>Стекло / белая жесть</td>
                                            <td></td>
                                        </tr>

                                        <tr className='delete_divider'>
                                            <td>98 c/gl</td>
                                            <td>Стекло / различные металлы</td>
                                            <td>Банка из-подрастворимого кофе с крышкой-клапаном, содержащей фольгу</td>
                                        </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                        </table>
                    </div>
                </p>
            </details>
            <hr />



        </>
    )
}

export default Markings;