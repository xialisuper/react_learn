import { useState } from "react";

let statues = ["empty", "typing", "submitting", "success", "error"];
export function ListOfGuessForm() {
  return (
    <>
      {statues.map((status) => {
        return (
          <section key={status}>
            <h4>Form {status}</h4>
            <CityGuessForm status={status} />
          </section>
        );
      })}
    </>
  );
}

export default function CityGuessForm() {
  const [answer, setAnswer] = useState("");
  const [error, seterror] = useState(null);
  const [status, setStatus] = useState("typing"); // typing submitting success;

  if (status === "success") {
    return <h1>Thats right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);

      setStatus("success");
    } catch (error) {
      setStatus("typing");

      seterror(error);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>city quiz</h2>
      <p>
        in which city is there a billboard that turns air into drinkable water
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          disabled={status === "submitting"}
          onChange={handleTextareaChange}
        />
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";
      if (shouldError) {
        reject(new Error("good guess but wrong answer. try again"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
