import { useState } from "react";
import "./AskQuestion.css";
import { postQuestion } from "../../api";

const AskQuestion = () => {
  const [formData, setFormData] = useState({
    title: "",
    working_on: "",
    trying_achieve: "",
    problem: "",
    tried: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await postQuestion(formData);
    alert("Question Asked")
  };

  return (
    <div>
      <h2 className="h2-format">What's your question?</h2>
      <form onSubmit={handleSubmit}>
        <label className="label-format" htmlFor="topic">
          Title:
        </label>
        <div>
          <input
            className="topic-format"
            type="text"
            id="title"
            value={formData.title}
            placeholder="Enter your topic..."
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <label className="label-format" htmlFor="What have you worked on?">
          What have you worked on?
        </label>
        <div>
          <input
            className="input-format"
            type="text"
            id="working_on"
            value={formData.working_on}
            placeholder=""
            onChange={(e) =>
              setFormData({ ...formData, working_on: e.target.value })
            }
          />
        </div>
        <label
          className="label-format"
          htmlFor="What are you trying to achieve?"
        >
          What are you trying to achieve?
        </label>
        <div>
          <input
            className="input-format"
            type="text"
            id="trying_achieve"
            value={formData.trying_achieve}
            placeholder=""
            onChange={(e) =>
              setFormData({ ...formData, trying_achieve: e.target.value })
            }
          />
        </div>
        <label
          className="label-format"
          htmlFor="What is the issue you are having?"
        >
          What is the issue you are having?
        </label>
        <div>
          <input
            className="input-format"
            type="text"
            id="problem"
            value={formData.problem}
            placeholder=""
            onChange={(e) =>
              setFormData({ ...formData, problem: e.target.value })
            }
          />
        </div>
        <label className="label-format" htmlFor="What have you attempted?">
          What have you attempted?
        </label>
        <div>
          <input
            className="input-format"
            type="text"
            id="tried"
            value={formData.tried}
            placeholder=""
            onChange={(e) =>
              setFormData({ ...formData, tried: e.target.value })
            }
          />
        </div>
      </form>
      <button onClick={handleSubmit} className="button-format">
        Ask
      </button>
    </div>
  );
};

export default AskQuestion;
