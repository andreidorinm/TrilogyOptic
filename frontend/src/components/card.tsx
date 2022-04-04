import React from 'react'
import { VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Image } from 'react-bootstrap'
import './NavButtons.css'
import './SlideMenu2.css'
import armani from './logos/logoarmani.png'

export function Card({
  itemId,
  selected,
  onClick,
  // title,
  image,
}: {
  itemId: string
  selected: boolean
  onClick: Function
  // title: string
  image: any
}) {
  const visibility = React.useContext(VisibilityContext)

  const visible = visibility.isItemVisible(itemId)

  return (
    <div
      onClick={() => onClick()}
      role='button'
      // className='btn btn-light sm-1'
      style={{
        // border: "1px solid",
        display: 'inline-block',
        margin: '0 10px',
        width: '130px',
        userSelect: 'none',
      }}
      // tabIndex={0}
      // className='card'
    >
      <div>
        <nav
        
          className='slidemenu'
          style={{
            // border: "1px solid",
            display: 'inline-block',
            margin: '0 10px',
            width: '130px',
            userSelect: 'none',
          }}
        >
          <input
            className='slide-toggle'
            checked
          />
          <label
            className='slide-toggle'
            style={{
              // border: "1px solid",
              // display: 'inline-block',
              margin: '0 10px',
              textAlign: 'center',
              width: '120px',
              userSelect: 'none',
            }}
          >
            
            <Image className='photo' src={image} fluid />
            <p className='slide-icon'>
              {/* <span>{title}</span> */}
            </p>
          </label>
        </nav>
      </div>
    </div>
  )
}
