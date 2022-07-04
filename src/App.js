import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <section>
        <div className="relative">
          <img
            className="relative-img"
            alt=""
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
          />
          <div className="absolute">
            <h1>Anil Kumar</h1>
            <p>Senior Software Engineer</p>
            <button>Know More</button>
          </div>
        </div>
      </section>
      <section className="margin-top">
        <div className="relative_1">
          <img
            className="relative-img_1"
            alt=""
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
          />
          <div className="absolute_1">
            <h1>Anil Kumar</h1>
            <p>Senior Software Engineer</p>
            <button>Know More</button>
          </div>
        </div>
      </section>
        </>
  );
}

export default App;
