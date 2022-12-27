import React from 'react';
import { ClickAwayListener } from '@mui/material';

function LegendAndHint(props) {

    return (
        <>
            <ClickAwayListener onClickAway={() => { props.updateIsActive() }}>
                <div className={`legend${!props.isActive ? ' hide' : ''}`}>
                    <div id='siScaleDiv'>
                        <center><table>
                            <tr><th valign='center'>Загрязнение<br />атмосферы</th><th valign='center'>Стандартный<br />индекс (СИ)</th><th><img id='promtImg'/></th></tr>
                            <tr><td className='colorTd' bgcolor='#00ff00'>низкое</td><td colspan='2' align='center'><table><tr><td align='right' className='valTd'>0</td><td className='valTd' align='center'>-</td><td className='valTd' align='left'>1</td></tr></table></td></tr>
                            <tr><td className='colorTd' bgcolor='#ffff00'>повышенное</td><td colspan='2' align='center'><table><tr><td align='right' className='valTd'>2</td><td align='center' className='valTd'>-</td><td align='left' className='valTd'>4</td><td></td></tr></table></td></tr>
                            <tr><td className='colorTd' bgcolor='#EC8A30'>высокое</td><td colspan='2' align='center'><table><tr><td align='right' className='valTd'>5</td><td align='center' className='valTd'>-</td><td align='left' className='valTd'>10</td><td></td></tr></table></td></tr>
                            <tr><td className='colorTd' bgcolor='#ff0000'>очень высокое</td><td colspan='2' align='center'><table><tr><td className='valTd'></td><td align='center' className='valTd'>&gt;</td><td align='left' className='valTd'>10</td><td></td></tr></table></td></tr>
                            <tr><td className='colorTd' style={{ border: 'none !important', padding: 0 }}><div style={{ backgroundColor: '#c8c8c8', border: '1px solid #000000' }}><div style={{ padding: 2 }}>недостаточно<br />данных</div></div></td><td></td></tr>
                        </table></center>
                    </div>
                </div>
            </ClickAwayListener>
        </>
    )
}

export default LegendAndHint;