import { useState } from "react";

const Header=()=>{

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
    setShowForm(!showForm);
    };

    const closeForm = () => {
        setShowForm(false);
      };
    return (
        <div className="header">
            <div className="side-arrow"><img src="https://i.pinimg.com/736x/84/c9/d6/84c9d6c0fb3efa679a9291d5c420a1dd.jpg" alt="" /></div>
            <div className="title">Create Workorder</div>
            <div className="header-btn"  onClick={toggleForm} id="toggleForm">Save</div>
            {showForm && <div className="overlay" onClick={closeForm}></div>}
            <div id="sideBar" className={showForm ? "show" : ""}>
            <form id="myForm">
                <label htmlFor="clientName">Client Name:</label>
                <select type="text" id="clientName" name="clientName">
                    <option type="text" id="clientName"value="A">A</option>
                    <option type="text" id="clientName" value="B">B</option>
                    <option type="text" id="clientName" value="C">C</option>
                </select>
                <label htmlFor="startDate">Date of Commencement:</label>
                <input type="date" id="startDate" name="startDate"/>
                <label htmlFor="endDate">Date of Completion:</label>
                <input type="date" id="endDate" name="endDate"/>
                <label htmlFor="rfqCode">RFQ Code:</label>
                <input type="text" id="rfqCode" name="rfqCode"/>
                <input type="submit" value="Submit" className="header-btn"/>
            </form>
            </div>
        </div>
    )
}

export default Header;