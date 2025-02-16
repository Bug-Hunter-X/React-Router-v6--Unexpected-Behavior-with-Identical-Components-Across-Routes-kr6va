```javascript
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <ComponentWithKey key={useLocation().pathname} title="Home" />; }
function About() { return <ComponentWithKey key={useLocation().pathname} title="About" />; }
function Contact() { return <ComponentWithKey key={useLocation().pathname} title="Contact" />; }

function ComponentWithKey({title}){
    return <h1>{title}</h1>
}
export default App; 
```