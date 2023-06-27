import React from 'react'
import Image from 'next/image'

function Bio() {
  return (
    <>
      <div className='bio-container'>
        <div className="bio-block">
          <div className="image-block">
              <Image src='/images/bioimg.png' className='bio-img' height='180' width='180' />
              <p id='subtitle'>Guilherme Aziz Cury</p>
              <p id='subtitle-small'>Bodybuilding Coach</p>
          </div>
          <div className="text-block">
              <p>Minha jornada na musculação começou há 16 anos, quando comecei a treinar. Como profissional, comecei a atuar na área em 2017, oferecendo atendimentos. Hoje, temos orgulho em dizer que já transformamos mais de 5 mil vidas. </p>
              <p>O objetivo da nossa consultoria é realmente alinhar a dieta à sua vida, e não o contrário. Trabalhamos com qualquer tipo de objetivo, seja ele emagrecimento, aumento de massa magra, suprir carências nutricionais e até mesmo fornecer preparação completa para atletas. </p>
              <p>Independentemente do seu objetivo, nós podemos e VAMOS te ajudar. Nosso foco é vender saúde e entregar resultados reais.</p>
          </div>
        </div>
      </div>
    </>

  )
}

export default Bio
