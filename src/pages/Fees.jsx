import React from "react";
import {CreditCard} from "lucide-react";
import feeDepositImg from "../assets/feestructure.jpg";

const Fees = () => {
  return (
    <section className="bg-[#F3F6FB] py-16 px-6">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-12">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={feeDepositImg}
            alt="Fee Deposit Illustration"
            className="w-full rounded-xl shadow-lg object-cover transform hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="flex items-center text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
            <CreditCard size={28} className="mr-2 text-[#1F386B]" />
            Instructions for Fee Deposit
          </h2>
          <div className="h-1 w-20 bg-[#1F386B] mb-6"></div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fees must be deposited between the <strong>1st and 10th</strong> of
            each quarter (April, July, October, January) through one of the
            following methods:
            <ul className="list-disc ml-5 mt-2">
              <li>
                Online payment via Credit Card, Debit Card, or Net Banking at{" "}
                <a
                  href="http://www.nmpublicschool.com"
                  className="text-blue-600 hover:underline"
                >
                  www.nmpublicschool.com
                </a>{" "}
                (Pay Fee Online → Admission No.).
              </li>
              <li>
                Local Cheque or Pay Order (payable to N.M. Public School) at
                HDFC Bank Ltd., Sector-61, Noida, with a copy of the Fee
                Challan. Bank hours: 10:00 AM to 4:00 PM, Monday to Saturday
                (except bank holidays).
              </li>
              <li>
                Local Cheque or Pay Order (payable to N.M. Public School) in the
                drop box at the school’s main gate, along with the Fee Challan.
                Include Admission No., Student Name, Class/Section, and Contact
                No. on the back of the Cheque/Pay Order.
              </li>
            </ul>
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ensure fees are paid as per the amount specified in the Fee Challan.
            Late fees will be charged as per school rules. Unpaid fees for more
            than <strong>40 days</strong> may result in the student’s name being
            struck off or requiring re-admission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fees;
