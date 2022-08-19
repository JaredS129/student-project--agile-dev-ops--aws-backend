const FilterForm = ({ useAnswered, setUseAnswered, useTopic, setUseTopic }) => {
  return (
    <form>
      <label htmlFor="answered">Filter by:</label>
      <select
        id="answered"
        name="answered"
        value={useAnswered}
        onChange={(x) => {
          setUseAnswered(x.target.value);
        }}
      >
        <option value="unanswered">not answered</option>
        <option value="answered">answered</option>
        <option value="both">both</option>
      </select>
      <label htmlFor="topics">Topic:</label>
      <select
        id="topics"
        name="topics"
        value={useTopic}
        onChange={(x) => {
          setUseTopic(x.target.value);
        }}
      >
        <option value="All">All</option>
        <option value="How-to">How-to</option>
        <option value="React">React</option>
        <option value="Bugs">Bugs</option>
      </select>
    </form>
  );
};

export default FilterForm;
