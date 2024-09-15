function UserProfile() {
    return (
      <div className="userProfile bgGray100 p-8 max-w-sm mx-auto my-20 rounded-Lg shadow-Lg">
        <img className="roundedFull w36 h36 mx-auto" src="https://via.placeholder.com/150" alt="User" />
        <h1 className="textXl textBlue800 my4">John Doe</h1>
        <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  ["bg-gray-100", "p-8", "max-w-sm", "mx-auto", "my-20", "rounded-lg", "shadow-lg"]
  ["rounded-full", "w-36", "h-36"]
  ["text-xl", "text-blue-800", "my-4"]
  ["md:p-8", "sm:p-4"]
  max-w-xs on small screens and max-w-sm on medium screens and above).
  Responsive Typography:
  
  Adjust the font size of the heading and paragraph text to increase readability on different devices.
  Example modifications:
  The heading should be slightly smaller on smaller devices (text-lg on sm: screens and text-xl on md: screens and above).
  The paragraph text should maintain readability without overwhelming smaller screens (text-sm on sm: screens and text-base on md: screens and above).
  Responsive Image Sizing:
  
  The image should scale appropriately across devices to ensure it does not dominate the layout on smaller screens but remains visible.
  Example modifications:
  Use w-24 h-24 on sm: screens and w-36 h-36 on md: screens and above for the profile image.
  export default UserProfile;