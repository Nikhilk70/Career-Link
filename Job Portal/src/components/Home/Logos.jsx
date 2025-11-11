import React from 'react'
import Apple from "../../assets/cmpy_logos/iOS-Logo.png";
import Infosys from "../../assets/cmpy_logos/Infosys-Logo.png";
import Nvidia from "../../assets/cmpy_logos/Nvidia-Logo.png";
import Tcs from "../../assets/cmpy_logos/Tcs_logo..png";
import IBM from "../../assets/cmpy_logos/IBM-logo.png";
import Intel from "../../assets/cmpy_logos/Intel-Logo.png";
import MS from "../../assets/cmpy_logos/MS-logo.png";
import Meta from "../../assets/cmpy_logos/Meta-Logo.png";
import Sony from "../../assets/cmpy_logos/sony-logo.png";
import Wipro from "../../assets/cmpy_logos/Wipro_Logo.png";
import './Logos.css'


function Logos() {
    const logos = [Apple,Infosys,Nvidia,Tcs,IBM,Intel,MS,Meta,Sony,Wipro]
    return (
        <div className='logo-slider'>
            <div className='logo-track'>
                {logos.concat(logos).map((logo, index) => (
                    <div className='slide' key={index}>
                        <img src={logo} alt="Logo.png" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Logos