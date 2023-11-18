import AuthInfo from '@/components/authInfo';
import Messages from '@/components/guestBook';

const Guestbook = () => {
  return (
    <div>
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-5xl text-3xl font-bold">
        GuestBook
      </h1>
      <h2 className="text-gray-300 lg:text-3xl text-xl font-semibold">
        Leave a Note, Take a Smile: The Virtual Hug Station
      </h2>
      <AuthInfo />
      <Messages />
    </div>
  );
};

export default Guestbook;
