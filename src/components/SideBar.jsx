import React from 'react';
import s from "../App.module.css";
import {Dropdown, Menu} from "antd";
import CustomMenu from "./CustomMenu";


const SideBar = (props) => {
    return <div className={s.nav}>
    <div className={props.active && props.width < 1150 ? s.nav : s.navActive}>
        <div className={s.company}>
            <div className={s.logo}>
            </div>
            <div className={s.name}>Flimcor</div>
        </div>
        <div className={s.headerMainSidebar}>
            <div className={s.profile}>
                <div className={s.profileImg}></div>
                <div className={s.headerSurname}>Ольга Пліщук</div>
            </div>
            <div className={s.dropMenu}><Dropdown overlay={<Menu>
                <div className={s.menu}>
                    <CustomMenu values={props.values}/>
                </div>
            </Menu>}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <div className={s.dropMenuItems}>
                        <div className={s.headerPrice}><span className={s.greenBg}>1 265 $</span></div>
                        <div className={s.headerDollar}></div>
                    </div>
                </a>
            </Dropdown></div>
        </div>
        <div className={s.listsMenu}>
            <div>
                <div className={s.list1}></div>
                <div className={s.listName}>Каталог</div>
            </div>
            <div>
                <div className={s.list2}></div>
                <div className={s.listName}>Заказы</div>
            </div>
            <div className={s.lineHeight}>
                <div className={s.list3}></div>
                <div className={s.listName}>Заказы пользователей</div>
            </div>
            <div>
                <div className={s.list4}></div>
                <div className={s.listName}>Пользователи</div>
            </div>
            <div>
                <div className={s.list5}></div>
                <div className={s.listName}>Поставщики</div>
            </div>
            <div>
                <div className={s.list6}></div>
                <div className={s.listName}>Финансы</div>
            </div>
        </div>
    </div>
    </div>
}

export default SideBar;
