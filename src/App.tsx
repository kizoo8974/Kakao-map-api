import React, { useEffect } from 'react';
import logo from './logo.svg';

declare global {
  interface Window {
    kakao : any
  }
}

function App() {

  useEffect(() => {
    const container = document.getElementById('map')

    

    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    
    var map = new window.kakao.maps.Map(container, options);
  },[])

  return (
    <div>
      <div id='map' style={{
        width: 300,
        height: 300
      }}></div>

    </div>
  );
}

export default App;
