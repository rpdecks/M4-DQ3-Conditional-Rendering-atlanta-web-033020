import React from 'react'

const MenuBar = (props) => {

  /*
  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?
  */

  const evalClick = e => {
    props.selectCategory(e.target.id)
  }

  return (
    <div className="ui four item menu">
      <a className={props.selectedCategory === 'profile' ? 'item active' : 'item'} id="profile" onClick={e => evalClick(e)}>
        <i className="user large icon" id="profile" />
      </a>

      <a className={props.selectedCategory === 'photo' ? 'item active' : 'item'} id="photo" onClick={e => evalClick(e)}>
        <i className="photo large icon" id="photo" />
      </a>

      <a className={props.selectedCategory === 'cocktail' ? 'item active' : 'item'} id="cocktail" onClick={e => evalClick(e)}>
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a className={props.selectedCategory === 'pokemon' ? 'item active' : 'item'} id="pokemon" onClick={e => evalClick(e)}>
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  )

}

export default MenuBar