import React from 'react';

function PDK() {

    return (
        <>
            <table>
                <tr>
                    <td>Градации</td>
                    <td>Загрязнение атмосферного воздуха</td>
                    <td>Показатели</td>
                    <td>Оценка за месяц</td>
                </tr>
                <tr>
                    <td>I</td>
                    <td>Низкое</td>
                    <td>СИ</td>
                    <td>0-1</td>
                </tr>
                <tr>
                    <td>II</td>
                    <td>Повышенное</td>
                    <td>СИ</td>
                    <td>2-4</td>
                </tr>
                <tr>
                    <td>III</td>
                    <td>Высокое</td>
                    <td>СИ</td>
                    <td>5-10</td>
                </tr>
                <tr>
                    <td>IV</td>
                    <td>Очень высокое</td>
                    <td>СИ</td>
                    <td>›10</td>
                </tr>
            </table>
        </>
    )
}

export default PDK;