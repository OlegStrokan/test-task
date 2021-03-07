import {React, useState} from 'react'
import s from "../App.module.css";
import {RightOutlined} from "@ant-design/icons";

 const CustomMenu = (props) => {
     let [activeItem, setActiveItem] = useState(null)
     let [activeCheck, setActiveCheck] = useState(null)

    return <>
        <div className={s.menuTop} {...props}>
            <a target="_blank" rel="noopener noreferrer" href="#">
                <span className={s.myFinance}>Мої фінанси <RightOutlined className={s.RightOutlined}/></span>
            </a>
            <div className={s.menuTopFinance}><span className={s.dollar}>$</span> 854.1</div>
        </div>
        <hr className={s.hr}/>
        <div key="2" className={s.menuBottom} {...props}>
            <div className={s.menuDescription}>
                <div>Основна валюта</div>
                <div className={s.info}></div>
            </div>
            <ul>
                {props.values.map((value,index) => {
                    return <div className={activeItem === index ? s.aboutValueActive : undefined}
                                onClick={() => {
                                    setActiveCheck(index)
                                    setActiveItem(index)}}
                    ><div className={s.aboutValue}><input className={s.checkbox} type="checkbox"/>
                        <span className={s.borderValue}><span>{value.badge}</span></span> {value.code} {value.value}</div></div>})}
            </ul>
        </div>
    </>
}

export default CustomMenu