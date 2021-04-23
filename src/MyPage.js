import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RangeSlider from "reactrangeslider";

class MyPage extends Component {
  render() {
     const  value = { start: 20, end: 80 };
    return (
      <div>
        MYPAGE
             <RangeSlider
              value={value}
              min={20}
              max={80}
              onChange={this.onChange}
             >

             </RangeSlider>
      </div>
    );
  }
}

export default MyPage;

// // value={ start: 20, end: 80 }
// const MyPage = (value, onChange) =>{
//   <div>
//     <RangeSlider
//       value={ value }
//       onChange={ onChange }
//       min={ 20 }
//       max={ 100 }
//       step={ 5 }
//     />
//   </div>
//   }
//   export default MyPage;