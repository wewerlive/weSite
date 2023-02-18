import { Message, Icons } from './Assets';

export default function About() {
  const message = {
    Eth: {
      title: 'Ethereum',
      message:
        "Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for",
    },
    XR: {
      title: 'XR',
      message:
        "Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for",
    },
    AI: {
      title: 'AI',
      message:
        "Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for",
    },
    };

  return (
    <section id='About'>
      <div class='container flex flex-col gap-8 p-4'>
        <div class='container flex justify-center items-center px-4'>
          <Icons svg='Eth' />
          <Message
            message={message.Eth.message}
            title={message.Eth.title}
          />
        </div>
        <div class='container flex justify-center items-center p-4'>
          <Message
            message={message.XR.message}
            title={message.XR.title}
          />
          <Icons svg='XR' />
        </div>
        <div class='container flex justify-center items-center p-4'>
          <Icons svg='AI' />
          <Message
            message={message.AI.message}
            title={message.AI.title}
          />
        </div>
      </div>
    </section>
  );
}
