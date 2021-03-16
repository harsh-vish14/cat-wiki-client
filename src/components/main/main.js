import { useContext, useEffect, useState } from "react";
import { DataContext } from '../../context/context'
import {BsArrowRight} from 'react-icons/all'
import './main.css'
import { Link } from "react-router-dom";
const Main = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [info, setinfo] = useState([]);
    const [data,setData] = useContext(DataContext).data
    useEffect(() => {

        // fetchingData()
        var topFour = []
        if (data.length != 0 && info.length == 0) {
            var indexused = []
            for (let i = 0; i < data.length; i++) {
                if (data[i]) {
                    var random_index = Math.floor(Math.random() * data.length)
                    if (!indexused.includes(random_index)) {
                        
                        indexused.push(random_index)
                        topFour.push(
                            {
                                name: data[random_index].name,
                                url: data[random_index].image.url
                            }
                        )
                        
                        if (topFour.length == 4) {
                            break;
                        }
                    }
                }
                setinfo(topFour)
            }
        }
        setIsLoading(true);
        // console.log(info)
    }, [data]);

    return (
        <div  className='main-container'>
            <div>
                <div className='title'>
                    Most Searched Breeds
                </div>
                <div className='second-title'>
                    66+ Breeds For you <br /> to discover
                    <Link style={{textDecoration:'none',color:'#1b1717'}} to='/All_cats' >
                        <div className='see-more' style={{opacity:'0.65'}} >
                        SEE MORE <BsArrowRight style={{marginLeft:'5px'}} />
                    </div>
                    </Link>
                </div>
            </div>
            <div className='main'>
                {
                    isLoading ? (
                        <>
                        {info.map((item) => {
                            return (
                                    <div className='box' key={item.name}>
                                <Link to={`/cat-info/${item.name}`} style={{ textDecoration: 'none', color: '#1b1717' }}>
                                    <div className='image' style={{
                                        background: `url(${item.url})`, backgroundRepeat: 'no-repeat',backgroundSize:'250px 250px'}}></div>
                                    
                                    <div className='main-text'>{item.name}</div>
                                </Link>
                                </div>
                            )
                        })}
                        </>
                    ) : (
                        <div>Loading</div>
                    )
                }
            </div>
        </div>
    );
}

export default Main;