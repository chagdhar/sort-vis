import React from 'react';
import './SortingVisualizer.css';

var NO_OF_BARS = 50;
var MIN_SIZE = 50;
var MAX_SIZE = 500;

const PRIMARY_COLOR = "red";
const SECONDRY_COLOR = "indigo";

export default class Sorter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
        console.log("compoonent mounted")
    }

    resetArray() {
        const array = [];
        
        for (let i = 0; i < NO_OF_BARS; i++) {
            array[i] = randomInt(MIN_SIZE, MAX_SIZE);
        }
        this.setState({array});
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
                      }}></div>
                  ))}
                </div>
                <div className="menu">
                  <button onClick={() => this.resetArray()}>Generate New Array</button>
                </div>
            </>
        );
    }
} 

function randomInt(min, max) {
    return Math.floor((Math.random()*(max-min+1)) + min);
}