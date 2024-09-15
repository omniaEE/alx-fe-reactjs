function UserProfile() {
    return (
      <div className="userProfile bgGray100 p-8 max-w-sm mx-auto my-20 rounded-Lg shadow-Lg">
        <img className="roundedFull w36 h36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
        <h1 className="textXl textBlue800 my4">John Doe</h1>
        <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;