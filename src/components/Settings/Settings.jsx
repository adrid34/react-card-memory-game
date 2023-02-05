import React, { useState } from 'react'
import styles from './Settings.module.css';
import {CATEGORIES, DIFFICULTY, INITIAL_CARD_COUNT} from './../../../constants.js';
import RadioButton from '../RadioButton';
import Counter from '../Counter';
import PropTypes from 'prop-types'


const Settings = ({startGame}) => {

    const [category, setCategory] = useState(CATEGORIES[0]);
    const [difficulty, setDifficulty] = useState(DIFFICULTY[0]);
    const [cardsCount, setCardsCount] = useState(INITIAL_CARD_COUNT);

    const startGameClick = function() {

      startGame({ category, difficulty, cardsCount })
      
    }

  return (

    <div className={`${styles.settings} `} >

        <h2>Settings</h2>


        <h4>Categories </h4>

        <div className={`${styles.setting}`}>

            {CATEGORIES.map( item => {
                return <RadioButton key={item} name={item} selectItem = {category} onChange = { (e)=> setCategory(e.target.value) } />
            } )}

        </div>


        <h4>Difficulty</h4>

        <div className={`${styles.setting}`}>

            {DIFFICULTY.map( item => {
                return <RadioButton key={item} name={item} selectItem = {difficulty} onChange = { (e)=> setDifficulty(e.target.value) } />
            } )}

        </div>

        <h4>Total cards</h4>
          
        <div>
              <Counter cardsCount = {cardsCount} onClick = {setCardsCount} />
        </div>


        <button className={`${styles.button}`} onClick= {startGameClick}> Start </button>

    </div>

  )
}

export default Settings

Settings.propTypes = {

  startGame: PropTypes.func.isRequired,

}