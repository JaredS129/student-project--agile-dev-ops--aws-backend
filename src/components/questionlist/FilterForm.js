import "./FilterForm.css";

const FilterForm = ({ answered, setAnswered, topic, setTopic }) => {
  return (
    <form className="form-format">
      <label htmlFor="answered">Filter by:</label>
      <select
        className="filter-format"
        id="answered"
        name="answered"
        value={answered}
        onChange={(x) => {
          setAnswered(x.target.value);
        }}
      >
        <option value={false}>Not answered</option>
        <option value={true}>Answered</option>
        <option value={undefined}>Both</option>
      </select>
      <label htmlFor="topics">Topic:</label>
      <select
        className="filter-format"
        id="topics"
        name="topics"
        value={topic}
        onChange={(x) => {
          setTopic(x.target.value);
        }}
      >
        <option value={undefined}>All</option>
        <option value="how-to">How-to</option>
        <option value="React">React</option>
        <option value="Bugs">Bugs</option>
      </select>
    </form>
  );
};

export default FilterForm;
