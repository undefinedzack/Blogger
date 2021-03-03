import {useState, useEffect} from 'react'
import * as Data from '../Database/Data'

const Head = {'fontFamily' : "'Inter', sans-serif", fontWeight : '700' }

const Home = () => {

    const [data, setData] = useState()

    useEffect(() => {


    }, [])

    return(
        <>
            {console.log(data)}
            <div className={'container mt-5 p-5'} style={{'maxWidth': '1000px'}}>
                <div className={'row'}>
                    <div className={'col-2'}>
                        <a className="navbar-brand" href="#">
                            <img className={'rounded-circle'} src="https://pbs.twimg.com/profile_images/1269507968476864513/zlWyVOmU_400x400.jpg" width="120" height="120" />
                        </a>
                    </div>
                    <div className={'col-8 mt-4'}>
                        <p style={{...Head, fontSize : '24px'}}>Adhney Nawghare</p>
                        <p style={{'fontFamily' : "'Inter', sans-serif", fontSize : '18px', fontWeight : '400' }}>it's all about practice, neither if nor else.</p>
                    </div>
                </div>

            </div>

            <div className={'container'} style={{'maxWidth': '850px'}}>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <p style={{...Head, fontSize : '30px'}}>{Data.blogs[0].text}</p>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Home