import React, { Component } from 'react'
import './pageTwo.css'
import PageThree from './PageThree'
export class pageTwo extends Component {

        constructor(props){
            super()
            this.state={
                pageThree:false
            }

            this.DisplayTask = this.DisplayTask.bind(this)
        }


    DisplayTask(){
        this.setState(prevState => ({
            pageThree: !prevState.pageThree
          }));
    }
    render() {
        return (
           <div>
            <div className="seconPage">
                <a onClick={ this.props.onChange}><img src={require('./Polygon 1.png')} /><span style={{color:"#A5BAD0"}}> over View</span></a>
                <p><b id="today">Today's Tasks</b></p>
                <div className="Task" onClick={this.DisplayTask}>
                    <div className="confite">

                    </div>
                  <img className="Done" src={require("./Done.png")} alt="..."/>
                </div>
                <div className="Tasks" onClick={this.DisplayTask}>
                    <div className="divContent">
                            <p><b className="physics">Physics</b></p>
                            <p className="time">Estimated Time:30minutes</p>
                            <p className="third">Practing multiple choices to familiarise yourself with physics.</p>

                    </div>
                </div>
                <div className="Tasks" onClick={this.DisplayTask}>
                    <div className="divContent">
                        <p><b className="physics">History</b></p>
                        <p className="time">Estimated Time: 2 hours </p>
                        <p className="third">Questions about Modern World History will help you to understand even deeper about history. </p>
                    </div>
                </div>
                <div className="Tasks" onClick={this.DisplayTask}>
                    <div className="divContent">
                        <p><b className="physics">Social Studies</b></p>
                        <p className="time">Estimated Time: 1 hours</p>
                        <p className="third">Practing multiple choices to familiarise yourself with Social Studies.</p>
                    </div>
                </div>
            </div>
               <div class="main2">
                    {this.state.pageThree && <PageThree/>}
                </div>
        </div>
        )
    }
}

export default pageTwo






