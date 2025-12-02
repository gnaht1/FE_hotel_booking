export default function ContactUs() {
  return (
    <div className="pt-24 px-6 md:px-20 py-12 max-w-4xl mx-auto">

      <h1 className="text-4xl font-playfair font-bold text-gray-800 mb-10">
        Contact Us
      </h1>

      <p className="text-gray-700 text-[15px] leading-relaxed mb-10">
        We’re here to help. Whether you need support with a booking, have 
        questions about our platform, or want to partner with JMM, our team 
        is always ready to assist you.  
        Reach out to us through any of the channels below.
      </p>

      {/* CONTACT SECTION 1 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Customer Support
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          For help with reservations, payments, or account issues,  
          our support specialists are available every day.
          <br />
          <strong>Email:</strong> support@jmmhotels.com  
          <br />
          <strong>Phone:</strong> +84 1900 123 456  
        </p>
      </div>

      {/* CONTACT SECTION 2 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Hotel Partnerships
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Are you a hotel owner or manager looking to collaborate with JMM?  
          Our team would love to discuss opportunities with you.
          <br />
          <strong>Email:</strong> partners@jmmhotels.com  
        </p>
      </div>

      {/* CONTACT SECTION 3 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Media & PR
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          For press inquiries, interviews, brand collaborations,  
          or marketing partnerships, please contact our media department.
          <br />
          <strong>Email:</strong> media@jmmhotels.com  
        </p>
      </div>

      {/* CONTACT SECTION 4 */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Corporate Office
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          JMM Travel Technologies  
          <br />
          21 Nguyen Dinh Chieu Street, District 1  
          <br />
          Ho Chi Minh City, Vietnam  
        </p>
      </div>

      {/* CONTACT SECTION 5 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Stay Connected
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Follow us on social media for travel inspiration, hotel updates,  
          and exclusive JMM promotions.
          <br />
          Facebook • Instagram • TikTok • LinkedIn
        </p>
      </div>

    </div>
  );
}