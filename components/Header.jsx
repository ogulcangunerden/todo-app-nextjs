"use client";
const Header = ({ handleSignOut, showSignOutButton }) => {
  return (
    <div className="border-b-2 h-16 text-center text-3xl py-3">
      <a href="/">Todo App</a>

      {showSignOutButton && (
        <div className="flex justify-end p-4">
          <button onClick={handleSignOut}>Çıkış Yap</button>
        </div>
      )}
    </div>
  );
};

export default Header;
