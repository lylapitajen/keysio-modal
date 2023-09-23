import UserProperty from '@/app/components/UserProperty';
import NonUserProperty from '@/app/components/NonUserProperty';


const Property = ({ property }) => {
    return (
        <div className="property">
            <div className="property-number-area">
                <div className="number-circle">{property.number}</div>
                <div className="vertical-dashed-line"></div>
            </div>
            
            <div className="property-card-area">
                {property.isUsersProperty ? (
                    <UserProperty property={property} />
                ) : (
                    <NonUserProperty property={property} />
                )}
            </div>
            
        </div>
    )
}

export default Property;