import React, { Component } from 'react';
import Box from './components/Box';
import './App.css';

// 2- Créer le composant
 class App extends Component{
  render(){
    return (
      <div className="App">
        <Box />
      </div>
    );
  }
}

// 3 -Exporter le composant pour le rendre discponible
export default App;




// // 1 - importer les modules dont on a besoin pour ce composant
// import React, { Component } from 'react';

// // 2- Créer le composant
// class App extends Component{
//   render(){
//     return (
//       <div>
//         <p>Je suis le composant App</p>
//       </div>
//     );
//   }
// }

// // 3 -Exporter le composant pour le rendre discponible
// export default App;


// Importer les modules dont on a besoin pour ce composant
//import React, {Component} from 'react';
// import Item from './Item';

// const list = [
//   {id: "1", nom: "Shopie", age:"18", rouge: true},
//   {id: "2", nom: "Julienne", age:"28", rouge: false},
//   {id: "3", nom: "Marc", age:"30", rouge: true},
//   {id: "4", nom: "Alexandre", age:"14", rouge: false},
// ];

// //créer le composant
// class App extends Component{
//   state = {
//     loading: true,
//     nom: ""
//   }

//   componentDidMount(){
//     setTimeout(() => {
//       this.setState({loading: false})
//     }, 3000)
//   }

//   renderList(){
//     return list.map(item => {
//       return (
//         <Item key={item.id} nom={item.nom} age={item.age} rouge={item.rouge}/>
//       )
//     })
//   }

//   handleClick = () =>{
//     console.log("Click réussi !", this.reference);
//     console.log("valeur du champ", this.reference.value);
//   }

//   handleChange = (e) => {
//     console.log('value', e);
//     console.log('this', this);
//     this.setState({nom: e.target.value});
//   }

//   render(){
//     return(
//       <div>
//         {this.state.loading ? (
//           <p>Chargement en cours...</p>
//         ) : (
//           <div>
//           <p>Je suis le composant App</p>
//           {this.renderList()}
//           <button onClick={this.handleClick}>Cliquez moi</button>
//           {/* <input
//             value={this.state.nom}
//             onChange={this.handleChange}
//           /> */}
//           <input
//             ref={ref => this.reference = ref}
//           />
//           </div>
//         )
//       }
        
//       </div>
//     )
//   }
// }

// // exporter le composant pour le rendre disponible
// export default App;
