import React from 'react';
import styled from 'styled-components/macro'
import colors from '../colors';



const SpinningArrow =  styled.div`
    width: 0px;
    height: 0px;
    transition: transform 0.2s;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${colors.passive};

    &[data-animate=true] {
        transform: rotate(180deg);
    }

    /*    Long and boring css code below to create the arrow because I have no assets for the icons yet */
    
    ::after{
        position: absolute;                        
        content: "";
        width: 10px;
        height: 2px;
        top: 50%;
        left: 50%;
        background-color: inherit;
        transform: translate(-84%, -50%) rotate(45deg);        
    }

    ::before{
        position: absolute;                        
        content: "";
        width: 10px;
        height: 2px;
        top: 50%;
        right: 50%;
        background-color: inherit;
        transform: translate(84%, -50%) rotate(-45deg); 
    }
`
const Button = styled.button`
    border: none;
    position: relative;
    width: 20px;
    height: 15px;
    background-color: transparent;
    cursor: pointer;

    :hover ${SpinningArrow} {
        background-color: ${colors.primary};
    }

    :focus {
        outline: none;
    }
`
interface Props {onClick: Function};
interface State {animate: boolean};
class ButtonArrow extends React.Component<Props, State>{
    constructor(props) {
        super(props);
        this.state = {animate: false};
    }

    changeState() {
        this.setState({animate: !this.state.animate});
        this.props.onClick();
    }

    // Notice animate on ExpandArrow below is not a react comp property
    //  instead it is an html data-attribute, css does not see react props...
    render() {
        return(
            <Button onMouseDown={() => this.changeState()}>                
                <SpinningArrow data-animate={this.state.animate}/>
            </Button>
        )
    }
}

export default ButtonArrow;

