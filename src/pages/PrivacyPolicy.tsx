import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = '2025-09-21';
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="prose prose-blue max-w-none">
              <p className="text-gray-700 mb-8 leading-relaxed">
                This privacy policy applies to the BMI Wellness Tracker app (hereby referred to as "Application") for mobile devices 
                that was created by SKYGENYX (hereby referred to as "Service Provider") as an Ad Supported service.
                This service is intended for use "AS IS".
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                Information Collection and Use
              </h2>
              <p className="text-gray-700 mb-4">
                The Application collects information when you download and use it. This information may include information such as:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Your device's Internet Protocol address (e.g. IP address)</li>
                <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                <li>The time spent on the Application</li>
                <li>The operating system you use on your mobile device</li>
              </ul>

              <p className="text-gray-700 mb-6">
                The Application does not gather precise information about the location of your mobile device.
                The Application collects your device's location, which helps the Service Provider determine your approximate 
                geographical location and make use of in below ways:
              </p>

              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>
                  <strong>Geolocation Services:</strong> The Service Provider utilizes location data to provide features such as 
                  personalized content, relevant recommendations, and location-based services.
                </li>
                <li>
                  <strong>Analytics and Improvements:</strong> Aggregated and anonymized location data helps the Service Provider 
                  to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.
                </li>
                <li>
                  <strong>Third-Party Services:</strong> Periodically, the Service Provider may transmit anonymized location data to 
                  external services. These services assist them in enhancing the Application and optimizing their offerings.
                </li>
              </ul>

              <p className="text-gray-700 mb-6">
                The Service Provider may use the information you provided to contact you from time to time to provide you with 
                important information, required notices and marketing promotions.
              </p>

              <p className="text-gray-700 mb-6">
                For a better experience, while using the Application, the Service Provider may require you to provide us with 
                certain personally identifiable information, including but not limited to None. The information that the Service 
                Provider request will be retained by them and used as described in this privacy policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                Third Party Access
              </h2>
              <p className="text-gray-700 mb-6">
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in 
                improving the Application and their service. The Service Provider may share your information with third parties 
                in the ways that are described in this privacy statement.
              </p>

              <p className="text-gray-700 mb-6">
                Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. 
                Below are the links to the Privacy Policy of the third-party service providers used by the Application:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><a href="https://support.google.com/admob/answer/6128543" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">AdMob</a></li>
              </ul>

              <p className="text-gray-700 mb-6">
                The Service Provider may disclose User Provided and Automatically Collected Information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                Opt-Out Rights
              </h2>
              <p className="text-gray-700 mb-6">
                You can stop all collection of information by the Application easily by uninstalling it. You may use the standard 
                uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                Data Retention Policy
              </h2>
              <p className="text-gray-700 mb-6">
                The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time 
                thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please 
                contact them at <a href="mailto:BMIWellnesstracker@icloud.com" className="text-blue-600 hover:underline">BMIWellnesstracker@icloud.com</a> 
                and they will respond in a reasonable time.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                Children
              </h2>
              <p className="text-gray-700 mb-6">
                The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
              </p>

              <p className="text-gray-700 mb-6">
                The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally 
                identifiable information from children under 13 years of age. In the case the Service Provider discover that a child 
                under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you 
                are a parent or guardian and you are aware that your child has provided us with personal information, please contact the 
                Service Provider (<a href="mailto:BMIWellnesstracker@icloud.com" className="text-blue-600 hover:underline">BMIWellnesstracker@icloud.com</a>) 
                so that they will be able to take the necessary actions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                Security
              </h2>
              <p className="text-gray-700 mb-6">
                The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides 
                physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                Changes
              </h2>
              <p className="text-gray-700 mb-6">
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes 
                to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy 
                regularly for any changes, as continued use is deemed approval of all changes.
              </p>

              <p className="text-gray-700 mb-6">
                This privacy policy is effective as of {lastUpdated}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                Your Consent
              </h2>
              <p className="text-gray-700 mb-6">
                By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy 
                now and as amended by us.
              </p>

              <h2 id="contact" className="text-2xl font-bold text-gray-900 mt-10 mb-4 pt-4 border-t border-gray-100">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-2">
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please 
                contact the Service Provider via email at 
                <a href="mailto:BMIWellnesstracker@icloud.com" className="ml-1 text-blue-600 hover:underline">
                  BMIWellnesstracker@icloud.com
                </a>.
              </p>
              <p className="text-gray-700 mt-4">
                Alternatively, you can use our <a href="/#contact" className="text-blue-600 hover:underline">contact form</a> on the homepage.
              </p>
              <p className="text-sm text-gray-500 mt-6 pt-4 border-t border-gray-100">
                This privacy policy page was generated by App Privacy Policy Generator
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
