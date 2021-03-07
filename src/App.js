import s from './App.module.css';
import 'antd/dist/antd.css';
import {React, useState, useEffect} from 'react'
import { InputNumber} from 'antd';
import { LeftOutlined} from "@ant-design/icons";
import {DownOutlined, RightOutlined} from "@ant-design/icons";
import { Menu, Dropdown } from 'antd';
import {useQuery} from "@apollo/client";
import {GET_CURRENCIES} from "./query/values";
import SideBar from "./components/SideBar";
import _debounce from 'lodash.debounce'

let myData = require('./myData.json');
let newData = myData.myData

export const CustomMenu = (props) => {

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

const App = () => {
    const [inputValue, setInputValue] = useState([])
    useEffect(() => {
        setInputValue(inputValue)
    },[inputValue])

    const purchasePrice = 175.5
    const totalPrice = purchasePrice * inputValue

    const [values, setValues] = useState([])
    const {data, loading, error} = useQuery(GET_CURRENCIES)

    useEffect(() => {
        if (!loading) {
            setValues(data.currencies)
        }
    }, [data])

    let [width, setWidth] = useState([window.innerWidth])
    useEffect(() => {
        const handleResize = _debounce(() => setWidth(window.innerWidth))

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    let [sidebarActive, setSidebarActive] = useState(true)


    return <div className={s.wrapper}>
            <div className={s.nav}>
              <SideBar values={values} active={sidebarActive} setSidebarActive={setSidebarActive}  width={width}/>
            </div>
                <div className={s.header}>
                    <div className={s.headerLeft}>
                        {s.nav &&
                            <div className={s.burgerBtn} onClick={() => {
                                setSidebarActive(!sidebarActive)
                            }}>
                                <span/>
                                <span/>
                                <span/>
                            </div>}
                        {s.navActive &&
                            <div className={s.burgerBtnBack} onClick={() =>{setSidebarActive(!sidebarActive)}}>
                            <span className={s.burgerClose}><span>Меню</span></span>
                            </div>
                        }
                    <div className={s.back}><LeftOutlined/> Назад</div></div>
                    <div className={s.headerMain}>
                        <div className={s.dropMenu}><Dropdown overlay={<Menu>
                            <div className={s.menu}>
                                <CustomMenu values={values}/>
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
        <div className={s.content}>
            <div className={s.orderBottom2}>
                <div className={s.total}>
                    <div className={s.totalPrice}>{totalPrice} ₴</div>
                        <div>
                    <button className={s.editPriceButton}
                            onClick={() => { return inputValue < 1 ? undefined : setInputValue(inputValue - 1)
                            }}>-</button>
                    <InputNumber className={s.input}
                                 size={'large'} min={1} max={10}
                                 value={inputValue}
                                 onChange={setInputValue}/>
                    <button className={s.editPriceButton}
                            onClick={() => { return inputValue > 9 ? undefined : setInputValue(inputValue + 1)
                            }}>+</button>
                    <button className={s.priceButton}>
                        <div className={s.buy}></div>
                    </button>
                </div>
                </div>
        </div>
            <div className={s.productsImg}></div>
            <div className={s.description}>
                <h3>Характеристики <span className={s.goodsHide}>товару</span></h3>
                <div className={s.descriptionList}>
                    <table className={s.table}>
                        <tr>
                            <td className={s.thin}>Категорії</td>
                            <td className={s.bold}>{newData.kategorii}</td>
                        </tr>
                        <tr>
                            <td className={s.thin}>Матеріали</td>
                            <td className={s.bold}>{newData.materialy}</td>
                        </tr>
                        <tr>
                            <td className={s.thin}>Бренд</td>
                            <td className={s.bold}>{newData.brend}</td>
                        </tr>
                        <tr>
                            <td className={s.thin}>Область приминения</td>
                            <td className={s.bold}>{newData.oblastPrimineniya}</td>
                        </tr>
                        <tr>
                            <td className={s.thin}>Обьем (М<sup>2</sup>)</td>
                            <td className={s.bold}>{newData.obyom}</td>
                        </tr>
                        <tr>
                            <td className={s.thin}>Вага (кг)</td>
                            <td className={s.bold}>{newData.vaga}</td>
                        </tr>
                        <tr>
                            <td className={s.thin}>Час доставки (днів)</td>
                            <td className={s.bold}>{newData.chasDostavky}</td>
                        </tr>
                        <tr>
                            <td className={s.thin}>Сезон</td>
                            <td className={s.bold}>{newData.sezon}</td>
                        </tr>
                        <tr>
                            <td className={s.thin}>Артикул</td>
                            <td className={s.bold}>{newData.artykul}</td>
                        </tr>
                        <tr>
                            <td className={s.thin}>Номер товару</td>
                            <td className={s.bold}>{newData.nomerTovaru}</td>
                        </tr>
                    </table>
                </div>
            </div>
                    <div className={s.aboutProduct}>
                        <div className={s.title}>{newData.aboutName}</div>
                        <div className={s.thin}>{newData.aboutSubtitle}pc(s)</div>
                        <div className={s.aboutTable}>
                            <div className={s.priceBlack}>
                                <div className={s.simpleText}>
                                    <div>Ціна закупки</div>
                                    <div className={s.info}></div>
                                </div>
                                {newData.aboutCenaZakupky}<span className={s.value}>₴</span></div>
                            <div className={s.priceBlack}>
                                <div className={s.simpleText}>
                                    <div>Ціна продажу</div>
                                    <div className={s.info}></div>
                                </div>
                                {newData.aboutCenaProdazhu}<span className={s.value}>₴</span></div>
                            <div className={s.profitability}>
                                <div className={s.simpleText}>
                                    <div>Рентабельність</div>
                                    <div className={s.info}></div>
                                </div>
                                {newData.aboutRentabelnist}
                            </div>
                        </div>
                        <div className={s.productsDescription}>
                            <p>
                                {newData.aboutDes1}
                            </p>
                            <p>
                                {newData.aboutDes2}
                            </p>
                            <div className={s.more}>Детальніше <DownOutlined/></div>
                            <hr/>
                        </div>
                    </div>
                    <div className={s.order}>
                        <div className={s.orderTop}>
                            <div><span className={s.thin}>Артикул:</span> {newData.descArticul}</div>
                            <div className={s.title}>{newData.aboutName}</div>
                            <div className={s.price}>{newData.aboutCenaZakupky} ₴</div>
                        </div>
                        <hr/>
                        <div className={s.orderCenter}>
                            <div><span className={s.thin}>Мінімальна кількість замовлення:</span><span
                                className={s.bold}> {newData.minZamovlennya} шт</span>
                            </div>
                            <div><span className={s.thin}>Час доставки:</span><span className={s.bold}> {newData.chasDostavky2} днів</span>
                            </div>
                            <div><span className={s.thin}>Розміщення товару:</span><span
                                className={s.bold}> {newData.location}</span>
                                <div className={s.ukraineFlag}></div>
                            </div>
                        </div>
                        <hr/>
                        <div className={s.orderBottom}>
                            <div>Сума
                                <div className={s.totalPrice}>{totalPrice} ₴</div>
                            </div>
                            <div>
                                Количество
                                <div className={s.total}>
                                    <InputNumber className={s.input}
                                                 size={'large'} min={1} max={10}
                                                 value={inputValue}
                                                 onChange={setInputValue}/>
                                    <button className={s.priceButton}>
                                        <div className={s.buy}></div>
                                        <div>Buy</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
}

export default App;
