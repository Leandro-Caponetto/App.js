/* eslint-disable jsx-a11y/anchor-is-valid */

const Nav = ({type}) => {
    if(type === "header"){
      return (
        <nav className="nav">
          <a href="#">Elemento1</a>
          <a href="#">Elemento2</a>
          <a href="#">Elemento3</a>
        </nav>
      )
    }else{
      return (
        <nav>
          <a href="#">footer</a>
          <a href="#">footer</a>
          <a href="#">footer</a>
        </nav>
      )
    }
  
  }
  
  export default Nav
