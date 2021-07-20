import './Loader.css';

const Loader = () => {

    return (
        <div className="loader-wrapper">
            <svg className="rain-loader" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="cloud" d="M101.522 265.646C3.52229 265.646 22.5223 167.646 76.5223 162.646C33.5223 61.646 175.522 14.646 222.522 97.646C256.522 67.646 345.522 91.646 323.522 167.646C358.522 162.646 380 198 358.522 225.646C364.5 237 361.5 265.646 323.522 265.646" stroke="white" strokeWidth="25" strokeLinecap="round"/>
                <line id="raindrop1" x1="132.384" y1="241.092" x2="158.59" y2="313.093" stroke="white" strokeWidth="25" strokeLinecap="round"/>
                <line id="raindrop3" x1="271.895" y1="233.08" x2="301.919" y2="315.572" stroke="white" strokeWidth="25" strokeLinecap="round"/>
                <line id="raindrop2" x1="194.895" y1="221.08" x2="235.927" y2="333.816" stroke="white" strokeWidth="25" strokeLinecap="round"/>
            </svg>
        </div>
    )
}

export default Loader;