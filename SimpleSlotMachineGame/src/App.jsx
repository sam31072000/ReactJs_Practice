import React from 'react';

const AppMchn = (props) => {
    // let x = '❤',y = '❤',z = '😉';

    if((props.x===props.y) && (props.x===props.z)){
        return (
            <>
                <div className="slot_inner">
                    <h1>
                        {props.x}{props.y}{props.z}
                    </h1>
                    <h1>This is matching</h1>
                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div className="slot_inner">
                    <h1>
                        {props.x}{props.y}{props.z}
                    </h1>
                    <h1>This is not matching</h1>
                </div>
            </>
        )
    }
}

const App = () =>{

    return (
        <>
            <h1 className="heading_style">🖥Welcome(*^_^*) <span styel={{fontWeight:"bold"}}>To Slot Machine Game</span>🖥</h1>
            <div className="Slottable">
            <AppMchn x="😀" y="😀" z="😀" />
            <AppMchn x="🍔" y="🍕" z="🍟" />
            <AppMchn x="😉" y="😉" z="😉" />
            <AppMchn x="🎆" y="✨" z="🎇" />
            </div>
        </>
    )
};
