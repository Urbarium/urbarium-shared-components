import React from 'react';
import styled from 'styled-components/macro';

// NON FUNCTIONAL, JUST A TEST TO SEE HOW IT LOOKS INSIDE THE ACCORDION MENU

const Arrow = styled.div`
    position: relative;
    top: 13px;
    left: 80px;
    width: 0px;
    height: 0px;
    background-color: ${props => props.color};
    ::after{
        border-radius: 1px;
        position: absolute;                        
        content: "";
        width: 6px;
        height: 2px;
        background-color: inherit;
        transform: translateX(-32%) rotate(45deg);        
    }
    ::before{
        border-radius: 1px;
        position: absolute;                        
        content: "";
        width: 6px;
        height: 2px;
        background-color: inherit;
        transform: translateX(32%) rotate(-45deg); 
    }
`

const Div = styled.div`
    height: 30px;
    width: 100px;
`

const Button = styled.button`
    height: inherit;
    width: inherit;
    position: absolute;
    cursor: pointer;
    font-family: Sans-Serif;
    font-size: 12px;
    border-radius: 15px;
    color: ${props => props.color};
    background-color: ${props => props.backColor};
    border: none;
    padding-right: 20px;
    box-sizing: border-box;
`

const states = [
    {
        text: "Por hacer",
        color: "#0077FF",
        backColor: "#EBEDF8",
    },
    {
        text: "En proceso",
        color: "white",
        backColor: "#0077FF",
    },
    {
        text: "Finalizado",
        color: "white",
        backColor: "#7ED321",
    }
]

class InputState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        }
    }
    cycleState(){
        let newIndex = this.state.index === 2 ? 0 : this.state.index + 1;
        this.setState({index: newIndex})
    }
    render() {
        return (
            <Div onClick={() => this.cycleState()}> 
                <Button color={states[this.state.index].color} backColor={states[this.state.index].backColor}>
                    {states[this.state.index].text}
                </Button >
                <Arrow color={states[this.state.index].color}/>
            </Div>
        )
    }
}

export default InputState;