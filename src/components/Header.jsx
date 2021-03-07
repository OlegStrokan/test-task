import {React} from 'react'
import s from "../App.module.css";
import {DownOutlined, LeftOutlined} from "@ant-design/icons";
import {Dropdown, Menu} from "antd";
import CustomMenu from "./CustomMenu";

const Header = (props) => {

    return  <div className={s.header}>
        <div className={s.headerLeft}>
            {props.sidebarActive === true &&
            <div className={s.burgerBtn} onClick={() => {
                props.setSidebarActive(!props.sidebarActive)
            }}>
                <span/>
                <span/>
                <span/>
            </div>}
            {props.sidebarActive === false &&
            <div className={s.burgerBtnBack} onClick={() =>{props.setSidebarActive(!props.sidebarActive)}}>
                <span className={s.burgerClose}><span>Меню</span></span>
            </div>
            }
            <div className={s.back}><LeftOutlined/> Назад</div></div>
        <div className={s.headerMain}>
            <div className={s.dropMenu}><Dropdown overlay={<Menu>
                <div className={s.menu}>
                    <CustomMenu values={props.values}/>
                </div>
            </Menu>}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <div className={s.dropMenuItems}>
                        <div className={s.headerPrice}>1 265 $</div>
                        <div className={s.headerDollar}></div>
                    </div>
                </a>
            </Dropdown></div>
            <div className={s.profileImg}></div>
            <DownOutlined/>
            <div>
            </div>
        </div>
    </div>
}

export default Header