import { BsArrowRight } from 'react-icons/all'
import { Link } from 'react-router-dom';
import './body.css'
const Body = () => {
    return (
        <div className='body'>
            <div className='content'>
                <div className='title'>Why should you have a cat?</div>
                <div className='sub-title'>
                    Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
                </div>
                <div className='read-more' >
                    <a href="https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner" target='_blank' style={{textDecoration:'none',color:'#1b1717'}} >
                        <div className='see-more' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        READ MORE <BsArrowRight style={{marginLeft:'5px'}} />
                    </div>
                    </a>
                </div>
            </div>
            <div className='images' style={{width:'500px',display:'flex'}}>
                <div style={{ margin:'10px'}} >
                    <img src={`${process.env.PUBLIC_URL}/images/image 2.png`} width='100%'  />
                    <img src={`${process.env.PUBLIC_URL}/images/image 1.png`} width='80%' height='80%' style={{marginLeft:'auto',marginTop:'10px'}} />
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/image 3.png`} width='50%' style={{ margin:'10px'}} />
            </div>
        </div>
    )
}

export default Body;