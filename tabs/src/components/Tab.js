import {useState} from "react";
import "./Tab.css";

const Tab = ({item}) => {

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleClicking = (index) => {

        setActiveTabIndex(index);
    };

    return (
    <>
        <div className="tab-headers">

            {item.map((item, index) =>(
                <div
                    key = {index}
                    className = {`tab-header ${index === activeTabIndex ? 'active' : ''}`}
                    onClick={() => handleClicking(index)}
                >
                    {item.label}
                </div>
            ))}
        </div>
        <div className={"tab-content"}>
            {item[activeTabIndex].content}
        </div>
    </>
        );
};
export default Tab;