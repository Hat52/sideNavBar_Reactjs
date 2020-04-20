import React from 'react'
import './PageThree.css'

class ThirdPage extends React.Component{
    render() {
        var style={
           marginTop:"20px",
            width:"80%",
            marginLeft:"50px",
            fontFamily: "Rubik",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "11px",
            lineHeight: "13px",
            textAlign: "center"
        }
        var style2={

            marginTop:"-30px",
            marginLeft:"60px",
            border:" 2px solid #dddddd",
            width:"50px"
        }
        var style3={

            marginTop:"-42px",
            marginLeft:"120px",
            border:" 2px solid #dddddd",
            width:"50px"
        }
        var style4={

            marginTop:"-42.5px",
            marginLeft:"180px",
            border:" 2px solid #dddddd",
            width:"50px"
        }
        var style5={

            marginTop:"-43px",
            marginLeft:"240px",
            border:" 2px solid #dddddd",
            width:"50px"
        }
        return (
            <div className="PageThree"> 
                <div className="firstDiv">
                        <p className="lightYear">
                            A light year is defined as the distance light travels in 1 year. The speed of light ix 3x10 m/s. Which of the following is the nearest estimate of 1 light year?
                        </p>
                        <div className="div1">
                            10 Gm
                        </div>
                        <div className="div2">
                            10 Gm
                        </div>
                        <div className="div3">
                            10 Gm
                        </div>
                        <div className="div4">
                            10 Gm
                        </div>
                </div>
                <div className="secondDiv">
                   
                        <p className="secondDivp1">The velocity of a moving object is given by </p>
                        <div className="divOfP2"><p className="secondDivp2">the area below a displacement-time graph.</p></div>
                        <div className="divOfP2" style={{marginTop:"20px"}}> <p className="secondDivp2" >the area below a displacement-time graph.</p></div>
                        <div className="divOfP2" style={{marginTop:"20px"}}> <p className="secondDivp2" >the area below a displacement-time graph.</p></div>
                        <div className="divOfP2" style={{marginTop:"20px"}}> <p className="secondDivp2" >the area below a displacement-time graph.</p></div>
                   
                </div>
                <div className="thirdDiv">
                    <p className="lightYear">
                        A light year is defined as the distance light travels in 1 year. The speed of light ix 3x10 m/s. Which of the following is the nearest estimate of 1 light year?
                    </p>
                    <div className="div1">
                        10 Gm
                    </div>
                    <div className="div2">
                        10 Gm
                    </div>
                    <div className="div3">
                        10 Gm
                    </div>
                    <div className="div4">
                        10 Gm
                    </div>
                </div>
                <div className="secondDiv">
                    <p className="secondDivp1">The velocity of a moving object is given by </p>
                    <div className="divOfP2"><p className="secondDivp2">the area below a displacement-time graph.</p></div>
                    <div className="divOfP2" style={{marginTop:"20px"}}> <p className="secondDivp2" >the area below a displacement-time graph.</p></div>
                    <div className="divOfP2" style={{marginTop:"20px"}}> <p className="secondDivp2" >the area below a displacement-time graph.</p></div>
                    <div className="divOfP2" style={{marginTop:"20px"}}> <p className="secondDivp2" >the area below a displacement-time graph.</p></div>
                   
                    </div>
            </div>
        )
    }
}

 export default ThirdPage