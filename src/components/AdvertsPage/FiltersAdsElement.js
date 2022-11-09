import EnterElement from '../common/EnterElement';
import SelectElement from '../common/SelectElement';
import Slider from '../common/Slider';
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
const FiltersAdsElement = ({
  selectOptions,
  filters,
  onFiltering,
  radioEnterValues,
  sliderRange,
  sliderChangeHandle,
}) => {
  const enterElementHandleChange = (event) => {
    if (event.target.name === 'name') {
      onFiltering({ ...filters, [event.target.name]: event.target.value });
    }
    if (event.target.name === 'sellFilter') {
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
    if (event.target.name === 'reset') {
      onFiltering({ ...filters, tags: [] });
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
        name='tags'
        multiple
        options={selectOptions}
        onChange={enterElementHandleChange}
        value={filters.tags}
        handleReset={enterElementHandleChange}
      />
      <RadioEnter
        label='Sell/Buy Filter'
        name='sellFilter'
        values={radioEnterValues}
        onChange={enterElementHandleChange}
        value={filters.sellFilter}
      />

      <Slider
        name='slider'
        onChange={sliderChangeHandle}
        min={sliderRange.range[0]}
        max={sliderRange.range[1]}
        range={sliderRange.range}
        marks={sliderRange.marks}
        allowCross={false}
        defaultValue={filters.price}
        value={filters.price}
        step={null}
      />
    </section>
  );
};

export default FiltersAdsElement;
