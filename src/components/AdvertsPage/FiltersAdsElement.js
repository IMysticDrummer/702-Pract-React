import EnterElement from '../common/EnterElement';
import SelectElement from '../common/SelectElement';
import Slider from '../common/Slider';
import RadioEnter from './RadioEnter';

/**
 * Component to filtering ads.
 *
 * @param {Objects} Objects containing the configuration for each children
 * @returns {React.Component} containing the advertisement filters
 */
const FiltersAdsElement = ({
  enterConfig,
  selectConfig,
  radioConfig,
  sliderConfig,
  sliderChangeHandle,
  enterElementHandleChange,
  ...props
}) => {
  return (
    <section>
      <EnterElement
        {...enterConfig}
        onChange={enterElementHandleChange}
      />
      <SelectElement
        {...selectConfig}
        onChange={enterElementHandleChange}
        handleReset={enterElementHandleChange}
      />
      <RadioEnter
        {...radioConfig}
        onChange={enterElementHandleChange}
      />

      <Slider
        {...sliderConfig}
        min={sliderConfig.sliderRange.range[0]}
        max={sliderConfig.sliderRange.range[1]}
        range={sliderConfig.sliderRange.range}
        marks={sliderConfig.sliderRange.marks}
        onChange={sliderChangeHandle}
      />
    </section>
  );
};

export default FiltersAdsElement;
