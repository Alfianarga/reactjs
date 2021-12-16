const root = document.querySelector('#root'); // const className = "box";
// const element = (
//     <div 
//     className={className}></div>
// );
// function klik(msg) {
//     alert(msg);
// }
// const element = (
//     <button onClick={klik.bind(this, "hai gaes")}>Klik Aku</button>
// );

function App() {
  // const [diklik, setDiklik] = React.useState(false);
  // const [count, setCount] = React.useState(0);
  // React.useEffect(
  //     function () {
  //         // console.log(document.getElementById('judul'));
  //         console.log('exec');
  //         return function () {
  //             console.log('destroy carousel');
  //         }
  //     },
  //     // [diklik, count]
  //     //[]
  // );
  // const [login, setLogin] = React.useState(false);
  // const judulRef = React.useRef(null);
  // if(login) {
  //     return (
  //         <>
  //     <h1>Udah Login, Bang</h1>
  //     <button onClick={function () {
  //         setLogin(false);
  //     }}>Logout</button>
  //     </>
  //     )
  // }
  // React.useEffect(function () {
  //     const judul = document.getElementById('judul');
  //     setTimeout(function () {
  //         judulRef.current.textContent = 'Aplikasi';
  //     },1000);
  // }, []);
  // return (
  //     <>
  //         {/* <h1>Login Dulu, Bang</h1> */}
  //         <h1 ref={judulRef}>Application</h1>
  //         {/* <p>{!login === true && <b>Kamu belum login</b>}</p>
  //         <button
  //             onClick={function () {
  //                 setLogin(true);
  //             }}>Login</button> */}
  //     </>
  // )
  // return (
  //     <>
  //         <h1 id="judul">Hello ini judul</h1>
  //         <button
  //             onClick={function (){
  //                 setDiklik(true);
  //             }}>
  //         Klik aku dong
  //         </button>
  //         <button
  //             onClick={function (){
  //                 setCount(count + 1);
  //             }}>
  //         Tambah
  //         </button>
  //         Nilai saat ini: {count}
  //     </>
  // );
  // const [count, setCount] = React.useState(0);
  // // const count = state[0];
  // // const setCount = state[1];
  // return (
  //     <>
  //         <button onClick={function () {
  //             setCount(count - 1);
  //         }}>
  //             -
  //         </button>
  //         <span>{count}</span>
  //         <button onClick={function () {
  //             setCount(count + 1);
  //         }}>
  //             +
  //         </button>
  //     </>
  // )
  const fruits = ['Apple', 'Orange', 'Grape', 'Lengkeng'];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  }));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root); // tick();
// setInterval(function () {
//     tick()
// } , 1000);