import HeroSection from "@/components/landing-page/hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="mb-10 grow">
      <HeroSection />
      <section className="container w-full mt-5 text-center">
        <h2 className="text-2xl md:text-4xl">Key Features</h2>
        <p className="mt-2 text-sm text-gray-600">
          A one-stop solution for Event management issues!
        </p>

        <div className="grid grid-cols-1 gap-5 mt-6 md:grid-cols-2">
          <div className="p-3 rounded-lg ">
            <h3 className="text-lg md:text-xl">
              🎉Create, Host, and Sell with Ease
            </h3>
            <p className="mt-3 text-sm text-gray-600 text-balance">
              Plan concerts, workshops, or meetups in minutes. Customize details
              and start selling tickets - all in one place.
            </p>
          </div>

          <div className="p-3 rounded-lg ">
            <h3 className="text-lg md:text-xl">💸Maximize Your Earnings </h3>
            <p className="mt-3 text-sm text-gray-600 text-balance">
              Set ticket prices without limitations. Watch your event gain
              traction and reach enthusiasts eager to be part of your
              experience.
            </p>
          </div>

          <div className="p-3 rounded-lg ">
            <h3 className="text-lg md:text-xl">
              🚀Seamless Booking for Attendees
            </h3>
            <p className="mt-3 text-sm text-gray-600 text-balance">
              For attendees, explore a diverse range of events, find the perfect
              one for you, and secure your spot with a few clicks. No hassle, no
              fuss!
            </p>
          </div>

          <div className="p-3 rounded-lg ">
            <h3 className="text-lg md:text-xl">
              🔒Secure and Trustworthy Transactions
            </h3>
            <p className="mt-3 text-sm text-gray-600 text-balance">
              Eventix prioritizes security. State-of-the-art encryption and
              secure payment gateways ensure protected transactions.
            </p>
          </div>
        </div>
      </section>
      <section className="container grid grid-cols-1 gap-3 py-20 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-xl md:text-2xl">
            Let&apos;s make every event an extraordinary one!
          </h2>
          <p className="text-sm text-gray-600 text-balance">
            Sign up now and start creating your first event!
          </p>
        </div>
        <div className="flex gap-5 lg:justify-end lg:w-full w-auto lg:col-span-2">
          <Input placeholder="abc@xyz.com" type="email"   />
          <Button type="submit">Sign Up</Button>
        </div>
      </section>
    </main>
  );
}
