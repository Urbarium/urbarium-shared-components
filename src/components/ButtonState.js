import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
    height: 30px;
    width: 100px;
    position: relative;
    display: flex;
`

const Arrow = styled.div`
    position: relative;
    width: 0px;
    height: 0px;
    top: 14px;
    right: 20px;
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
const Button = styled.button`
    height: 100%;
    width: 100%;
    cursor: pointer;
    font-family: Sans-Serif;
    font-size: 12px;
    border-radius: 15px;
    color: ${props => props.color};
    background-color: ${props => props.backColor};
    border: none;
    padding-right: 20px;
    box-sizing: border-box;

    :focus {
       outline: none;
    }
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
        this.state = {index: 0}
    }
    cycleState(){
        let newIndex = this.state.index === 2 ? 0 : this.state.index + 1;
        this.setState({index: newIndex})
    }
    render() {
        return (
            <Container> 
                <Button  onClick={() => this.cycleState()} 
                    color={states[this.state.index].color} 
                    backColor={states[this.state.index].backColor}>

                    {states[this.state.index].text}

                </Button >

                <Arrow color={states[this.state.index].color}/>
            </Container>
        )
    }
}

export default InputState;