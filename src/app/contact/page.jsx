"use client"
import AnimatedButton from '../../components/AnimatedButton';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-black text-white">
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl mb-6">Get in Touch</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="p-3 bg-gray-800 rounded" />
          <input type="email" placeholder="Email" className="p-3 bg-gray-800 rounded" />
          <textarea placeholder="Message" className="p-3 bg-gray-800 rounded"></textarea>
          <AnimatedButton text="Send" />
        </form>
      </div>
    </div>
  );
}