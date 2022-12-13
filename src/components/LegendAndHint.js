import React from 'react';

function LegendAndHint() {

    function showPromt() {
        let promtElem = document.querySelector('#promtDiv');
        promtElem.classList.toggle('hide', false);
      }
    
      function closePromt() {
        let promtElem = document.querySelector('#promtDiv');
        promtElem.classList.toggle('hide', true);
      }

    return (
        <>
            <div class='legend'>
                <div id='siScaleDiv'>
                    <center><table>
                        <tr><th valign='center'>Загрязнение<br />атмосферы</th><th valign='center'>Стандартный<br />индекс (СИ)</th><th><img id='promtImg' onclick={showPromt} src={require('../assets/images/question.png')} /></th></tr>
                        <tr><td className='colorTd' bgcolor='#00ff00'>низкое</td><td colspan='2' align='center'><table><tr><td align='right' className='valTd'>0</td><td className='valTd' align='center'>-</td><td className='valTd' align='left'>1</td></tr></table></td></tr>
                        <tr><td className='colorTd' bgcolor='#ffff00'>повышенное</td><td colspan='2' align='center'><table><tr><td align='right' className='valTd'>2</td><td align='center' className='valTd'>-</td><td align='left' className='valTd'>4</td><td></td></tr></table></td></tr>
                        <tr><td className='colorTd' bgcolor='#EC8A30'>высокое</td><td colspan='2' align='center'><table><tr><td align='right' className='valTd'>5</td><td align='center' className='valTd'>-</td><td align='left' className='valTd'>10</td><td></td></tr></table></td></tr>
                        <tr><td className='colorTd' bgcolor='#ff0000'>очень высокое</td><td colspan='2' align='center'><table><tr><td className='valTd'></td><td align='center' className='valTd'>&gt;</td><td align='left' className='valTd'>10</td><td></td></tr></table></td></tr>
                        <tr><td className='colorTd' style={{ border: 'none !important', padding: 0 }}><div style={{ backgroundColor: '#c8c8c8', border: '1px solid #000000' }}><div style={{ padding: 2 }}>недостаточно<br />данных</div></div></td><td></td></tr>
                    </table></center>
                </div>
            </div>
            <div id='promtDiv' className='hide'>
                <table><tr><td valign='center'>
                    <div id='promtText'>
                        <p>Степень загрязнения атмосферного воздуха оценивается при сравнении фактических концентраций с ПДК.</p>
                        <p>ПДК – предельно допустимая концентрация примеси для населенных мест, устанавливаемая Главным санитарным врачом РФ (СанПиН 1.2.3685-21). Измеряется в мг/м3 или мкг/м3.</p>
                        <p>ПДК м.р. – предельно допустимая максимально разовая концентрация, предотвращающая раздражающее действие, рефлекторные реакции, запахи при воздействии до 20-30 минут.</p>
                        <p>ПДК с.с – предельно допустимая среднесуточная концентрация, обеспечивающая допустимые (приемлемые) уровни риска при воздействии не менее 24 часов.</p>
                        <p>Разовые концентрации сравниваются с ПДК м.р., среднесуточные – с  ПДК с.с.</p>
                        <p style={{ paddingBottom: 0 }}>Для информирования населения о ежедневном состоянии загрязнения атмосферного воздуха используется <b>стандартный индекс (СИ)</b>, который определяется, как наибольшая измеренная разовая концентрация примеси на посту наблюдения за сутки, деленная на ПДК м.р. (РД 52.04.667-2005)</p>
                    </div></td><td valign='top'><img id='closePromtBut' onClick={closePromt} src={require('../assets/images/closeBut.png')} /></td></tr>
                </table>
            </div>
        </>
    )
}

export default LegendAndHint;