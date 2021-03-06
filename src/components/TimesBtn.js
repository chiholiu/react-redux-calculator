import React from 'react';
import { connect } from 'react-redux';
import { onTimesClick } from '../actions';

const TimesBtn = ({ timesBtn, onTimesClick }) => {
    let minus = timesBtn.map((btn, index) => {
        return (
            <div key={index} onClick={() => onTimesClick()}>
                {btn}
            </div>
        )
    })

    return (
        <div>
            {minus}
        </div>
    )
} 

const mapDispatchToProps = dispatch => ({
    onTimesClick: () => dispatch(onTimesClick())
})

const mapStateToProps = state => ({
    timesBtn: state.calculator.multiply
})

export default connect(mapStateToProps, mapDispatchToProps)(TimesBtn);