/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8 font-medium">
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Home
        </Link>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Introduction</h2>
              <p>
                Rishish Pradhan Studios ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and disclose information when you use our mobile applications.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Data Collection</h2>
              <p>
                Our apps are designed to collect minimal data. We do not collect personally identifiable information (PII) 
                such as your name, address, or phone number unless you explicitly provide it to us (e.g., via email support).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">AdMob Usage</h2>
              <p>
                We use Google AdMob to serve advertisements in our free applications. AdMob may use device identifiers 
                to personalize ads and analyze ad performance. You can manage your ad preferences through your device settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Google Play Services</h2>
              <p>
                Our apps use Google Play Services for features like cloud saves, leaderboards, and achievements. 
                Google may collect data as described in their own privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Third-Party Services</h2>
              <p>
                Our applications may contain links to other websites or services. We are not responsible for the 
                privacy practices or content of these third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="font-medium text-indigo-600">
                privacy@rishishpradhan.com
              </p>
            </section>

            <div className="pt-8 border-t border-slate-100 text-sm text-slate-400">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
