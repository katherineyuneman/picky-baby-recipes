import styled from 'styled-components'

const GeneralStyle = styled.div`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    text-align: center;
`

const content_width= `1000px`;
const breakpoint = `799px`;
const nav_height = `250px`;
const nav_background = `#262626`;
const nav_font_color = `#ffffff`;
const link_hover_color = `#2581DC`;




const Header = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&family=Montserrat:ital,wght@1,500&family=Playfair+Display:ital,wght@1,800&display=swap');
  background: white;
  color: #000080;
  position: fixed;
  top: 0;
  height: 100px;
  line-height: 15px;
  width: 100vw;
  /* z-index: 10; */
  border-bottom: double 10.5px #E7717D;
  /* .logo{
        color:#000080;
        text-decoration: none;
        }; */
 
  h1 {
    line-height:50px;
    display: flex;
    flex: 70%;
    color: #000080;
    float: left;
    /* margin-left: 28px; */
    font-size: 3em;
    height: 15px;
    letter-spacing: 1px;
    font-family: "Bungee Shade";

    }
  .navigation {
    min-height: ${nav_height};
    background: ${nav_background};
    width: ${content_width};
    background-repeat:no-repeat !important;
    background-size:cover !important;
  }
  .brand {
  position: absolute;
  padding-left: 20px;
  /* margin: 20px; */
  /* float: left; */
  width: 30%;
  line-height: ${nav_height};
  /* text-transform: uppercase; */
  /* font-size: 1.4em; */
  /* justify-content: center; */
  a,
  a:visited {
    color: ${nav_font_color};
    text-decoration: none;
  }
  /* img {
        justify-content: center;
        text-align: center;
        min-width: 120px;
        max-width: 125px;
        float: left;
        width: 25%;
        border-radius: 50%;
        background-color: green;
    } */
}

.nav-container {
  max-width: ${content_width};
  margin: 0 auto;
}

nav {
  float: right;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      float: left;
      position: relative;
      a,
      a:visited {
        display: block;
        padding: 0 5px;
        line-height: 200px;
        background: ${nav_background};
        color: ${nav_font_color};
        text-decoration: none;
        &:hover {
          background: ${link_hover_color};
          color: ${nav_font_color};
        }
        &:not(:only-child):after {
          padding-left: 4px;
          content: ' ▾';
        }
      } // Dropdown list
      ul li {
        min-width: 190px;
        a {
          padding: 15px;
          line-height: 20px;
        }
      }
    }
  }
}
    li{
    color: white;
    display: inline-block;
    padding: 0px 10px;
    margin: 2em;
    /* border-radius: 50px; */
    }
    li:hover {
    background-color: #C2B9B0;
    color: white;
    /* height:100%; */
    }

    // Dropdown list binds to JS toggle event
.nav-dropdown {
  position: absolute;
  display: none;
  z-index: 1;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
}

/* Mobile navigation */

// Binds to JS Toggle
.nav-mobile {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background: ${nav_background};
  height: ${nav_height};
  width: 25%;
}
@media only screen and (max-width: 798px) {
  // Hamburger nav visible on mobile only
  .nav-mobile {
    display: block;
  }
  nav {
   width: 100%;
    padding: ${nav_height} 0 15px;
    ul .none {
      display: none;
      li {
        float: none;
        a {
          padding: 15px;
          line-height: 20px;
        }
        ul li a {
          padding-left: 30px;
        }
      }
    }
    ul .display {
      li {
        float: none;
        a {
          padding: 15px;
          line-height: 20px;
        }
        ul li a {
          padding-left: 30px;
        }
      }
    }
  }
  .nav-dropdown {
    position: static;
  }
}
@media screen and (min-width: ${breakpoint}) {
    .navigation {
        background: ${nav_background};
    }
  .nav-list {
    display: block !important;
  }
}
#nav-toggle {
  position: absolute;
  left: 18px;
  top: 22px;
  cursor: pointer;
  padding: 10px 35px 16px 0px;
  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: ${nav_font_color};
    position: absolute;
    display: block;
    content: '';
    transition: all 300ms ease-in-out;
  }
  span:before {
    top: -10px;
  }
  span:after {
    bottom: -10px;
  }
  &.active span {
    background-color: transparent;
    &:before,
    &:after {
      top: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}

    
`


const HomeContainer = styled.div`
  margin: 2em;
  padding-top: 250px;


// Page content 
.body {
    h2{
        text-align: center;
    }
  max-width: ${content_width};
  padding: 30px;
    .contact {
        text-align: center;
    }
  
}

@media only screen and (min-width: 481px) {
    
}
@media only screen and (min-width: 920px) {
    .navigation {
  min-height: ${nav_height};
  background: ${nav_background};
}
    
}
@media only screen and (min-width: 1030px) {
    
}
@media only screen and (min-width: 1240px) {
    
}



  h1{
    font-family: "Playfair Display";
  }
  button{
    background-color:#000080;
    color:white;
    border: 2px solid #E7717D;
    border-radius: 25px;
    font-style: bolder;
    font-size: 20px;
    font-family: "Playfair Display";
    font-style: bolder;
    padding: .5em;
    width: 150px
  }
  button:hover{
    background-color:white;
    color:#000080;
    border: 2px solid #E7717D;
  };
  button:active{
    background-color:#E7717D;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };
`

const Container = styled.div`
  width: 100%;
  margin-left: 1em;
  display: flex;
  flex-wrap: wrap;
  font-family: "Playfair Display";
`

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  /* transition: 0.3s; */
  padding: 2px 16px;
  border-radius: 25px;
  margin: 1em;
  margin-top: 0em;
  width:180px;
  justify-content: center;
  h5{
    flex-wrap: wrap;
    padding: 2px 10px;
    margin:1em;
    background-color:#000080;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    font-size: 20px;
    border-radius: 25px;
  };
  img{
    width:100%;
    filter: saturate(100%);
    
  };
  img:hover{
    filter: saturate(200%);
  };
  h3{
    height: 30px;
  };
  .stock{
    background-color:#AFD275;
    color:white
  };
  h4{
    height: 20px;
  };
  h6{
    font-family: "Montserrat", sans-serif;
  };
  p{
    font-family: "Montserrat", sans-serif;
  };
  .linkbg{
    color:white;
  };
  .link{
    color:black;
  };
  .link:hover{
    color:white;
    background-color: #E7717D;
  };
  .link:active{
    color:white;
  };
  .link:visited{
    color:purple;
  };
  .deleteButton{
    width: 100%;
    background-color:white;
    color:#AFD275;
    border: 0px;
    font-size: 25px;
  };
  .deleteButton:hover{
    color:white;
    font-size: 25px;
  }
  .otherButton{
    display:block;
    width: 100%;
    background-color:white;
    color:#AFD275;
    border: 2px solid #AFD275;
    border-radius: 5px;
    font-style: bolder;
  }
  .otherButton:hover{
    background-color:#AFD275;
    color:white;
    border: 2px solid white;
  };
  .otherButton:active{
    background-color:#AFD275;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };
  `


const ProductFeatureContainer = styled.div`
  height: auto;
  /* line-height: 20px; */
  width: 100%;
  display: block;
  font-family: "Playfair Display";
  justify-content: center;
  margin-left: 0;
  margin-top: 4em;
  padding-top: 60px;
`

const DropDown = styled.div`
  width: 100%;
  h4{
    margin:.5em;
  }
  select{
    margin-bottom: 1em;
    position: relative;
    background-color: #FEC90E;
    font-family:"Montserrat";
    color: white;
    border: solid white;
    border-radius: 6px;
  }
`

const SearchStyle = styled.div`
  width: 100%;
  margin: .5em;
  h4{
    margin-bottom:.5em;
  }
  input[type=text] {
    margin-right: .25em;
    margin-bottom: 1em;
    position: relative;
    background-color: white;
    font-family:"Montserrat";
    /* color: white; */
    font-style: none;
    font-size: 20px;
    border: solid #E7717D;
    border-radius: 25px;
    height: 50px;
    text-align: center;
    width: 300px;
    input:active{
      border: solid #E7717D;
      border-radius: 25px;
    }
}
input[type=submit], input[type=button]{
    background-color:white;
    color:#000080;
    border: 2px solid #000080;
    border-radius: 25px;
    font-style: bolder;
  };
  input[type=submit]:active,input[type=button]:active{
    background-color:white;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
    font-family: "Bungee Shade";
  }
`

const CartDiv = styled.div`
  width: 100%;
  height: auto;
  margin-top:4em;
  .left{
    width: 100%;
    display: block;
    padding-left: 2em;
  }
  .right{
    padding-left: .2em;
    padding-right: .2em;
    padding-top: 1em;
    padding-bottom: 2em;
    width: 20%;
    height: auto;
    display: block;
    float: right;
    margin-right: 1em;
    border: solid 1.5px gray;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
      button{
        display:block;
        width: 100%;
        background-color:white;
        color:#FEC90E;
        border: 2px solid #FEC90E;
        border-radius: 5px;
        font-style: bolder;
      }
      button:hover{
        background-color:#FEC90E;
        color:white;
        border: 2px solid white;
      };
      button:active{
        background-color:#FEC90E;
        color:white;
        border: 2px solid white;
        box-shadow: 5px 3px 3px gray;
        font-style: bold;
      }
    }
`

const TitleDiv = styled.div`
    flex-wrap: wrap;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    /* column-count: 4; */
    border: solid 2px gray;
    border-radius: 5px;
    /* display: inline-block; */
    font-size: 14px;
    /* flex-direction:row; */
    font-family: "Montserrat";
    font-size: 15px;
    margin: 3em;
    margin-bottom: 0;
    margin-top:2em;
    margin-left: 14em;
    width:25%;
    height: auto;
    display: block;
    text-align: center;
    align-items: right;
    background-color: #000080;
    color: white;
    .link{
    color:white;
    text-decoration: none;
    };
    .link:hover{
      color:#E7717D;
      /* background-color: #E7717D; */
      text-decoration: none;
    };
    .link:active{
      color:white;
      text-decoration: none;
    };
    /* .link:visited{
      color:white;
      text-decoration: none;
    } */
`
const RecipeCardStyle = styled.div`
    flex-wrap: wrap;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    /* column-count: 4; */
    border: solid 2px gray;
    border-radius: 5px;
    /* display: inline-block; */
    font-size: 14px;
    /* flex-direction:row; */
    font-family: "Montserrat";
    margin: 3em;
    margin-top:0;
    margin-left: 15em;
    padding: .5em;
    width:50%;
    height: auto;
    display: block;
    text-align: center;
    align-items: center;
    button{
        background-color:white;
        color:#FEC90E;
        border: solid 1px gray;
        border-radius: 5px;
        padding: .5em;
        /* text-align: center; */
        /* width: 100%; */
    }
      button:hover{
        border: solid 1px gray;
        border-radius: 5px;
        font-style: bolder;
        color:white;
        box-shadow: 5px 3px 3px gray;
        background-color: #FEC90E;
    };
      button:active{
        background-color:#FEC90E;
        color:white;
        border: 2px solid white;
        box-shadow: 5px 3px 3px gray;
        font-style: bold;
    }
`


const LeftPiece = styled.div`
overflow:hidden;
  position: left;
  img{
    /* padding-left: 5em; */
    width:75px;
    border-radius: 5px;
    overflow:hidden;
  }
`
const MiddleDescription = styled.div`
  font-style:bold;
  justify-content:center;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  padding-left: 0em;
  padding-top: 1em;
  width:150%;
  top:0;
`

const Quantity = styled.div`
  justify-content:center;
  /* width: 100%; */
  padding-top:1em;
  margin-left: 4em;
  button{
    display:block;
    background-color:white;
    color:#FEC90E;
    border: 1px solid #FEC90E;
    border-radius: 5px;
    font-style: bolder;
  }
  button:hover{
    background-color:#FEC90E;
    color:white;
    border: 2px solid white;
  };
  button:active{
    background-color:#FEC90E;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };
`
const TotalCost = styled.div`
  padding-top:2em;
  width:50%;
  padding-left: 4em;
  justify-content:right;
  height: auto;
`


const PopupCheckout = styled.div`
/* padding:150px; */
.popup-box {
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
}
 
.box {
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: auto;
}
 
.close-icon {
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(15% - 30px);
  top: calc(100vh - 85vh - 33px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;
}
`

const DetailCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  /* transition: 0.3s; */
  padding: 2px 16px;
  border-radius: 5px;
  margin: 1em;
  width:auto;
  justify-content: center;
  h5{
    padding: 2px 10px;
    margin:1em;
    background-color:#C2CAD0;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    font-size: 15px;
  };
  img{
    width:25%;
    filter: saturate(100%)
  };
  h3{
    height: 30px;
  };
  .stock{
    background-color:#CB4C4E;
    color:white
  };
  h6{
    font-family: "Playfair Display"
  };
`
const DetailButton = styled.div`
  justify-content:center;
  margin: 1em;
  button{
    display:block;
    background-color:white;
    color:#FEC90E;
    border: 1px solid #FEC90E;
    border-radius: 5px;
    font-style: bolder;
    padding: 1em;
  }
  button:hover{
    background-color:#FEC90E;
    color:white;
    border: 2px solid white;
  };
  button:active{
    background-color:#FEC90E;
    color:white;
    border: 2px solid white;
    box-shadow: 5px 3px 3px gray;
    font-style: bold;
  };

`


export {
  GeneralStyle, HomeContainer, Container, Card, Header, ProductFeatureContainer, RecipeCardStyle,
  LeftPiece, MiddleDescription, Quantity,TotalCost, DropDown, SearchStyle,
  CartDiv,PopupCheckout, DetailCard, DetailButton, TitleDiv
}