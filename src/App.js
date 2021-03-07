import s from './App.module.css';
import 'antd/dist/antd.css';
import {React, useState, useEffect} from 'react'
import {useQuery} from "@apollo/client";
import {GET_CURRENCIES} from "./query/values";
import SideBar from "./components/SideBar";
import _debounce from 'lodash.debounce'
import Header from "./components/Header";
import Content from "./components/Content";

// json файл подключаем в компоненте Content.jsx

const App = () => {
    // основная логика
    const [inputValue, setInputValue] = useState([])
    useEffect(() => {
        setInputValue(inputValue)
    }, [inputValue])

    const purchasePrice = 175.5
    const totalPrice = purchasePrice * inputValue

    const [values, setValues] = useState([])
    const {data, loading} = useQuery(GET_CURRENCIES)

    useEffect(() => {
        if (!loading) {
            setValues(data.currencies)
        }
    }, [data])

    // узнать ширину страницы - lodash
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
        <SideBar values={values}
                 active={sidebarActive}
                 setSidebarActive={setSidebarActive
                 } width={width}/>
        <Header sidebarActive={sidebarActive}
                setSidebarActive={setSidebarActive}
                values={values}/>
        <Content inputValue={inputValue}
                 setInputValue={setInputValue}
                 sidebarActive={sidebarActive}
                 setSidebarActive={setSidebarActive}
                 totalPrice={totalPrice}/>
    </div>
}

export default App;
