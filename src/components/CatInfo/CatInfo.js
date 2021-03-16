import {useEffect, useState} from 'react'
import Loading from '../loading/loading'
import './CatInfo.css'

const CatInfo = ({ match }) => {
    const {
        params: { name }
    } = match
    const [catinfo, setCatInfo] = useState([])
    const [images, getImages] = useState('');
    const [catImage, setCatImage] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const gettingCatInfo = async () => {
        setIsLoading(true)
        await fetch(`http://localhost:8000/catInfo/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setCatInfo(data[0]);
                fetch(`http://localhost:8000/images/${data[0].id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        var removeOne = []
                        if (data) {
                            getImages(data[0])
                            console.log(data[0])
                            setCatImage(data)
                        }
                    })
                setIsLoading(false);
            })
            
    }

    const createRating = (number = 0) => {
        var result =[]
        for (let i = 1; i <= 5; i++) {
            result.push(
                <div style={{ backgroundColor: number >= i?('#1b1717'):('#dddddd') }} className='rating-bars'></div>
            )
        }
        
        return (
            result
        )
    }
    
    useEffect(() => {
        if (catImage.length === 0) {
            gettingCatInfo()
        }
    },[catinfo])

    return (
        <div className='cats-info'>
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <div className="image-box">
                    
                                <img src={`${images}`} alt='cat' className='main-cat-image' />
                            </div>
                            <div className='cat-info-rating'>
                                <div style={{ fontSize: '30px', fontWeight: '700' }}>{name}</div>
                                <div style={{ fontSize: '20px', marginTop: '20px' }}>{catinfo.description}</div>
                                <div className='rating-info' style={{ marginTop: '50px' }}>
                                    <div style={{ marginBottom: '10px' }}><span>Temperament: </span> {catinfo.temperament}</div>
                                    <div style={{ marginBottom: '10px' }}><span>Origin: </span> {catinfo.origin}</div>
                                    <div style={{ marginBottom: '10px' }}><span>Life Span: </span> {catinfo.life_span} Years</div>
                                    <div className='rating-box'><span>Adaptability: </span>
                                        <div className='pallate'>
                                            {createRating(catinfo.adaptability)}
                                        </div>
                                    </div>
                                    <div className='rating-box'><span>Affection level: </span>
                                        <div className='pallate'>
                                            {createRating(catinfo.affection_level)}
                                        </div>
                                    </div>
                                    <div className='rating-box'><span>Child Friendly: </span>
                                        <div className='pallate'>
                                            {createRating(catinfo.child_friendly)}
                                        </div>
                                    </div>
                                    <div className='rating-box'><span>Grooming: </span>
                                        <div className='pallate'>
                                            {createRating(catinfo.grooming)}
                                        </div>
                                    </div>
                                    <div className='rating-box'><span>Intelligence: </span>
                                        <div className='pallate'>
                                            {createRating(catinfo.intelligence)}
                                        </div>
                                    </div>
                                    <div className='rating-box'><span>Health issues: </span>
                                        <div className='pallate'>
                                            {createRating(catinfo.health_issues)}
                                        </div>
                                    </div>
                                    <div className='rating-box'><span>Social needs: </span>
                                        <div className='pallate'>
                                            {createRating(catinfo.social_needs)}
                                        </div>
                                    </div>
                                    <div className='rating-box'><span>Stranger friendly: </span>
                                        <div className='pallate'>
                                            {createRating(catinfo.stranger_friendly)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='image-gallery'>
                                More Images
                </div>
                            <div className='gallery'>
                    
                                {
                                    catImage.length != 0 ? (
                                        catImage.map((item, i) => {
                                            console.log(item)
                                            return (
                                                <div className="image-box">
                                                    <img src={`${item}`} alt='cat' className='main-cat-image' />
                                                </div>
                                            )
                                
                                        })
                                    ) : (null)
                                }
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}


export default CatInfo;