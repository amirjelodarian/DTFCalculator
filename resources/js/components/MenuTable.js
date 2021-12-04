import React, { useState } from 'react';

export default function MenuTable(props){
    const {colorWeight,sugarWeight,colorPrice,sugarPrice,filmPetPrice} = props;
    const [count ,setCount] = useState(colorPrice + sugarPrice);
    const handleCount = (e) => {
        setCount(e.target.value * (colorPrice + sugarPrice))
    }
    return(
        <React.Fragment>
            <div className="grid-table-wrapper">
                <div className="grid-table grid-table-title">وزن رنگ</div>
                <div className="grid-table grid-table-answer">{colorWeight} cc</div>
                <div className="grid-table grid-table-title">وزن پودر</div>
                <div className="grid-table grid-table-answer">{sugarWeight} gr</div>
                <div className="grid-table grid-table-title">قیمت رنگ</div>
                <div className="grid-table grid-table-answer">{colorPrice.toLocaleString()} تومان</div>
                <div className="grid-table grid-table-title">قیمت پودر</div>
                <div className="grid-table grid-table-answer">{sugarPrice.toLocaleString()} تومان</div>
                <div className="grid-table grid-table-title">قیمت رول</div>
                <div className="grid-table grid-table-answer">{filmPetPrice.toLocaleString()} تومان</div>
            </div>
            
            <p className="sugar-color-price">مجموع پودر و رنگ واحد‌ : <span>{(colorPrice + sugarPrice).toLocaleString()}</span></p>
            <hr/>
            <input className="form-control" placeholder="تعداد" onKeyUp={ (e) => handleCount(e) }  />
            <p className="sugar-color-price" style={{ marginTop: '10px' }}> مجموع پودر و رنگ کل : <span style={{ color: 'greenyellow' }}>{count.toLocaleString()}</span></p>

            
        </React.Fragment>
    );
}