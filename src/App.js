import "./styles.css";

function Books({ arr }) {
  console.log(arr);
  return (
    <div>
      <h1>{arr.join()}</h1>
    </div>
  );
}
export default function App() {
  const arr = ["shrenii", "sutar", "abcd", "dsfhvd"];

  return (
    <div>
      <Books arr={arr} />
    </div>
  );
}
