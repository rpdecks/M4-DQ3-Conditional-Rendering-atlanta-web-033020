import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selectedCategory: 'profile'
  }

  selectCategory = category => {
    this.setState({
      selectedCategory: category
    })

  }

  detailsToDisplay = () => {
    if (this.state.selectedCategory === 'profile') {
      return <Profile />;
    } else if (this.state.selectedCategory === 'photo') {
      return <Photos />;
    } else if (this.state.selectedCategory === 'cocktail') {
      return <Cocktails />;
    } else if (this.state.selectedCategory === 'pokemon') {
      return <Pokemon />;
    }
    return <div>I'm a div!</div>
  }

  render() {

    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */

    return (
      <div>
        <MenuBar selectedCategory={this.state.selectedCategory} selectCategory={this.selectCategory} />
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox