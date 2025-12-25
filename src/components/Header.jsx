import chefIcon from '../assets/chef-claude-icon.png';
export default function Header() {
  return (
    <header className="header">
      <img className="chef-icon" src={chefIcon} alt="Chef Icon" />
      <h1 className="header-txt">Chef Claude</h1>
    </header>
  );
}
