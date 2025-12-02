export default function SafetyInformation() {
  return (
    <div className="pt-24 px-6 md:px-20 py-12 max-w-4xl mx-auto">

      <h1 className="text-4xl font-playfair font-bold text-gray-800 mb-10">
        Safety Information
      </h1>

      <p className="text-gray-700 text-[15px] leading-relaxed mb-10">
        At JMM, your safety is our highest priority.  
        We work closely with our hotel partners to ensure that every stay meets 
        strict hygiene, security, and health standards.  
        Below is essential information to help you enjoy a comfortable and safe travel experience.
      </p>

      {/* SECTION 1 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Health & Hygiene Standards
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          All partner hotels follow enhanced cleaning protocols, including the 
          sanitization of common areas, rooms, and frequently touched surfaces.  
          Fresh linens and amenities are provided for each guest, and many hotels 
          offer contactless check-in options to minimize physical contact.
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Property Safety Measures
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Security personnel, CCTV monitoring, and controlled access systems 
          are implemented across many properties to ensure guest privacy and protection.  
          Emergency exits, smoke detectors, and fire alarm systems are routinely 
          inspected to meet local and international safety regulations.
        </p>
      </div>

      {/* SECTION 3 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Safe Travel Recommendations
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          We encourage travelers to stay aware of local guidelines, store their valuables 
          securely, and keep important documents in a safe place.  
          If traveling alone, share your itinerary with a trusted friend or family member  
          and avoid unsafe or poorly lit areas at night.
        </p>
      </div>

      {/* SECTION 4 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          COVID-19 Awareness
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          While global restrictions may vary, many hotels continue to maintain high hygiene standards.  
          If you feel unwell during your stay, please contact hotel staff immediately for support 
          and follow local health regulations.
        </p>
      </div>

      {/* SECTION 5 */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Need Assistance?
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          Our 24/7 support team is ready to assist you before, during, and after your trip.  
          If you ever feel unsafe or unsure, don’t hesitate to reach out through our Contact page.
        </p>
      </div>

    </div>
  );
}