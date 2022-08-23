import { useState } from "react";
import "./AskQuestion.css";

const AskQuestion = () => {
  const [formData, setFormData] = useState({
    topic: "",
    workOn: "",
    tryAchieve: "",
    issue: "",
    attempted: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2 className="h2-format">What's your question?</h2>
      <form onSubmit={handleSubmit}>
        <label className="label-format" htmlFor="topic">
          Topic:
        </label>
        <div>
          <input
            className="topic-format"
            type="text"
            id="topic"
            value={formData.topic}
            placeholder="Enter your topic..."
            onChange={(e) =>
              setFormData({ ...formData, topic: e.target.value })
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
            id="workOn"
            value={formData.workOn}
            placeholder=""
            onChange={(e) =>  setFormData({ ...formData, workOn: e.target.value })}
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
            id="tryAchieve"
            value={formData.tryAchieve}
            placeholder=""
            onChange={(e) => setFormData({ ...formData, tryAchieve: e.target.value })}
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
            id="issue"
            value={formData.issue}
            placeholder=""
            onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
          />
        </div>
        <label className="label-format" htmlFor="What have you attempted?">
          What have you attempted?
        </label>
        <div>
          <input
            className="input-format"
            type="text"
            id="attempted"
            value={formData.attempted}
            placeholder=""
            onChange={(e) => setFormData({ ...formData, attempted: e.target.value })}
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
