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
              {"name": "Work Item 1", "total": "₹3,000"},
              {"name": "Work Item 2", "total": "₹5,000"},
              {"name": "Work Item 3", "total": "₹7,000"}
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
              {"name": "Work Item 1", "total": "₹3,000"},
              {"name": "Work Item 2", "total": "₹5,000"},
              {"name": "Work Item 3", "total": "₹7,000"}
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
              {"name": "Work Item 1", "total": "₹3,000"},
              {"name": "Work Item 2", "total": "₹5,000"},
              {"name": "Work Item 3", "total": "₹7,000"}
            ]
          },
        ]
      },
      {
        "name": "Civil 4",
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
              {"name": "Work Item 1", "total": "₹3,000"},
              {"name": "Work Item 2", "total": "₹5,000"},
              {"name": "Work Item 3", "total": "₹7,000"}
            ]
          },
        ]
      }
    ]
  };

  // Work Item Component
  const WorkItem = ({ item ,isSelected, onSelect}) => {
    const [isChecked, setIsChecked] = useState(isSelected);

    const handleSelect = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onSelect(newChecked);
    };

    return (
      <div className='package-main'>
        <div className='pack-title2'>
          <div>
        <input type="checkbox" checked={isChecked} onChange={handleSelect}  />
        <span>{item.name}</span>
        </div>
        
        <span style={{ marginLeft: '20px' }}>{item.total}</span>
        </div>
      </div>
    );
  };

  // Activity Component
  const Activity = ({ activity ,isSelected,onSelect}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [activitySelection, setActivitySelection] = useState(
      activity.workItems.map(() => isSelected)
    );

    const handleWorkItemSelect = (index, isChecked) => {
      const newActivitySelection = [...activitySelection];
      newActivitySelection[index] = isChecked;
      setActivitySelection(newActivitySelection);
      onSelect(newActivitySelection.every((item) => item));
    };

    return (
      <div className='package-main'>
        <div className='pack-title1' style={{ display: 'flex', alignItems: 'center' }}>
          <div  className="input" style={{ paddingLeft: '70px' }}>
            <input type="checkbox" style={{marginRight:"20px"}} checked={isSelected} onChange={onSelect} />
          <strong>{activity.name}</strong>
          </div>
          <span style={{ marginLeft: '20px' }}>{activity.rate}</span>
          <span style={{ marginLeft: '20px' }}>{activity.total}</span>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>
        {isExpanded && activity.workItems.map((item, index) => <WorkItem key={index} item={item}  isSelected={activitySelection[index]}
              onSelect={(isChecked) => handleWorkItemSelect(index, isChecked)} />)}
      </div>
    );
  };

  // Package Component
  const Package = ({ pkg }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [activitySelection, setActivitySelection] = useState({});

    const handleSelect = () => {
      const newSelected = !isSelected;
      setIsSelected(newSelected);

      // Select all activities
      const newActivitySelection = {};
      pkg.activities.forEach((_, index) => {
        newActivitySelection[index] = newSelected;
      });
      setActivitySelection(newActivitySelection);
    };

    const handleActivitySelect = (index) => {
      const newActivitySelection = { ...activitySelection };
      newActivitySelection[index] = !newActivitySelection[index];
      setActivitySelection(newActivitySelection);
      setIsSelected(Object.values(newActivitySelection).every((value) => value));
    };

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div className='package-main'>
        <div  className="pack-title1" style={{ display: 'flex', alignItems: 'center' }}>
          <div className='input'>
            <input type="checkbox" checked={isSelected} onChange={handleSelect} />
            <strong>{pkg.name}</strong>
          </div>
          
          <div>
             {pkg.rate}
          </div>
          <div >
             {pkg.total}
          </div>
          <button  className="add-btn" onClick={toggleExpand}>
            {isExpanded ? <img className="plus"src='https://th.bing.com/th/id/R.502a9c48f0a6837a8079d504b1ada00c?rik=etRbFieFmtrSHA&riu=http%3a%2f%2fwiki.openstreetmap.org%2fw%2fimages%2fthumb%2f9%2f90%2fSymbol_Green_Minus.svg%2f1024px-Symbol_Green_Minus.svg.png&ehk=Nm%2fRfuAs4q77drL6eJnTrmr8Q9kL966rqqAxVGHECz0%3d&risl=&pid=ImgRaw&r=0'/>: <img className="plus"src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/17-512.png" alt="" /> }
          </button>
        </div>
        {/* '▼' */}
        {isExpanded &&
          pkg.activities.map((activity, index) => (
            <div key={index} style={{ paddingLeft: '20px' }}>
              <Activity activity={activity} isSelected={activitySelection[index]}
                  onSelect={() => handleActivitySelect(index)} />
            </div>
          ))}
          
      </div>
    );
  };

  // Main App Component
  const App = ({ data }) => (
    <div className='package-main'>
    <div className="pack-title"  style={{ paddingRight: '10px' }}>
          <div>
            <input type="checkbox" />
            <strong>Packages</strong>
            </div>
    <strong className='rate'>Rates<span>(in sqft)</span></strong>
    <strong className='total'>Total</strong>
    </div>
    
    {data.Packages.map((pkg, index) => (
      <Package key={index} pkg={pkg} />
    ))}
  </div>
  );

  return <App data={data} />;
};

export default Try;
