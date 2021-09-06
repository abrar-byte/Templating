// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <svg class="gambar" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="21.25" cy="21.25" r="21.25" fill="#E9B327" />
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="10" y="9" width="17" height="25">
          <rect x="26.7537" y="33.2832" width="16.1272" height="23.9062" rx="3" transform="rotate(-180 26.7537 33.2832)" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <ellipse cx="11.3476" cy="21.3301" rx="15.1644" ry="11.9531" transform="rotate(-180 11.3476 21.3301)" fill="white" />
        </g>
        <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="26" y="21" width="8" height="13">
          <rect x="26.9424" y="21.0576" width="6.68253" height="12.2872" rx="3" fill="white" />
        </mask>
        <g mask="url(#mask1)">
          <path d="M39.5383 27.2012C39.5383 30.5943 36.7251 33.3449 33.2548 33.3449C29.7844 33.3449 26.9712 30.5943 26.9712 27.2012C26.9712 23.8082 29.7844 21.0576 33.2548 21.0576C36.7251 21.0576 39.5383 23.8082 39.5383 27.2012Z" fill="white" />
        </g>
      </svg>


      <h2 class="Text">David Cynman</h2>
      <a class="nav1" href="#work">Work</a>
      <a class="nav2" href="#about">About</a>




      <body >
        <p class="Text2">
          I’m a Santa Barbara based UX/UI designer with a background in psychological and anthropological research. Empathy and empiricism drive my process.
        </p><br />
        <br />
        <p><a class="nav3" href="#b">Get in touch</a></p>


      </body>
    </div>
  );
}

export default App;
