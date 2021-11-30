import React from 'react';

export default function MenuTable(props){
    const {colorWeight,sugarWeight,colorPrice,sugarPrice,filmPetPrice} = props;
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
            <p className="sugar-color-price">مجموع پودر و رنگ : <span>{(colorPrice + sugarPrice).toLocaleString()}</span></p>
        </React.Fragment>
    );
}