import React, {Component, PropTypes} from 'react'
import Input from '../components/Input';

class UrlInput extends Component {
  render () {
    const {onUrlChange, urlValue} = this.props;

    return (
      <div className="grid">
        <button className="btn method-dropdown">
          POST&nbsp;&nbsp;<i className="fa fa-caret-down"></i>
        </button>
        <Input type="text"
               placeholder="https://google.com"
               initialValue={urlValue}
               onChange={onUrlChange}/>
        <button className="btn send-request-button">
          <i className="fa fa-repeat txt-xl"></i>
        </button>
      </div>
    )
  }
}

UrlInput.propTypes = {
  onUrlChange: PropTypes.func.isRequired,
  urlValue: PropTypes.string.isRequired
};

export default UrlInput;