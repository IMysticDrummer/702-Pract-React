import EnterElement from '../common/EnterElement';
import SelectElement from '../common/SelectElement';
import RadioEnter from './RadioEnter';

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
  const enterElementHandleChange = (event) => {
    if (event.target.name === 'name') {
      onFiltering({ ...filters, [event.target.name]: event.target.value });
    }
    if (event.target.name === 'sellFilter') {
      console.log(event.target.value);
      console.log(event.target.name);
      onFiltering({ ...filters, [event.target.name]: event.target.value });
    }
    // if (event.target.name === 'price') {
    //   setForm({ ...form, [event.target.name]: event.target.value });
    // }
    if (event.target.name === 'tags') {
      const { selectedOptions } = event.target;
      const newTags = [...selectedOptions].map((value) => value.value);

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
        multiple
        options={selectOptions}
        onChange={enterElementHandleChange}
      />
      <RadioEnter
        label='Sell/Buy Filter'
        name='sellFilter'
        values={[
          { id: 'all', value: '', label: 'All' },
          { id: 'sell', value: 'sell', label: 'Sell' },
          { id: 'buy', value: 'buy', label: 'Buy' },
        ]}
        onChange={enterElementHandleChange}
        value={filters.sellFilter}
      />
    </section>
  );
};

export default FiltersAdsElement;
