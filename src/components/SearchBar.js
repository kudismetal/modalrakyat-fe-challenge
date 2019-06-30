import React from 'react';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import SearchBarToggle from './SearchBarToggle';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            dropdownItem: props.searchData,
            searchField: ''
        });
    }

    onSearchBarChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render () {
        const { dropdownItem, searchField } = this.state;

        const filteredItem = dropdownItem.filter((item) => {
            return item.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div>
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle split as={SearchBarToggle} id="dropdown-custom-components" onSearchBarChange={this.onSearchBarChange}>
                        Custom toggle
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            filteredItem.map((item, i) => {
                                return (
                                    <Dropdown.Item eventKey={i} key={i}>{item}</Dropdown.Item>
                                )
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }

}

export default SearchBar;

