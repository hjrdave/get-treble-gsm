import React from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { useInput, useDebounce } from '../hooks';

const CustomToggle = React.forwardRef(({ onClick }, ref) => {

    const { value, bind, setValue } = useInput('');

    const handleOnKeyPress = useDebounce((event, value) => {
        console.log(value)
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }, 300);

    return (
        <>
            <Form role="search" className={'api-search'} autoComplete="off">
                <InputGroup className="mb-3 pr-4">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><i className="fas fa-search"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        ref={ref}
                        size={'sm'}
                        id="search-input"
                        name="keywords"
                        placeholder="Search Docs"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        {...bind}
                        onKeyPress={(e) => { e.persist(); handleOnKeyPress(e, value) }}
                        onClick={(e) => {
                            e.preventDefault();
                            onClick(e);
                        }}
                    />
                </InputGroup>
            </Form>
        </>
    )
});

export default CustomToggle;