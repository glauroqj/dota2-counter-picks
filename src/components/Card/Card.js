import React from 'react'
import PropTypes from 'prop-types'

/** style */
import * as El from './Card.style'

const Card = ({
  image
}) => {

  return(
    <El.CardContainer>
      <El.CardImageContainer>
        <img loading='lazy' src='https://www.pcgamesn.com/wp-content/uploads/2019/10/best-dota-2-heroes-lich-loading-900x506.jpg' alt='' title='' />
      </El.CardImageContainer>

      <El.CardBodyCotnainer>
        BODY
      </El.CardBodyCotnainer>
    </El.CardContainer>
  )
}

Card.defaultProps = {
  image: ''
}
Card.propTypes = {
  image: PropTypes.string
}

export default Card