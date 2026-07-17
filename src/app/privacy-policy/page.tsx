import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CodingSkills Academy',
  description: 'Privacy Policy for CodingSkills Academy - how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://codingskills.co.in/privacy-policy',
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-light-base min-h-screen text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-base mb-4 font-fredoka">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-sm font-poppins mb-10">Last updated: May 2026</p>

        <div className="prose prose-lg text-gray-600 font-poppins max-w-none prose-h2:font-fredoka prose-h2:text-2xl prose-h2:text-dark-base prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-4">
          <p>
            Coding Skills Academy ("we", "us", or "our") operates the website <a href="https://codingskills.co.in" className="text-secondary hover:underline">codingskills.co.in</a> and the learning platform at <a href="https://learn.codingskills.co.in" className="text-secondary hover:underline">learn.codingskills.co.in</a>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or enrol in our courses.
          </p>
          <p>
            Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information you voluntarily provide when you:</p>
          <ul>
            <li>Book a free demo class (parent name, child name, child age, phone number, email address, class/grade, course interest, preferred language)</li>
            <li>Download a course curriculum (same fields as above)</li>
            <li>Contact us via email</li>
          </ul>
          <p>
            We also automatically collect certain technical data when you visit our site, including your IP address, browser type, operating system, referring URLs, and pages visited. This data is collected via standard server logs and analytics tools and is used solely to improve site performance.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Schedule and conduct your child's free demo class</li>
            <li>Send you course information, updates, and promotional material (you may opt out at any time)</li>
            <li>Respond to your enquiries and provide customer support</li>
            <li>Improve our website, courses, and services</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p>We do not sell, trade, or rent your personal information to third parties.</p>

          <h2>3. Children's Privacy</h2>
          <p>
            Our services are designed for children aged 7-17, but all accounts and registrations are managed by a parent or legal guardian. We do not knowingly collect personal information directly from children under 13 without verifiable parental consent. If you believe we have inadvertently collected such information, please contact us immediately at <a href="mailto:info@codingskills.co.in" className="text-secondary hover:underline">info@codingskills.co.in</a> and we will delete it promptly.
          </p>

          <h2>4. Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your experience on our site. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of the site may not function properly without cookies.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>We use the following third-party services that may collect data independently:</p>
          <ul>
            <li><strong>Google Analytics</strong> (if enabled) - for website analytics. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google's Privacy Policy</a>.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorised access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law. You may request deletion of your data at any time by emailing us.
          </p>

          <h2>8. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:info@codingskills.co.in" className="text-secondary hover:underline">info@codingskills.co.in</a>.</p>

          <h2>9. Links to Other Websites</h2>
          <p>
            Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of the site after changes are posted constitutes your acceptance of the revised policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:info@codingskills.co.in" className="text-secondary hover:underline">info@codingskills.co.in</a></li>
            <li>Website: <a href="https://codingskills.co.in" className="text-secondary hover:underline">codingskills.co.in</a></li>
            <li>Address: WZ-11, Jwalaheri Village, Paschim Vihar, New Delhi, Delhi, 110063</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
