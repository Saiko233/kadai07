// import

// import "□□□"
// import "ファイルパス or パッケージ名"
// import './App.css'

// import ◯◯◯ from "□□□"
// import 名前 from "ファイル"
// const 名前 = 0

// import { △△△ } from "□□□"
// const obj = {a: 0, b: 1}
// console.log(obj.a);

// const {a, b } = {a: 0, b: 1}
// console.log(a);

// パッケージを使えるようにしている
import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import axios from "axios";

import TextFiled from "./components/TextField";

function App() {
  // const [count, setCount] = useState(0)
  // const [list, setList] = useState([])
  const [text, setText] = useState("");

  return (
    <div className="wrap">
      <header>
        <img src="/kira.jpeg" />
        <div className="name">
          <h2>MY PROFILE</h2>
          <h3>
            Hey mates!
            <br />
            my name is
          </h3>
          <h4>Kira Yoshikage</h4>
        </div>
      </header>

      <div className="about">
        <h3>About me</h3>
        <p>
          1966年1月30日生まれ。血液型A型。身長175cm。体重65kg。D学院大学文学部卒。デパート「カメユーチェーン」に勤務している。
          <br />
          <br />
          向きは平凡なサラリーマンとして生活しているが、その正体は生まれながらに殺人衝動を持ち、手の綺麗な女性を48人も殺してきた連続殺人鬼。スタンド能力「キラークイーン」により遺体などの証拠を隠滅してきたので、鈴美以外の被害者は行方不明者として扱われている。女性の綺麗な手に対し異常な執着を示す性的嗜好の持ち主。
        </p>
      </div>

      <footer>
        <div className="job">
          <h3>Job</h3>
          <p>
            Office woker <br />
            <span>(Serial killer)</span>
          </p>
        </div>

        <div className="interests">
          <h3>Interests</h3>
          <p>I just want to live quietly,and kill women with beautiful hands</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
