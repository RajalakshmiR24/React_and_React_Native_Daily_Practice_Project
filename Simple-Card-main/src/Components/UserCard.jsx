// Importing PropTypes from the 'prop-types' library
import PropTypes from 'prop-types';
// Functional component 'UserCard' with destructured 'user' prop
const UserCard = ({ user }) => {
  // Extracting 'online' property from 'user' object
  const isOnline = user.online;

  // Main container with user information and styling
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
      {/* Displaying online status if the user is online */}
      {isOnline && (
        <div className="absolute top-2 right-2">
          {/* Green circle indicating online status */}
          <span className="bg-green-500 rounded-full h-3 w-3 inline-block mr-1"></span>
          {/* Text indicating online status */}
          <span className="text-gray-600 text-xs">Online</span>
        </div>
      )}
      {/* User avatar with dynamic source */}
      <img
        className="w-full h-48 object-cover"
        src={user.avatarUrl}
        alt={`${user.name}'s avatar`}
      />
      
      {/* Container for user details */}
      <div className="p-4">
        {/* User's name with styling */}
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        {/* User's role with styling */}
        <p className="text-gray-600 mt-2">{user.role}</p>
        {/* User's email with styling */}
        <p className="text-gray-600 mt-2">{user.email}</p>
        {/* User's bio with styling */}
        <p className="text-gray-600 mt-2">{user.bio}</p>

        {/* Container for action buttons */}
        <div className="flex items-center mt-4 space-x-2">
          {/* Button to send a message */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Message
          </button>
          {/* Button to follow the user */}
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
            Follow
          </button>
        </div>

        {/* Container for user skills */}
        <div className="mt-4">
          {/* Label for user skills */}
          <p className="text-gray-600 mb-2 font-semibold">Skills:</p>
          {/* Displaying user skills with styling */}
          <div className="flex flex-wrap">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-200 text-blue-800 rounded-full px-2 py-1 text-sm m-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop type validation for the 'user' prop
UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

// Exporting the UserCard component
export default UserCard;
