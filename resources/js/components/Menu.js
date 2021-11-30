import axios from 'axios';
import { data } from 'jquery';
import React, { useState } from 'react';
import MenuTable from './MenuTable';

export default function Menu(props){
    const [filmPetPrice,setFilmPetPrice] = useState(props.film_pet_price);
    const [colorPrice,setColorPrice] = useState(props.color_price);
    const [sugarPrice,setSugarPrice] = useState(props.sugar_price);
    const [menuShowResult,setMenuShowResult] = useState(true);
    const [firstItem,setFirstItem] = useState(0);
    const [secondItem,setSecondItem] = useState(0);
    const [area,setArea] = useState(0);

    const [colorPriceResult,setColorPriceResult] = useState(0);
    const [sugarPriceResult,setSugarPriceResult] = useState(0);
    const [colorWeightResult,setColorWeightResult] = useState(0);
    const [sugarWeightResult,setSugarWeightResult] = useState(0);
    const [filmPetPriceResult,setFilmPetPriceResult] = useState(0);


    const colorBase = 0.001875;
    const sugarBase = 0.0093125;
    
    const menuHandleClick = () => {
        if(menuShowResult == false){}
            setMenuShowResult(true)
        if(menuShowResult == true)
            setMenuShowResult(false)
        showOrhideMenu();
    }

    const showOrhideMenu = () => {
        if(menuShowResult == true)
            document.querySelector('.menu-wrapper').style.display = "block";
        
        if(menuShowResult == false)
            document.querySelector('.menu-wrapper').style.display = "none";
    }
    const handleButton = () => {
        axios.post('store', 
            {
                film_pet_price: filmPetPrice,
                color_price: colorPrice,
                sugar_price: sugarPrice,
            }).then(function(response) {
                document.querySelector('.messages').innerHTML = response.data;     
            })
            .catch((error) => {
                let txt = "";
                for (let x in error.response.data.errors)
                  txt += error.response.data.errors[x] + "<br />";
                
                document.querySelector('.messages').innerHTML = txt;
            })
    }

    const handleOption = (e) => {
        if(e.target.value == "inxin"){
            document.getElementById('area').style.display = "none";
            document.getElementById('inxin').style.display = "block";
        }
        if(e.target.value == "area"){
            document.getElementById('inxin').style.display = "none";
            document.getElementById('area').style.display = "block";
        }
    }
    const handleResultSubmit = (value) => {
        

        let myColorWeight = (value) * colorBase;
        // CMYK + W  = 0.001875 cc
        setColorWeightResult(myColorWeight);


        let mySugarWeight = (value) * sugarBase;
        // Sugar - 0.0093125 gr
        setSugarWeightResult(mySugarWeight);
        

        let myColorPrice = ((myColorWeight * colorPrice) / 1000);
        // Color Weight * today price / 1000cc
        setColorPriceResult(myColorPrice);


        let mySugarPrice = ((mySugarWeight * sugarPrice) / 1000);
        // Sugar Weight * today price / 1000gr
        setSugarPriceResult(mySugarPrice);

        // 100m convert to cm => * width 60 cm == cm2
        let myFilmPetPrice = (value) * (filmPetPrice / ((100 * 100) * 60));
        setFilmPetPriceResult(myFilmPetPrice);


    }
    
    return(
        <div className="menu">
            <div className="menu-icons" onClick={menuHandleClick}>
                <i className="icon-cogs"></i>
                <i className="icon-down-1"></i>
                <div className="messages text-warning"></div>
            </div>
            <ul className="menu-wrapper">
                <li>
                    <label for="filmPetPrice">قیمت رول</label><br />
                    <input className="form-control" type="text" placeholder="100m" name="filmPetPrice" id="filmPetPrice" onChange={ e => setFilmPetPrice(e.target.value) } value={filmPetPrice.toLocaleString()} />
                </li>
                <li>
                    <label for="colorPrice">قیمت رنگ</label><br />
                    <input className="form-control" type="text" placeholder="1000cc" name="colorPrice" id="colorPrice" onChange={ e => setColorPrice(e.target.value) } value={colorPrice.toLocaleString()} />
                </li>
                <li>
                    <label for="sugarPrice">قیمت شکری</label><br />
                    <input className="form-control" type="text" placeholder="1Kg" name="sugarPrice" id="sugarPrice" onChange={ e => setSugarPrice(e.target.value) } value={sugarPrice.toLocaleString()} />
                </li>
                <br />
                <button className="btn btn-primary" onClick={handleButton}>ذخیره</button>
            </ul>
            <hr />
            <div className="result">
                <div className="areas-options">
                    <select className="form-control" onChange={e => handleOption(e)}>
                        <option value="inxin">چند در چند</option>
                        <option value="area">مساحت</option>
                    </select>
                </div>
                <div id="inxin">
                    <h5>چند در چند (سانتی متر)</h5>
                    <input className="form-control" type="text" placeholder="1cm" onChange={ e => setFirstItem(e.target.value) } value={firstItem} />
                    <i>&nbsp;X&nbsp;</i>
                    <input className="form-control" type="text" placeholder="2cm" onChange={ e => setSecondItem(e.target.value) } value={secondItem} />
                    <div className="calculate-btn">
                        <button className="btn btn-primary" onClick={() => handleResultSubmit((firstItem * secondItem))}>محاسبه</button>
                    </div>
                </div>

                <div id="area">
                    <h5>مساحت</h5>
                    <input className="form-control" type="text" placeholder="2cm" onChange={ e => setArea(e.target.value) } value={area} />
                    <div className="calculate-btn">
                        <button className="btn btn-primary" onClick={() => handleResultSubmit(area)}>محاسبه</button>
                    </div>
                </div>
                
                <hr />
                <MenuTable colorWeight={colorWeightResult} sugarWeight={sugarWeightResult} filmPetPrice={filmPetPriceResult} colorPrice={colorPriceResult} sugarPrice={sugarPriceResult} />
            </div>
        </div>
    );
}