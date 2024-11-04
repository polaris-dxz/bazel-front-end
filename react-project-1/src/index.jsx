import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

function Home() {
  console.log('hello world')
  return <div className="hello">hello</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);