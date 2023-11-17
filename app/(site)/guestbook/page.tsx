import AuthInfo from '@/components/authInfo';
import CreateMessage from '@/components/createMessage';
import Messages from '@/components/guestBook';

const Guestbook = () => {
  return (
    <div>
      <h1 className="lg:mt-5 mt-0 text-primary lg:text-5xl text-3xl font-bold">
        GuestBook
      </h1>
      <AuthInfo />
      <Messages />
      <CreateMessage />
    </div>
  );
};

export default Guestbook;
