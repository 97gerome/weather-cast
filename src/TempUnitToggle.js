import './TempUnitToggle.css';

const TempUnitToggle = (props) => {

    const { tempUnit, setTempUnit } = props;

    if(tempUnit === "metric"){
        return (
            <div className="temp-unit-toggle-wrapper">
                <div className="temp-unit-toggle-container">
                    <span className="current-temp-unit">C</span>
                    |
                    <span className="temp-unit" onClick={() => setTempUnit("imperial")}>F</span>
                </div>
            </div>
        );
    };
    return (
        <div className="temp-unit-toggle-wrapper">
            <div className="temp-unit-toggle-container">
                <span className="temp-unit" onClick={() => setTempUnit("metric")}>C</span>
                |
                <span className="current-temp-unit" >F</span>
            </div>
        </div>
    );
}

export default TempUnitToggle
