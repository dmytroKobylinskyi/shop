import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items:[
        {
          id:1,
          title:'Стілець сірий',
          img:'chair-grey.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipising.',
          category:'chairs',
          price: '49.99'
        },
        {
          id:2,
          title:'Стіл',
          img:'table.webp',
          desc:'Lorem ipsum dolor sit amet, consectetur adipising.',
          category:'tables',
          price: '149.00'
        },
        {
          id:3,
          title:'Диван',
          img:'sofa.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipising.',
          category:'sofa',
          price: '549.99'
        },
        {
          id:4,
          title:'Лампа',
          img:'wall-light.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipising.',
          category:'light',
          price: '25.00'
        },
        {
          id:5,
          title:'Стілець білий',
          img:'chair-white.jpeg',
          desc:'Lorem ipsum dolor sit amet, consectetur adipising.',
          category:'chairs',
          price: '49.99'
        }
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Items items={this.state.items} />
        <Footer/>
      </div>
    );
  }
}

export default App;
