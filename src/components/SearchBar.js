import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label htmlFor="">Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})}
                        />
                    </div>
                    <p>{this.state.term}</p>
                </form>
            </div>
        )
    }
}

export default SearchBar;
