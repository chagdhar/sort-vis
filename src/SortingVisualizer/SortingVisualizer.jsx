import React from 'react';
import './SortingVisualizer.css';


var NO_OF_BARS = 20;

const PRIMARY_COLOR = "indianred";
//const SECONDARY_COLOR = "indigo";
const SORTING_DONE = "green";

// need to set the MIN and MAX sizes wrt the screen
const winHeight = window.innerHeight;
const MIN_SIZE = Math.floor(winHeight*0.1);
const MAX_SIZE = Math.floor(winHeight*0.85);


//const marginSize = 10; // in pixels ;; change margin: field down in the bar div 
//const width = Math.floor((window.innerWidth / NO_OF_BARS)/3); //- 2*marginSize); ?? I want marginsize = width of eachbar 

//const width = setWidth(NO_OF_BARS);
//wrote function as i need to set later

export default class Sorter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            colors: [],
            barnum: NO_OF_BARS,
            barWidth: setWidth(NO_OF_BARS),
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        const colors = [];
        const {barnum} = this.state;
        console.log(barnum);
        for (let i = 0; i < barnum; i++) {
            array[i] = randomInt(MIN_SIZE, MAX_SIZE);
            colors[i] = PRIMARY_COLOR;
        }
        this.setState({array, colors});
    }

    async bubbleSort() {
        var {array} = this.state;
        var {barnum} = this.state;
        var {colors} = this.state;
        
        //var barArray = document.getElementsByClassName("bar");
        //console.log(barArray);
        
        for(var i=barnum; i>=0; i--) {
            for(var j=0;j<i;j++){
                if(array[j]> array[j+1]) {                   
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    this.setState({array});
                    await sleep(200);
                }
            }
            colors[i-1] = SORTING_DONE;
            this.setState({colors});
        }
    }

    handleChange = (value) => {
        this.setState({
            barnum: value
        })
    }

    render() {
        const {array} = this.state;
        const {colors} = this.state;
        const {barWidth} = this.state;

        return (
            <>
                <div className="container">
                  {array.map((value, idx) => (
                    <div
                      className="bar"
                      key={idx}
                      style={{
                        backgroundColor: `${colors[idx]}`,
                        height: `${value}px`,
                        width: `${barWidth}px`,
                        margin: `${barWidth}px`,
                        borderRadius: `${barWidth}px`,
                      }}></div>
                  ))}
                </div>
                <div className="menu">
                    <button className="btn" onClick={() => this.resetArray()}>Generate New Array</button>
                    <button className="btn" onClick={()=>(this.bubbleSort())}>BUBBLE SORT</button>
                    <input 
                        type="range" 
                        className="slider"
                        
                        min={10}
                        max={200}
                        step={10}
                        onChange={(values)=>{
                            this.setState({
                                barnum: values.target.value,
                                barWidth: setWidth(values.target.value),
                            });
                            this.resetArray();  
                        }}
                    /> 
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

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}