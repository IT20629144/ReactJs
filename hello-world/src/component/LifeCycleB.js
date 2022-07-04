// import React, { Component } from 'react'

// export class LifeCycleB extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//         name:'ravindu'
//     }

//     console.log('LifeCycleB Constructor');
//   }

//   static getDerivedStateFromProps(props,state){

//     console.log('LifeCycleB getDerivedStateFromProps');
//       return null;
//   }

//   componentDidMount(){
//     console.log('LifeCycleB componentDidMount');
//   }


//   render() {


//     console.log('LifeCycleB Render');

//     return (
        
//       <div>
//           LifeCycleB
//      </div>
//     )
//   }
// }

// export default LifeCycleB





import React, { Component } from 'react'

export class LifeCycleB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        name:'ravindu'
    }

    console.log('LifeCycleB Constructor');
  }

  static getDerivedStateFromProps(props,state){

    console.log('LifeCycleB getDerivedStateFromProps');
      return null;
  }

 
  shouldComponentUpdate(){

    console.log('LifeCycleB shouldComponentUpdate');
    return true;
  }
  

  getSnapshotBeforeUpdate(prevProps,preState){
   
    console.log('LifeCycleB getSnapshotBeforeUpdate');

    return null;

  }


  componentDidUpdate(){

    console.log('LifeCycleB componentDidUpdate');
  }

  render() {


    console.log('LifeCycleB Render');

    return (
        
      <div>
          LifeCycleB
     </div>
    )
  }
}

export default LifeCycleB