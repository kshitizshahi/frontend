import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { table } from '../actions/tableAction';

const TableScreen = (props) => {
    const [tableNo, setTableNo] = useState('');
    const dispatch = useDispatch();

    const tableDetails = useSelector((state) => state.tableInfo)
    const {tableInfo, error } = tableDetails;

    const submitHandler = (e) => {
        e.preventDefault();
        
        dispatch(table(tableNo)); 
    }

    useEffect(() => {
        if (tableInfo){
            props.history.push('/view');
        }

    }, [props.history, tableInfo]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Additional Details</h1>
                </div>
                <div>
                    <h3>{error && error}</h3> 
                </div>
                <div>
                    <label htmlFor='tableNo'>Table no:</label>
                    <input type='text' id='tableNo' placeholder='Enter table number' required
                        onChange={(e) => setTableNo(e.target.value)}>
                    </input>
                </div>
               
                <div>
                    <label />
                    <button className='primary' type='submit'>Send</button>
                </div>

            </form>


        </div>
    )
}

export default TableScreen;
