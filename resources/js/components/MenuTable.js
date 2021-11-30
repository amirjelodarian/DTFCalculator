import React, { useState } from 'react';

export default function MenuTable(props){
    const {colorWeight,sugarWeight,colorPrice,sugarPrice,filmPetPrice} = props;
    const [count ,setCount] = useState(colorPrice + sugarPrice);
    const handleCount = (e) => {
        setCount(e.target.value * (colorPrice + sugarPrice))
    }
    return(
        <React.Fragment>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>وزن رنگ</th>
                        <th>وزن پودر</th>
                        <th>قیمت رنگ</th>
                        <th>قیمت پودر</th>
                        <th>قیمت رول</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{colorWeight} cc</td>
                        <td>{sugarWeight} gr</td>
                        <td>{colorPrice.toLocaleString()} تومان</td>
                        <td>{sugarPrice.toLocaleString()} تومان</td>
                        <td>{filmPetPrice.toLocaleString()} تومان</td>
                    </tr>
                </tbody>
            </table>
            <p className="sugar-color-price">مجموع پودر و رنگ واحد‌ : <span>{(colorPrice + sugarPrice).toLocaleString()}</span></p>
            <hr/>
            <input className="form-control" placeholder="تعداد" onKeyUp={ (e) => handleCount(e) }  />
            <p className="sugar-color-price" style={{ marginTop: '10px' }}> مجموع پودر و رنگ کل : <span style={{ color: 'greenyellow' }}>{count.toLocaleString()}</span></p>

            
        </React.Fragment>
    );
}