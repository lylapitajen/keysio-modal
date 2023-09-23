import Image from 'next/image';

const UserProperty = ({ property }) => (
    <div className="user-property">
        <Image
            className="user-property-icon"
            priority
            src="images/house-icon.svg"
            height={40}
            width={40}
            alt="User Property Icon"
        />
        <div className="user-property-info">
            <h3>Your property</h3>
            <span>{property.address}</span>
        </div>
    </div>
);

export default UserProperty;