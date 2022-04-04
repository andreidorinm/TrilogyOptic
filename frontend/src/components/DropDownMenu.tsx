import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { LeftArrow, RightArrow } from './arrows'
import { Image } from 'react-bootstrap'
import { Card } from './card'
import { listBrandProducts } from '../actions/productActions'
import useDrag from './useDrag'

import './globalStyles.css'
import './SlideMenu2.css'
import { OptionsWrapper, OptionItem } from './optionsElements'
import Styler from 'stylefire'
// @ts-ignore
import { animate } from "../../node_modules/popmotion/dist/popmotion";

//import "./arrowsOnBottomOrTop.css";
import './hideScrollbar.css'
// import "./firstItemMargin.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>

const DropDownMenu = () => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag()
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff
        }
      })

  const dispatch = useDispatch()
  const history = useHistory()

  const [duration, setDuration] = React.useState(500)
  const [ease, setEase] = React.useState('noEasing')
  const [customAnimation, setCustomAnimation] = React.useState(false)

  function onWheel(
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
  ): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15
    if (isThouchpad) {
      ev.stopPropagation()
      return
    }
    if (ev.deltaY < 0) {
      // NOTE: for transitions
      apiObj.scrollNext(undefined, undefined, undefined, { duration })
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev(undefined, undefined, undefined, { duration })
    }
  }

  const productBrand = useSelector((state: any) => state.productBrand)
  const { products } = productBrand

  useEffect(() => {
    dispatch(listBrandProducts())
  }, [dispatch, history])

  const [selected, setSelected] = useState<string>('')

  const handleBrands = (itemId: string) => () => {
    if (dragging) {
      return false
    }

    if (itemId === 'Baldinini') {
      history.push('/baldinini')
    }

    if (itemId === 'Blumarine') {
      history.push('/blumarine')
    }

    if (itemId === 'Burberry') {
      history.push('/burberry')
    }

    if (itemId === 'Bvlgari') {
      history.push('/bvlgari')
    }

    if (itemId === 'Carolina Herrera') {
      history.push('/carolina-herrera')
    }

    if (itemId === 'D&G') {
      history.push('/gabbana')
    }

    if (itemId === 'Diesel') {
      history.push('/diesel')
    }

    if (itemId === 'Dior') {
      history.push('/dior')
    }

    if (itemId === 'Emporio Armani') {
      history.push('/armani')
    }

    if (itemId === 'Escada') {
      history.push('/escada')
    }

    if (itemId === 'For Art Sake') {
      history.push('/for-art-sake')
    }

    if (itemId === 'Fossil') {
      history.push('/fossil')
    }

    if (itemId === 'Furla') {
      history.push('/furla')
    }

    if (itemId === 'Gant') {
      history.push('/gant')
    }

    if (itemId === 'Gucci') {
      history.push('/gucci')
    }

    if (itemId === 'Henri Lloyd') {
      history.push('/henri-lloyd')
    }

    if (itemId === 'Hugo Boss') {
      history.push('/boss')
    }

    if (itemId === 'Marc Jacobs') {
      history.push('/marc-jacobs')
    }

    if (itemId === 'Max & Co') {
      history.push('/max-and-co')
    }

    if (itemId === 'Michael Kors') {
      history.push('/michael-kors')
    }

    if (itemId === 'Moschino') {
      history.push('/moschino')
    }

    if (itemId === 'Persol') {
      history.push('/persol')
    }

    if (itemId === 'Prada') {
      history.push('/Prada')
    }

    if (itemId === 'Puma') {
      history.push('/puma')
    }

    if (itemId === 'Ray-Ban') {
      history.push('/rayban')
    }

    if (itemId === 'Roberto Cavalli') {
      history.push('/cavalli')
    }

    if (itemId === 'Rodenstock') {
      history.push('/rodenstock')
    }

    if (itemId === 'Swarovski') {
      history.push('/swarovski')
    }

    if (itemId === 'Tom Ford') {
      history.push('/tom-ford')
    }

    if (itemId === 'Tommy Hilfiger') {
      history.push('/hilfiger')
    }

    if (itemId === 'Valentino') {
      history.push('/valentino')
    }

    if (itemId === 'Vogue') {
      history.push('/vogue')
    }
    setSelected(selected !== itemId ? itemId : '')
  }

  return (
    <>
      <div
        className='example'
        style={{
          paddingTop: '80px',
          marginTop: '-40px',
          marginBottom: '-40px',
        }}
      >
        <h2 className='text'>Selecteaza un brand</h2>
        <div onMouseLeave={dragStop}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
            transitionDuration={duration} // NOTE: for transitions
            transitionBehavior={customAnimation ? scrollBehavior : undefined}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {products.map((product: any) => (
              <Card
                // title={product.brand}
                selected={product == selected}
                itemId={product.brand}
                key={product.brand}
                onClick={handleBrands(product.brand)}
                image={product.image}
              />
            ))}
          </ScrollMenu>

          {/* <OptionsWrapper>
            <OptionItem label="">
            <div
                checked={customAnimation}
                onChange={(ev) => setCustomAnimation(ev.target.checked)}

              />
              
            </OptionItem>
          </OptionsWrapper> */}
        </div>
      </div>
    </>
  )
}

export default DropDownMenu

const scrollBehavior = (instructions: any) => {
  const [{ el, left }] = instructions
  const styler = Styler(el)

  animate({
    from: el.scrollLeft,
    to: left,
    type: 'spring',
    onUpdate: (left: any) => styler.set('scrollLeft', left),
  })
}

const easingFunctions = {
  noEasing: undefined,
  // no easing, no acceleration
  linear: (t: any) => t,
  // accelerating from zero velocity
  easeInQuad: (t: any) => t * t,
  // decelerating to zero velocity
  easeOutQuad: (t: any) => t * (2 - t),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t: any) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
  // accelerating from zero velocity
  easeInCubic: (t: any) => t * t * t,
  // decelerating to zero velocity
  easeOutCubic: (t: any) => --t * t * t + 1,
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t: any) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // accelerating from zero velocity
  easeInQuart: (t: any) => t * t * t * t,
  // decelerating to zero velocity
  easeOutQuart: (t: any) => 1 - --t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t: any) =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // accelerating from zero velocity
  easeInQuint: (t: any) => t * t * t * t * t,
  // decelerating to zero velocity
  easeOutQuint: (t: any) => 1 + --t * t * t * t * t,
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t: any) =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
  // Source https://gist.github.com/gre/1650294#file-easing-js
}
