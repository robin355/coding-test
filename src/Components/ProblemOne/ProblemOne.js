import React, { useState } from 'react';

function ProblemOne() {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [tasks, setTasks] = useState([]);
    const [submittedName, setSubmittedName] = useState('');
    const [submittedStatus, setSubmittedStatus] = useState('');
    const [activeOnly, setActiveOnly] = useState(false);
    const [completeOnly, setCompleteOnly] = useState(false);
    const [sortOrder, setSortOrder] = useState('ascending');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = { name, status };
        setTasks([...tasks, newTask]);
        setSubmittedName(name);
        setSubmittedStatus(status);
        setName('');
        setStatus('');
    };

    const handleActiveFilter = () => {
        setActiveOnly(!activeOnly);
        setCompleteOnly(false);
    };

    const handleCompleteFilter = () => {
        setCompleteOnly(!completeOnly);
        setActiveOnly(false);
    };

    const handleAllFilter = () => {
        setActiveOnly(false);
        setCompleteOnly(false);
    };

    let filteredTasks = tasks;
    if (activeOnly) {
        filteredTasks = tasks.filter(task => task.status === 'active');
    } else if (completeOnly) {
        filteredTasks = tasks.filter(task => task.status === 'complete');
    }

    if (sortOrder === 'ascending') {
        filteredTasks = filteredTasks.sort((a, b) => {
            if (a.status === 'active' && b.status !== 'active') {
                return -1;
            } else if (a.status === 'complete' && b.status !== 'active' && b.status !== 'complete') {
                return -1;
            } else if (a.status !== 'active' && a.status !== 'complete' && b.status === 'active') {
                return 1;
            } else if (a.status !== 'active' && a.status !== 'complete' && b.status === 'complete') {
                return 1;
            } else {
                return a.name.localeCompare(b.name);
            }
        });
    } else {
        filteredTasks = filteredTasks.sort((a, b) => {
            if (a.status === 'active' && b.status !== 'active') {
                return 1;
            } else if (a.status === 'complete' && b.status !== 'active' && b.status !== 'complete') {
                return 1;
            } else if (a.status !== 'active' && a.status !== 'complete' && b.status === 'active') {
                return -1;
            } else if (a.status !== 'active' && a.status !== 'complete' && b.status === 'complete') {
                return -1;
            } else {
                return b.name.localeCompare(a.name);
            }
        });
    }

    return (
        <div className='p-[200px]'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        className='input input-bordered '
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <input
                        className='input input-bordered mt-4'
                        type="text"
                        id="status"
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                    />
                </div>

                <button className='btn btn-success mt-4' type="submit">Submit</button>
            </form>
            <div className='mt-2'>
                <button className='btn btn-outline btn-primary mr-2' onClick={handleActiveFilter}>
                    {activeOnly ? 'Show All' : 'Active Only'}
                </button>
                <button className='btn btn-outline btn-info mr-2' onClick={handleCompleteFilter}>
                    {completeOnly ? 'Show All' : 'Complete Only'}
                </button>
                <button className='btn btn-active btn-accent mr-2' onClick={handleAllFilter}>All</button>
                <button className='btn btn-secondary' onClick={() => setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending')}>
                    {sortOrder === 'ascending' ? 'Sort Z-A' : 'Sort A-Z'}
                </button>
            </div>
            {filteredTasks.length > 0 ? (
                <div className='overflow-x-auto'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                    </table>
                    {filteredTasks.map((task, index) => (
                        <div key={index}>
                            <tbody>

                                <tr className='table w-full'>
                                    <td>{task.name}</td>
                                    <td>{task.status}</td>
                                </tr>
                            </tbody>


                        </div>

                    ))}
                </div>
            ) : (
                <p>No tasks to display.</p>
            )}
        </div>
    )
}
export default ProblemOne
