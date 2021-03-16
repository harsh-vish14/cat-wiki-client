import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch, FaSadCry } from 'react-icons/all'
import { DataContext } from '../../context/context'
import './hero.css'
import Main from '../main/main'
import Loading from '../loading/loading'

const Hero = () => {
    const [data, setData] = useContext(DataContext).data;
    const [options, setOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [optionsData, setOptionsData] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [focusOn, setFocusOn] = useState(false);
    var datacame;
    const fetchingData = async () => {
        console.log('loading')
        setIsLoading(true)
        await fetch('http://localhost:8000/breeds')
            .then((res) => res.json())
            .then(async (json) => {
                setData(json);
                var came = json.map((data) => {
                    return data.name
                })
                // console.log(came);
                datacame = came
                
                setOptionsData(datacame);
                createOptions(datacame)
                console.log('Done loading')
                setIsLoading(false)
            })
    }

     useEffect(() => {
         fetchingData()
         console.log('use effect is running');
     }, [])
    
    const handelChanged = (e) => {
        const value = e.target.value
        setSearch(value);
        const finaldata = optionsData
        const results = optionsData.filter(person => person.toLowerCase().includes(e.target.value.toLocaleLowerCase()));
        if (e.target.value) {
            createOptions(results)
        } else {
            createOptions(finaldata);
        }
        
    }
    const createOptions = (data) => {
        
        setOptions(()=>
            data.map((item,i) => {
                return (
                    <div key={i} onMouseOver={setShowOptions(true) } >
                        <Link to={`/cat-info/${item}`} className='option' style={{textDecoration:'none',color:'black'}}>
                            {item}
                        </Link>
                    </div>
                )
            })
        )
    }
    
    const mouseon = () => {
        if (focusOn === true) {
            
            setShowOptions(true)
        }
    }
    
    const mouseleave = () => {
        if (focusOn === false) {
            setShowOptions(false);
        }
    }
    useEffect(() => {
        if (focusOn === false) {
            setShowOptions(false);
        }
    },[focusOn])
    return (
        
        <div className='hero'>
            {
                isLoading ? (
                    <Loading />
                    
                ) : (
                    <>
                        <div className='hero-image' style={{ background: `url(${process.env.PUBLIC_URL + 'images/HeroImagelg.png'})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                            <div className='hero-content'>
                                <img src={process.env.PUBLIC_URL + 'images/catlogo.svg'} alt="LOGO" />
                                <div className='subtitle'>
                                    Get to know more about your <br /> cat breed
                    </div>
                                <div className='search-container' onFocus={() => { setShowOptions(true); setFocusOn(true) }} onBlur={() => { setFocusOn(false) }}>
                                    <div className='search-bar'>
                                        <input type='text' placeholder='Enter your breed' onChange={handelChanged} value={search} />
                                        <AiOutlineSearch className='search-icon' />
                                    </div>
                                    <div className='options' style={{ display: showOptions ? ('block') : ('none'), zIndex: '1000000' }} onMouseOver={mouseon} onMouseLeave={mouseleave}>
                                        {
                                            isLoading ? (
                                                <div>loading....</div>
                                            ) : (
                                                options
                                            )
                                        }
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Main />
                    </>
                )
            }
            
        </div>
    );
}

export default Hero