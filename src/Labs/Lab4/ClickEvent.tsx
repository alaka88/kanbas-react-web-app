import 'bootstrap/dist/css/bootstrap.min.css';
const hello = () => {
  alert("Hello World!");
};
const lifeIs = (good: string) => {
  alert(`Life is ${good}`);
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event" >
      <h2>Click Event</h2>
      <button onClick={hello} className="btn btn-primary mb-3">
        Hello World!
      </button>
      <button onClick={() => lifeIs("Good!")} className="btn btn-success mb-3">
        Life is Good!
      </button>
      <button
        onClick={() => {
          hello();
          lifeIs("Great!");
        }}
        className="btn btn-warning mb-3"
      >
        Life is Great!
      </button>
      <hr />
    </div>
  );
}
