import "./AskQuestion.css";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("You clicked submit.");
};

const AskQuestion = ({
  topic,
  setTopic,
  workOn,
  setWorkOn,
  tryAchieve,
  setTryAchieve,
  issue,
  setIssue,
  attempted,
  setAttempted,
}) => {
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
            value={topic ? topic : ""}
            placeholder="Enter your topic..."
            onChange={(e) => setTopic(e.target.value)}
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
            value={workOn ? workOn : ""}
            placeholder=""
            onChange={(e) => setWorkOn(e.target.value)}
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
            value={tryAchieve ? tryAchieve : ""}
            placeholder=""
            onChange={(e) => setTryAchieve(e.target.value)}
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
            value={issue ? issue : ""}
            placeholder=""
            onChange={(e) => setIssue(e.target.value)}
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
            value={attempted ? attempted : ""}
            placeholder=""
            onChange={(e) => setAttempted(e.target.value)}
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
