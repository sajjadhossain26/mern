import Counter from "./Counter";
import Developer from "./Developer";
import Team from "./team/Team";
function App() {
  return (
    <>
      <Counter />
      <Team layout="" bg="black" />
      <Team layout="style-2" bg="green" />
      <Team layout="style-2" bg="orange" />
      <Developer
        title="We are React Developer"
        content="Hello world I am comming from React"
      />
      <Developer
        title="We are IOS Developer"
        content="Hello world I am comming from Ios"
      />
      <Developer
        title="We are Python Developer"
        content="Hello world I am comming from Python"
      />
    </>
  );
}

export default App;
