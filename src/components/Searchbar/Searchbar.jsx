import s from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Component } from 'react';

class Searchbar extends Component {
  state = {};

  static propTypes = {
    onInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    keyword: PropTypes.string.isRequired,
  };

  handleSubmit = event => {
    event.preventDefault();
    const keyword = event.target.keyword.value.trim();
    if (keyword === '') {
      toast.error(
        "It looks like you asked the same query. Please enter another query."
      );
      return;
    }
    if (this.props.keyword === keyword) {
      toast.error(
        "It looks like you asked the same query. Please enter another query."
      );
      return;
    }
    this.props.onInput(keyword);
    this.props.onSubmit();
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchform} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.button}>
            <ImSearch />
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="keyword"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
