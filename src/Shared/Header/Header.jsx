import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col space-y-3 mt-5'>
            <div>
            <img className='mx-auto' src={logo} alt="" />
            </div>
            <p className='text-lg text-center'>Journalism Without Fear or Favour</p>
            <p className='text-xl text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    )
};

export default Header;