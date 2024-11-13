import Navbar from "@/components/navbar";

// src/pages/Contact.tsx
export default function Contact() {
    return (
      <div className='min-h-screen w-full bg-white font-body flex flex-col'>
        <section className='mt-8 mx-4 sm:mx-8'>
          <div className='max-w-[1900px] mx-auto bg-zinc-200/10 backdrop-blur-3xl rounded-xl p-4 sm:p-8'>
            <h2 className='text-xl sm:text-6xl font-semibold text-black/70 mb-4'>Contact Us</h2>
            {/* Add your contact form or information here */}
          </div>
        </section>
        <Navbar className='sticky bottom-3 mx-auto w-full max-w-[1700px] z-50 mt-8'/>
      </div>
    )
  }
