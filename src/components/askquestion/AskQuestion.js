const AskQuestion = ({props, topic, setTopic, workOn, setWorkOn, tryAchieve, setTryAchieve, issue, setIssue, attempted, setAttempted}) => {
  return (
    <div>
      <form>
        <label htmlFor="topic">Topic:</label>
        <input
          type="text"
          id="topic"
          value={topic ? topic : ""}
          placeholder="topic"
          onChange={(e) => setTopic(e.target.value)}
        />
        <label htmlFor="What have you worked on?">What have you worked on?</label>
        <input
          type="text"
          id="workOn"
          value={workOn ? workOn : ""}
          placeholder="What have you worked on?"
          onChange={(e) => setWorkOn(e.target.value)}
        />
        <label htmlFor="What are you trying to achieve?">What are you trying to achieve?</label>
        <input
          type="text"
          id="tryAchieve"
          value={tryAchieve ? tryAchieve : ""}
          placeholder="What are you trying to achieve?"
          onChange={(e) => setTryAchieve(e.target.value)}
        />
        <label htmlFor="What is the issue you are having?">What is the issue you are having?</label>
        <input
          type="text"
          id="issue"
          value={issue ? issue : ""}
          placeholder="What is the issue you are having?"
          onChange={(e) => setIssue(e.target.value)}
        />
        <label htmlFor="What have you attempted?">What have you attempted?</label>
        <input
          type="text"
          id="attempted"
          value={attempted ? attempted : ""}
          placeholder="What have you attempted?"
          onChange={(e) => setAttempted(e.target.value)}
        />
      </form>
    </div>
  );
};

export default AskQuestion;
