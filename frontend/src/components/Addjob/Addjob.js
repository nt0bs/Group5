import React, {useState} from "react"
import "../Addjob/Addjob.css"
function AddJob({addJob}){
    const [title, setTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [minQualification, setMinQualification] = useState('');
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [salaryRange, setSalaryRange] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (title && companyName && jobDescription && responsibilities &&  minQualification && experience
            && location && employmentType && salaryRange && expirationDate
           ) 
            {
            

            const newJob = {title, companyName, jobDescription, responsibilities, minQualification, experience
                , location, employmentType, salaryRange, expirationDate};
            
           

            addJob(newJob);
            setTitle('');
            setCompanyName('');
            setJobDescription('');
            setResponsibilities('');
            setMinQualification('');
            setExperience('');
            setLocation('');
            setEmploymentType('');
            setSalaryRange('');
            setExpirationDate('');

            }
    };

    return (
        <form className="Job-Listing-Form" onSubmit = {handleSubmit}>
            <h2> Add New Job</h2>
            <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            />

            <input
            type="text"
            placeholder="Job Description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            />

            <input
            type="text"
            placeholder="Responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            />

            <input
            type="text"
            placeholder="Minimum Qualification"
            value={minQualification}
            onChange={(e) => setMinQualification(e.target.value)}
            />

            <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            />

            <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />

            <select id = "Employment Type" value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}>
            <option value = "" disabled>Select Employment Type</option>
            <option value = "Contract"> Contract</option> 
            <option value = "Permanent"> Permanent</option> 
            <option value = "Part-time"> Part-time</option>      
            
            </select>

            <input
            type="date"
            placeholder="Expiration Date"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            />

            <input
            type="text"
            placeholder= "Salary Range"
            value= {salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
            />

            
            <button type = "submit"> Add Job</button>
        </form>
    );
}

export default AddJob;