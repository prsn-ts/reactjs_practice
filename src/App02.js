import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//기본 App.js의 함수형태인 것을 class 기반으로 만들 수도 있다.
//(함수형태보다 class 형태로 만드면 더 많은 기능을 넣을 수 있다.)
class App extends Component{
    //화면이 렌더링 될 때 호출되는 메소드(render())
    //html 코드가 들어가는 부분은 div 태그 등 어떤 태그로든 감싸야 오류가 안난다.
    //또한 br 태그도 항상 닫아야(/) 한다 아니면 오류가 난다
    render(){
        return (
            <div>
                {/* 주석 입니다. */}
                안녕하세요!
                <img src={logo}/>
                <br
                    //한줄 주석은 self-close(닫는 슬래시, /) 된 곳에서만 사용가능.
                /> 
            </div>
        );
    }
}

export default App;