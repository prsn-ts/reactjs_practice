import React, { Component } from 'react';

class App extends Component {
    //생성자
    constructor(props){
        super(props);
        //상태값 지정하기
        this.state={
            count:0
        }
    }
    render() {
        return (
            <div>
                <h1>react js 테스트 입니다.</h1>
                <button onClick={
                    /* 클릭했을 때 실행할 함수 */
                    ()=>{
                        alert("클릭!");
                        this.setState({count:this.state.count+1});
                    }
                }>{this.state.count}
                </button>
            </div>
        );
    }
}

export default App;