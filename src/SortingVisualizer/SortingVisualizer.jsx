import React from 'react';
import './SortingVisualizer.css';

var NO_OF_BARS = 50;
var MIN_SIZE = 50;
var MAX_SIZE = 500;

const PRIMARY_COLOR = "red";
const SECONDRY_COLOR = "indigo";

//const marginSize = 10; // in pixels ;; change margin: field down in the bar div 
//const width = Math.floor((window.innerWidth / NO_OF_BARS)/3); //- 2*marginSize); ?? I want marginsize = width of eachbar 

const width = setWidth(NO_OF_BARS);

//wrote function as i need to set later

export default class Sorter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            barnum: NO_OF_BARS,
        };
    }

    componentDidMount() {
        this.resetArray();
        console.log("compoonent mounted")
    }

    resetArray() {
        const array = [];
        
        for (let i = 0; i < this.state.barnum; i++) {
            array[i] = randomInt(MIN_SIZE, MAX_SIZE);
        }
        this.setState({array});
    }

    bubbleSort() {
        var {array} = this.state;
        var {barnum} = this.state;
        const bars = document.getElementsByClassName("bar");

        for (let i = barnum; i > 0; i--) {
            for(var j=0; j < i-1; j++) {
                setTimeout((j)=>{
                    bars[j].style.backgroundColor = SECONDRY_COLOR;
                    bars[j+1].style.backgroundColor = SECONDRY_COLOR;
                },1000);
               

            }
        }
    }

    render() {
        const {array} = this.state;
    
        return (
            <>
                <div className="container">
                  {array.map((value, idx) => (
                    <div
                      className="bar"
                      key={idx}
                      style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`,
                        width: `${width}px`,
                        margin: `${width}px`,
                        borderRadius: `${width}px`,
                      }}></div>
                  ))}
                </div>
                <div className="menu">
                    <button class="btn" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button class="btn" onClick={()=>(this.bubbleSort())}>BUBBLE SORT</button>
                </div>
            </>
        );
    }
} 

function setWidth(NO_OF_BARS) {
    return(Math.floor((window.innerWidth / NO_OF_BARS)/3));
}

function randomInt(min, max) {
    return Math.floor((Math.random()*(max-min+1)) + min);
}