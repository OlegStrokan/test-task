import React from 'react';
import s from "../App.module.css";

const Nav = (props) => {
    return <div className={props.active && props.width < 1150 ? s.nav : s.navActive}>
        <div className={s.company}>
            <div className={s.logo}>
            </div>
            <div className={s.name}>Flimcor</div>
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
}

const NavActive = (props) => {

}

const SideBar = (props) => {

    return <Nav {...props}/>
}

export default SideBar;
