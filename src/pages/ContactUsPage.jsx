import React from "react";
import Header from "../components/Header";
import Bottom from '../components/Bottom';
import OfficeInfo from '../sections/OfficeInfo';
import ContactForm from '../sections/ContactForm';

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header
                        PageName={"Contact Us"}
                        PageDetail={"Home / Contact Us"}
                        Honed={"Get In Touch"}
                      />

      <main className="flex-1 bg-[#F1F1F1] text-[#111]">
        

        {/* Office Info Section */}
        <section className="py-12 flex justify-center px-4">
          <OfficeInfo />
        </section>

        {/* Contact Form Section */}
        <section className="pb-20 flex justify-center px-4">
          <ContactForm />
        </section>
      </main>

    </div>
  );
}