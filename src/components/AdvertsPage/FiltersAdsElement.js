import EnterElement from '../common/EnterElement';
import SelectElement, { optionsSelectLogic } from '../common/SelectElement';

/**
 * Component to filtering ads.
 *
 * Configuration:
 * - *selectedOptions*: Array of string with the options for the SelectElement.
 * - *filters*: state variable containing the actual filters. **Important:** As minimun, must be declarated an object {tags:[]}.
 * - *onFiltering*: state function to set the filters.
 *
 * @param {Object} Object containing the configuration
 * @returns {React.Component} containing the advertisement filters
 */
const FiltersAdsElement = ({ selectOptions, filters, onFiltering }) => {
  //const [filters, setFilters] = useState({});

  const enterElementHandleChange = (event) => {
    debugger;
    if (event.target.name === 'name') {
      onFiltering({ ...filters, [event.target.name]: event.target.value });
    }
    // if (event.target.name === 'sale') {
    //   setForm({ ...form, [event.target.name]: event.target.checked });
    // }
    // if (event.target.name === 'price') {
    //   setForm({ ...form, [event.target.name]: event.target.value });
    // }
    if (event.target.name === 'tags') {
      const newTags = optionsSelectLogic(filters.tags, event.target.value);

      onFiltering({ ...filters, [event.target.name]: newTags });
    }
  };

  return (
    <section>
      <EnterElement
        labelText='Name filter'
        name='name'
        type='input'
        value={filters.name}
        onChange={enterElementHandleChange}
      />
      <SelectElement
        label='Tags filter'
        name={'tags'}
        value={filters.tags}
        multiple
        options={selectOptions}
        onChange={enterElementHandleChange}
      />
    </section>
  );
};

export default FiltersAdsElement;
