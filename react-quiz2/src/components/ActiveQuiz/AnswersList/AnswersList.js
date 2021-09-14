import React from "react";
import classes from './AnswersList.css'
import AnswersItem from './AnswerItem/AnswerItem'

const AnswersList= props => (
<ul className={classes.AnswersList}>
    {props.answers.map((answer, index)=>{
        return(
            <AnswersItem answer={answer}
            />
        )

    })
    }
</ul>
)

export default AnswersList