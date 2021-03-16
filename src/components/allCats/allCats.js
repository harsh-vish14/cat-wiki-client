import { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import {BsArrowRight} from 'react-icons/all'
import './allCats.css'
import { DataContext } from "../../context/context";
import Loading from "../loading/loading";
const All_Cats = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useContext(DataContext).data
    const fetchingData = () => {
        console.log('loading')
        setIsLoading(true)
        fetch('http://localhost:8000/breeds')
            .then((res) => res.json())
            .then(async (json) => {
                setData(json);
                console.log('Done loading')
                setIsLoading(false);
            })
    }
    useEffect(() => {
        fetchingData()
    }, []);


    const [filtering, setFiltering] = useState([])
    useEffect(() => {
        //  {...data[i]['image']}.url
        var finalData = []
        for (let i = 0; i < data.length; i++) {
            finalData.push({
                name: data[i].name,
                image: { ...data[i]['image'] }.url,
                description: data[i].description,
                temperament: data[i].temperament
            })
        }
        setFiltering(finalData)
    }, [data]);
    return (
        <div className='cats'>
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <>

                        <div className='allcats-title'>
                            66+ Breeds For you to discover
            </div>
                        {
                            filtering ? (
                                filtering.map((item) => {
                                    return (
                                        <div className='box' key={item.name}>
                                            <div id='cat-image'>
                                                <img src={item.image} />
                                            </div>
                                            <div className='content'>
                                                <div className='title'>
                                                    {
                                                        item.name
                                                    }
                                                </div>
                                                <div className='descriptions'>
                                                    {
                                                        item.description
                                                    }
                                                </div>
                                                <div className='temperament'>
                                                    Temperament: {item.temperament}
                                                </div>
                                                <div className='link'>
                                                    <Link style={{ textDecoration: 'none', color: '#1b1717' }} to={`/cat-info/${item.name}`} >
                                                        <div className='see-more' style={{ display: 'flex' }}>
                                                            SEE MORE <BsArrowRight style={{ marginLeft: '5px' }} />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div>
                                    Loading .....
                                </div>
                            )
                        }
            
                    </>
                )
            }
            
        </div>
    );
};
export default All_Cats