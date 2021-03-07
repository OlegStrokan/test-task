import {React} from 'react'
import s from "../App.module.css";
import {InputNumber} from "antd";
import {DownOutlined} from "@ant-design/icons";

let myData = require('../myData.json');
let newData = myData.myData

const Content = (props) => {
    return <div className={s.content}>
        <div className={s.orderBottom2}>
            <div className={s.total}>
                <div className={s.totalPrice}>{props.totalPrice} ₴</div>
                <div>
                    <button className={s.editPriceButton}
                            onClick={() => { return props.inputValue < 1 ? undefined : props.setInputValue(props.inputValue - 1)
                            }}>-</button>
                    {props.sidebarActive === true &&
                    <InputNumber className={s.input}
                                 size={'large'} min={1} max={10}
                                 value={props.inputValue}
                                 onChange={props.setInputValue}/>}{props.sidebarActive === false && undefined}
                    <button className={s.editPriceButton}
                            onClick={() => { return props.inputValue > 9 ? undefined : props.setInputValue(props.inputValue + 1)
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
                    <div className={s.totalPrice}>{props.totalPrice} ₴</div>
                </div>
                <div>
                    Количество
                    <div className={s.total}>
                        <InputNumber className={s.input}
                                     size={'large'} min={1} max={10}
                                     value={props.inputValue}
                                     onChange={props.setInputValue}/>
                        <button className={s.priceButton}>
                            <div className={s.buy}></div>
                            <div>Buy</div>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Content