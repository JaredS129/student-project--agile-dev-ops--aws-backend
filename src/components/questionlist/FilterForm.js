const FilterForm = ({ useAnswered, setUseAnswered }) => {
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
    </form>
  );
};

export default FilterForm;
