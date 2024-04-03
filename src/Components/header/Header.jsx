import profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between px-[150px] py-12  border-b-2'>
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img className='w-14 h-14' src={profile} alt="" />
    </div>
  );
};

export default Header;
