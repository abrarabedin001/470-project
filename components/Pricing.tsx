'use client';
import React from 'react';
import H2 from './ui/H2';
import PrimaryButton from './ui/PrimaryButton';
import H1 from './ui/H1';
import P from './ui/P';

export default function Pricing() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="mt-32 mb-36" id="features">
      <div className="w-full flex justify-center">
        <H1 className=" text-center max-w-[800px] pb-10 lg:pb-0 ">
          Affordable Packages for Every Size of Team
        </H1>
      </div>
      <div className="w-full flex justify-center items-center mt-10 lg:mt-26 ">
        <label className="relative inline-flex items-center cursor-pointer ">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={(e) =>
              setChecked((prev) => (prev == true ? false : true))
            }
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {checked ? 'Yearly' : 'Monthly'}
          </span>
        </label>
      </div>

      <div className="flex flex-col lg:flex-row  items-center justify-evenly ">
        <div className="w-80 h-[560px] text-left relative m-5 bg-gray-100 rounded-[10px] shadow">
          <p className="text-sm font-bold text-left px-9 pt-9 mb-3">
            Individual Plan
          </p>

          <p className="text-sm  text-left px-9 text-gray-700">
            For individuals Starting Out
          </p>
          <h2 className="h2 text-2xl font-semibold text-left px-9 pt-9  ">
            {checked ? '$20/mo' : '$25/mo'}
          </h2>
          <div className="w-full flex justify-center pt-9">
            <PrimaryButton className="text-left  w-[75%]">
              Get Started
            </PrimaryButton>
          </div>
          <div className="flex justify-center">
            <div className=" border-t border-black/30 mt-6 w-[80%]" />
          </div>

          <p className="px-9 pt-3 font-semibold">Key Features</p>
          <ul className="w-full text-left px-9 pt-3 text-gray-700   text-sm">
            <li>✓ Real-time Transcription</li>
            <li>✓ Smart Summaries</li>
            <li>✓ Actionable Steps</li>
            <li>✓ Conversation storage</li>
            {/* <li>✓ Support: Standard Support</li> */}
            <li>✓ Conversation History</li>
          </ul>
          <div className="flex justify-center">
            <div className=" border-t border-black/30 mt-6 w-[80%]" />
          </div>
          <p className="px-9 pt-3 font-semibold">Support:</p>
          <ul className="w-full text-left px-9 pt-3 text-gray-700   text-sm">
            <li>✓ Standard Support</li>
          </ul>
        </div>
        <div className="w-80 h-[560px] text-left relative m-5 bg-gray-100 rounded-[10px] shadow">
          <p className="text-sm font-bold text-left px-9 pt-9 mb-3">
            Team Plan
          </p>

          <p className="text-sm  text-left px-9 text-gray-700">
            For 2-10 People On One Account.
          </p>
          <h2 className="h2 text-2xl font-semibold text-left px-9 pt-9  ">
            {checked ? '$150/mo + $20/user' : '$200/mo + $20/user'}
          </h2>
          <div className="w-full flex justify-center pt-9">
            <PrimaryButton className="text-left  w-[75%]">
              Get Started
            </PrimaryButton>
          </div>
          <div className="flex justify-center">
            <div className=" border-t border-black/30 mt-6 w-[80%]" />
          </div>

          <p className="px-9 pt-3 font-semibold">Key Features</p>
          <ul className="w-full text-left px-9 pt-3 text-gray-700   text-sm">
            <li>✓ All features of Individual Plan</li>

            <li>✓ Chatbot: Advanced AI Chatbot to navigate info</li>
          </ul>
          <div className="flex justify-center">
            <div className=" border-t border-black/30 mt-6 w-[80%]" />
          </div>
          <p className="px-9 pt-3 font-semibold">Support:</p>
          <ul className="w-full text-left px-9 pt-3 text-gray-700   text-sm">
            <li>✓ Priority Support</li>
          </ul>
        </div>
        <div className="w-80 h-[560px] text-left relative m-5 bg-gray-100 rounded-[10px] shadow">
          <p className="text-sm font-bold text-left px-9 pt-9 mb-3">
            Enterprise Plan
          </p>

          <p className="text-sm  text-left px-9 text-gray-700">
            For Customized Solutions
          </p>
          <h2 className="h2 text-2xl font-semibold text-left px-9 pt-9  ">
            Contact Sales Team
          </h2>
          <div className="w-full flex justify-center pt-9">
            <PrimaryButton className="text-left  w-[75%]">
              Get Started
            </PrimaryButton>
          </div>

          <div className="flex justify-center">
            <div className=" border-t border-black/30 mt-6 w-[80%]" />
          </div>

          <p className="px-9 pt-3 font-semibold">Key Features</p>
          <ul className="w-full text-left px-9 pt-3 text-gray-700   text-sm">
            <li>✓ Customized Solutions</li>
            <li>✓ API Integrations</li>
            <li>✓ Chatbot: Customizable AI Chatbot</li>
          </ul>
          <div className="flex justify-center">
            <div className=" border-t border-black/30 mt-6 w-[80%]" />
          </div>
          <p className="px-9 pt-3 font-semibold">Support:</p>
          <ul className="w-full text-left px-9 pt-3 text-gray-700   text-sm">
            <li>✓ P24/7 Dedicated Support</li>
          </ul>
        </div>

        <div></div>
      </div>
    </div>
  );
}
