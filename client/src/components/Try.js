import React, { useState } from 'react';

const Try = () => {
  const data = {
    "Packages": [
      {
        "name": "Civil 1",
        "rate": "100",
        "total": "₹50,000",
        "activities": [
          {
            "name": "Activity 1",
            "rate": "200",
            "total": "₹20,000",
            "workItems": [
              {"name": "Work Item 1", "total": "₹5,000"},
              {"name": "Work Item 2", "total": "₹7,000"},
              {"name": "Work Item 3", "total": "₹8,000"}
            ]
          },
          {
            "name": "Activity 2",
            "rate": "150",
            "total": "₹15,000",
            "workItems": [
              {"name": "Work Item 4", "total": "₹3,000"},
              {"name": "Work Item 5", "total": "₹5,000"},
              {"name": "Work Item 6", "total": "₹7,000"}
            ]
          },
        ]
      },
      {
        "name": "Civil 2",
        "rate": "100",
        "total": "₹50,000",
        "activities": [
          {
            "name": "Activity 1",
            "rate": "200",
            "total": "₹20,000",
            "workItems": [
              {"name": "Work Item 1", "total": "₹5,000"},
              {"name": "Work Item 2", "total": "₹7,000"},
              {"name": "Work Item 3", "total": "₹8,000"}
            ]
          },
          {
            "name": "Activity 2",
            "rate": "150",
            "total": "₹15,000",
            "workItems": [
              {"name": "Work Item 4", "total": "₹3,000"},
              {"name": "Work Item 5", "total": "₹5,000"},
              {"name": "Work Item 6", "total": "₹7,000"}
            ]
          },
        ]
      },
      {
        "name": "Civil 3",
        "rate": "100",
        "total": "₹50,000",
        "activities": [
          {
            "name": "Activity 1",
            "rate": "200",
            "total": "₹20,000",
            "workItems": [
              {"name": "Work Item 1", "total": "₹5,000"},
              {"name": "Work Item 2", "total": "₹7,000"},
              {"name": "Work Item 3", "total": "₹8,000"}
            ]
          },
          {
            "name": "Activity 2",
            "rate": "150",
            "total": "₹15,000",
            "workItems": [
              {"name": "Work Item 4", "total": "₹3,000"},
              {"name": "Work Item 5", "total": "₹5,000"},
              {"name": "Work Item 6", "total": "₹7,000"}
            ]
          },
        ]
      }
    ]
  };

  
  const [isAllPackagesSelected, setIsAllPackagesSelected] = useState(false);
  const [packageSelection, setPackageSelection] = useState({});

  const toggleAllPackagesSelect = () => {
    setIsAllPackagesSelected(!isAllPackagesSelected);
    const updatedSelection = {};
    for (const pkg of data.Packages) {
      updatedSelection[pkg.name] = !isAllPackagesSelected;
    }
    setPackageSelection(updatedSelection);
  };

  const togglePackageSelect = (packageName) => {
    setPackageSelection((prevSelection) => ({
      ...prevSelection,
      [packageName]: !prevSelection[packageName]
    }));
  };

  // Work Item Component
  const WorkItem = ({ item, isSelected, onSelect }) => {
    const [isChecked, setIsChecked] = useState(isSelected);

    const handleSelect = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onSelect(newChecked);
    };

    return (
      <div style={{marginLeft:"40px"}}>
         <table >
            <tr>
            <td width={"490px"}>
              <input type="checkbox" checked={isChecked} onChange={handleSelect} style={{height:"20px",width:"20px",marginRight:"20px"}} />
              <span>{item.name}</span>
            </td>
            <td width={"513px"}>
              
               
            </td>
            <td>
              {item.total}
            </td>
            </tr>
        </table>
      </div>
    );
  };

  // Activity Component
  const Activity = ({ activity}) => {
    const [isExpanded, setIsExpanded] = useState(false);



    return (
      <div style={{marginLeft:"20px"}}>
         <table >
            <tr>
            <td width={"530px"}>
            <input type="checkbox"  style={{height:"20px",width:"20px",marginRight:"20px",boxShadow:" 0 0 5px 2px rgba(0, 0, 0, 0.2);"}} />
            <span>{activity.name}</span>
            </td>
            <td width={"513px"}>
              {activity.rate}
            </td>
            <td>
              {activity.total}
            </td>
            <td style={{textAlign:'right'}}>
          <button style={{border:"none"}} onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '▲' : '▼'}
          </button>
          </td>
          </tr>
          </table>
        {isExpanded &&
          activity.workItems.map((item, index) => (
            <WorkItem
              key={index}
              item={item}
            />
          ))}
      </div>
    );
  };

  // Package Component
  const Package = ({ pkg }) => {
    
    const [isExpanded, setIsExpanded] = useState(false);
    
    const [isSelected, setIsSelected] = useState(false);

    const toggleLocalPackageSelect = () => {
      setIsSelected(!isSelected);
      togglePackageSelect(pkg.name);
    };

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div>
          <table >
            <tr>
              <td width={"570px"}>
                <input type="checkbox"  style={{height:"20px",width:"20px",marginRight:"20px",boxShadow:" 0 0 5px 2px rgba(0, 0, 0, 0.7),"}} 
                 checked={isSelected || packageSelection[pkg.name]}
                 onChange={toggleLocalPackageSelect}
                />
                <span>{pkg.name}</span>
              </td>
              <td width={"513px"}>
                
                  {pkg.rate}
               
              </td>
              <td>
             
                  {pkg.total}
               
              </td>
              <td style={{textAlign:'right'}}>
              <button onClick={toggleExpand} style={{border:"none"}}>
                {isExpanded ?  <img className="plus"src='https://th.bing.com/th/id/R.502a9c48f0a6837a8079d504b1ada00c?rik=etRbFieFmtrSHA&riu=http%3a%2f%2fwiki.openstreetmap.org%2fw%2fimages%2fthumb%2f9%2f90%2fSymbol_Green_Minus.svg%2f1024px-Symbol_Green_Minus.svg.png&ehk=Nm%2fRfuAs4q77drL6eJnTrmr8Q9kL966rqqAxVGHECz0%3d&risl=&pid=ImgRaw&r=0'/>: <img className="plus"src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/17-512.png" alt="" /> }
              </button>
              </td>
            </tr>
          </table>
        {isExpanded && (
          <div style={{ paddingLeft: '20px' }}>
            {pkg.activities.map((activity, index) => (
              <div key={index}>
                <Activity activity={
                  activity
                }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Main App Component
  const App = ({data}) => (
    


    <div>
     
        <table >
        <tr>
        <th style={{display:'flex'}}>
          <input type="checkbox" style={{height:"20px",width:"20px",marginRight:"20px",boxShadow:" 0 0 5px 2px rgba(0, 0, 0, 0.2);"}}
          checked={isAllPackagesSelected}
          onChange={toggleAllPackagesSelect}
          />
          <strong>Packages</strong>
        </th>
        <th>
          <strong>Rates</strong><span>(in sqft)</span>
        </th>
        <th>
          <strong>Total</strong>
        </th>
        <th>
          <button >
              
          </button>
        </th>

        </tr>
        </table>
      
      {data.Packages.map((pkg, index) => (
        <Package key={index} pkg={pkg} 
      
        />
      ))}
    </div>
  );

  return <App data={data} />;
};

export default Try;