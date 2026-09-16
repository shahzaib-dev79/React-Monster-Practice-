export default function InteractiveRendering() {
  return (
    <div>
      <Button />
      <p onCopy={CopyHandler}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam ab quia
        fuga, quae illo laudantium doloremque ducimus natus iusto esse nemo
        distinctio numquam totam culpa eligendi soluta, repellendus itaque
        debitis!
      </p>
    </div>
  );
}
const ClickHandler = () => {
  return console.log("You just Clicked me ");
};

const Button = () => {
  return <button onClick={ClickHandler}>Click</button>;
};

const CopyHandler = () => {
  return console.log("Stop Copying my Content");
};
