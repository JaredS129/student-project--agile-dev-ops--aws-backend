import "./FilterForm.css";

const FilterForm = ({
  answered,
  setAnswered,
  topic,
  setTopic,
  topics = [],
}) => {
  return (
    <form className="form-format">
      <label htmlFor="answered">Filter by:</label>
      <select
        data-testid="answered-dropdown"
        className="filter-format"
        id="answered"
        name="answered"
        value={answered}
        onChange={(x) => {
          setAnswered(x.target.value === "Both" ? undefined : x.target.value);
        }}
      >
        <option value={undefined}>Both</option>
        <option value={false}>Not answered</option>
        <option value={true}>Answered</option>
      </select>
      <label htmlFor="topics">Topic:</label>
      <select
        data-testid="topic-dropdown"
        className="filter-format"
        id="topics"
        name="topics"
        value={topic}
        onChange={(x) => {
          setTopic(x.target.value === "All" ? undefined : x.target.value);
        }}
      >
        <option value={undefined}>All</option>
        {topics.map((t) => (
          <option key={t.topic_id} value={t.topic_name}>
            {t.topic_name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default FilterForm;
