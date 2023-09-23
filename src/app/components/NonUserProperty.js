import { useState } from 'react';

import Image from 'next/image';
import Badge from 'react-bootstrap/Badge';
import { ThreeDotsVertical, ChevronDown, At, TelephoneFill } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import Collapse from 'react-bootstrap/Collapse';

const milestoneImageMapping = {
    completed: '/images/milestone-icons/completed.svg',
    issues_reported: '/images/milestone-icons/issues-reported.svg',
    in_progress: '/images/milestone-icons/in-progress.svg',
    unknown: '/images/milestone-icons/unknown.svg',
};

const milestoneStatusMapping = {
    completed: 'completed',
    issues_reported: 'issues reported',
    in_progress: 'in progress',
    unknown: 'unknown',
}

const MilestoneCompletionOverview = ({ milestones }) => {
    const completedMilestones = milestones.filter((milestone) => milestone.status === 'completed').length;
    const totalMilestones = milestones.length;
    
    return (
        <span><b>{`${completedMilestones}/${totalMilestones}`}</b> Milestones Completed</span>
    )
}


const NonUserProperty = ({ property }) => {
    const [notesOpen, setNotesOpen] = useState(false);
    const [mobileMilestonesOpen, setMobileMilestonesOpen] = useState(true);
    
    return (
        <div className="non-user-property">
            <div className="property-info">
                
                <div className="property-icon-wrap">
                    <Image
                        alt="Property Icon"
                        src={property.image}
                        height={50}
                        width={50}
                        className="property-icon"
                    />
                </div>
                
                <div className="property-info-text">
                    <h4>{property.name}</h4>
                    <span>{property.address}</span>
                </div>
            </div>
            <div className="agent-info">
                <Image
                    alt="Agent"
                    src={property.user.image}
                    height={30}
                    width={30}
                    className="agent-icon"
                />
                
                <div className="agent-info-text">
                    <h5>{property.user.name}</h5>
                    <Badge pill>
                        Agent
                    </Badge>
                </div>
            
            </div>
            
            <div className="agent-contact">
                <a className="agent-email" href={`tel:${property.user.email}`}><At/>{property.user.email}</a>
                <br/>
                <a className="agent-phone" href={`tel:${property.user.phoneNumber}`}><TelephoneFill/>{property.user.phoneNumber}</a>
            </div>
            
            <div className="property-icons">
                <Dropdown drop="start">
                    <Dropdown.Toggle as="div" id="dropdown-toggle">
                        <ThreeDotsVertical/>
                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Request an update</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Edit details</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Add agent</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                <ChevronDown className={notesOpen ? 'chevron open' : 'chevron closed'} onClick={() => setNotesOpen(prevState => !prevState)}/>
            </div>
            
            
            <div className="property-milestones">
                <div className="background-grey-line"></div>
                
                {mobileMilestonesOpen ? (
                    <div className="mobile-grey-line"></div>
                ) : ''}
                
                <div className="milestone-mobile-data">
                    <MilestoneCompletionOverview milestones={property.milestones}/>
                    
                    <span
                        className="toggle-mobile-milestones"
                        onClick={() => setMobileMilestonesOpen(prevState => !prevState)}
                    >
                        {mobileMilestonesOpen ? "Hide" : "View"}
                    </span>
                </div>
                
                <Collapse in={mobileMilestonesOpen}>
                    <div className="milestones">
                        {property.milestones.map((milestone) => (
                            <div className="milestone" key={milestone.key}>
                                <Image
                                    src={milestoneImageMapping[milestone.status]}
                                    alt={milestone.status}
                                    height={24}
                                    width={24}
                                />
                                <div>
                                    <h4>{milestone.name}</h4>
                                    <p>{milestoneStatusMapping[milestone.status]}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Collapse>
                
            </div>
            
             <Collapse in={notesOpen} timeout={1000}>
           
                <div className="property-notes">
                    {property.notes.map((note) => (
                       <div className="note" key={note.createdAt}>
                           <div className="user-info">
                               <Image
                                   alt="User"
                                   src={note.user.image}
                                   height={30}
                                   width={30}
                                   className="user-icon"
                               />
                               
                               <div className="user-info-text">
                                   <h5>{note.user.name}</h5>
                                   <Badge pill>
                                       Agent
                                   </Badge>
                               </div>
                           
                           </div>
                           
                           <p className="comment">{note.comment}</p>
                           
                           <p className="timestamp">{note.createdAt}</p>
                           
                       </div>
                    ))}
                </div>
             
             </Collapse>
        </div>
    );
}

export default NonUserProperty;