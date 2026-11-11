'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  Award,
  Building2,
  Calendar,
  Layers,
} from 'lucide-react';
import { internshipService } from '@/lib/internshipService';
import { Certificate, VerificationStatus } from '@/lib/internshipTypes';
import CertificateViewer from '@/components/internships/CertificateViewer';

function CertificateVerificationContent() {
  const searchParams = useSearchParams();
  const queryId = searchParams.get('id') || searchParams.get('credentialId') || '';

  const [credentialId, setCredentialId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    found: boolean;
    certificate: Certificate | null;
    status: VerificationStatus | 'NOT_FOUND';
    message?: string;
  } | null>(null);

  const [showCertificateModal, setShowCertificateModal] = useState(false);

  // Auto-verify if ID provided in query params (e.g. from QR code)
  useEffect(() => {
    if (queryId) {
      setCredentialId(queryId);
      performVerification(queryId);
    }
  }, [queryId]);

  const performVerification = async (idToVerify: string) => {
    const cleanId = idToVerify.trim();
    if (!cleanId) return;

    setIsLoading(true);
    setHasSearched(true);
    try {
      const result = await internshipService.verifyCertificate(cleanId);
      setVerificationResult(result);
    } catch (err) {
      console.error('Verification error:', err);
      setVerificationResult({
        found: false,
        certificate: null,
        status: 'NOT_FOUND',
        message: 'An error occurred during verification. Please check the credential ID and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performVerification(credentialId);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-light-base">
      {/* Top Banner / Hero */}
      <section className="relative overflow-hidden pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold text-secondary uppercase tracking-widest mb-6">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span>Official Credential Registry</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-fredoka font-bold text-dark-base tracking-tight mb-4">
            Verify Your <span className="text-secondary">Certificate</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Enter the unique Credential ID printed on your Coding Skills Academy certificate or scan the QR code to verify
            its authenticity against our central verified registry.
          </p>

          {/* Verification Search Bar */}
          <div className="mt-10 max-w-2xl mx-auto">
            <form onSubmit={handleFormSubmit} className="relative">
              <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-2.5 rounded-2xl shadow-soft border border-gray-200/80 hover:border-secondary/30 transition-all focus-within:ring-2 focus-within:ring-secondary/20">
                <div className="relative flex-1 w-full flex items-center pl-3">
                  <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
                  <input
                    type="text"
                    value={credentialId}
                    onChange={(e) => setCredentialId(e.target.value)}
                    placeholder="Enter Credential ID (e.g. CSA-XXXX-XXXXXX)"
                    className="w-full bg-transparent border-none text-base font-medium text-dark-base placeholder:text-gray-400 focus:outline-none uppercase tracking-wider font-mono"
                    required
                  />
                  {credentialId && (
                    <button
                      type="button"
                      onClick={() => setCredentialId('')}
                      className="p-1 text-gray-400 hover:text-gray-600"
                    >
                      <XCircle className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !credentialId.trim()}
                  className="w-full sm:w-auto px-7 py-3.5 bg-secondary hover:bg-secondary/90 text-white font-fredoka font-semibold rounded-xl transition-all shadow-md hover:shadow-orange flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      <span>Verifying...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verify Certificate</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        {isLoading && (
          <div className="bg-white rounded-2xl p-12 text-center shadow-soft border border-gray-100 animate-pulse">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6 text-secondary animate-bounce" />
            </div>
            <h3 className="text-lg font-fredoka font-semibold text-gray-800">Querying Central Certificate Database...</h3>
            <p className="text-sm text-gray-500 mt-1">Cross-referencing cryptographic ID and validation records</p>
          </div>
        )}

        {!isLoading && hasSearched && verificationResult && (
          <div>
            {/* 1. VERIFIED */}
            {verificationResult.status === 'VERIFIED' && verificationResult.certificate && (
              <div className="bg-white rounded-2xl shadow-soft border-2 border-emerald-500/20 overflow-hidden transition-all duration-300">
                {/* Status Bar */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-4 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold opacity-90">Verification Result</p>
                      <h2 className="text-lg font-fredoka font-bold text-white tracking-wide">
                        AUTHENTIC & VERIFIED CREDENTIAL
                      </h2>
                    </div>
                  </div>
                  <span className="self-start sm:self-center bg-white/20 px-3 py-1 rounded-full text-xs font-mono font-semibold">
                    Status: VERIFIED
                  </span>
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-8">
                  <div className="border-b border-gray-100 pb-6 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Awarded To</p>
                    <h3 className="text-2xl sm:text-3xl font-fredoka font-bold text-dark-base mt-1">
                      {verificationResult.certificate.student_name}
                    </h3>
                    <p className="text-sm text-secondary font-medium mt-0.5">
                      {verificationResult.certificate.role}
                    </p>
                  </div>

                  {/* Grid of Verified Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center">
                        <Award className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                        Programme Name
                      </span>
                      <p className="font-semibold text-gray-900">
                        {verificationResult.certificate.programme_name}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center">
                        <Layers className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                        Internship Department
                      </span>
                      <p className="font-semibold text-gray-900">
                        {verificationResult.certificate.department}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                        Credential ID
                      </span>
                      <p className="font-mono font-bold text-gray-900">
                        {verificationResult.certificate.credential_id}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                        Duration & Issue Date
                      </span>
                      <p className="font-semibold text-gray-900">
                        {verificationResult.certificate.duration} • Issued{' '}
                        {verificationResult.certificate.issue_date === '2026-11-15'
                          ? '15 November 2026'
                          : verificationResult.certificate.issue_date}
                      </p>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center">
                        <Building2 className="w-3.5 h-3.5 mr-1.5 text-secondary" />
                        Issuing Organisation & Certification
                      </span>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-gray-900">
                          {verificationResult.certificate.issuing_authority}
                        </p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
                          ISO CERTIFIED: ISO 9001:2015
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Actions */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500">
                      This digital record confirms that the individual successfully fulfilled all academic and practical
                      requirements.
                    </p>

                    <button
                      onClick={() => setShowCertificateModal(true)}
                      className="w-full sm:w-auto px-6 py-3 bg-secondary hover:bg-secondary/90 text-white font-fredoka font-semibold rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 shrink-0"
                    >
                      <Award className="w-4 h-4" />
                      <span>View & Download Certificate</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. NOT FOUND */}
            {verificationResult.status === 'NOT_FOUND' && (
              <div className="bg-white rounded-2xl shadow-soft border-2 border-red-200 p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-fredoka font-bold text-gray-900 mb-2">Certificate Not Found</h3>
                <p className="text-gray-600 max-w-lg mx-auto text-sm leading-relaxed mb-6">
                  The entered Credential ID <span className="font-mono font-bold text-gray-800">{credentialId}</span> does
                  not match any certificate issued by Coding Skills Academy.
                </p>
                <div className="bg-red-50/60 border border-red-100 rounded-xl p-4 max-w-md mx-auto text-xs text-gray-600 text-left space-y-1">
                  <p className="font-semibold text-gray-800">Possible reasons:</p>
                  <ul className="list-disc list-inside space-y-0.5 pl-1">
                    <li>The ID might have a typo or formatting mistake.</li>
                    <li>The certificate may not have been finalized by the issuing committee yet.</li>
                    <li>The credential may have been issued by an unauthorized third party.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* 3. REVOKED */}
            {verificationResult.status === 'REVOKED' && (
              <div className="bg-white rounded-2xl shadow-soft border-2 border-amber-300 p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-fredoka font-bold text-gray-900 mb-2">Certificate Revoked</h3>
                <p className="text-gray-600 max-w-lg mx-auto text-sm leading-relaxed mb-4">
                  This certificate is no longer considered valid. It was officially revoked by Coding Skills Academy.
                </p>
                {verificationResult.message && (
                  <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-3 max-w-md mx-auto">
                    {verificationResult.message}
                  </p>
                )}
              </div>
            )}

            {/* 4. PENDING */}
            {verificationResult.status === 'PENDING' && (
              <div className="bg-white rounded-2xl shadow-soft border-2 border-blue-200 p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-fredoka font-bold text-gray-900 mb-2">Certificate Pending Issuance</h3>
                <p className="text-gray-600 max-w-lg mx-auto text-sm leading-relaxed">
                  This certificate record exists in the system but has not yet been authorized or finalized for public
                  verification by the administration.
                </p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Modal for Full Certificate Preview */}
      {showCertificateModal && verificationResult?.certificate && (
        <CertificateViewer
          certificate={verificationResult.certificate}
          onClose={() => setShowCertificateModal(false)}
        />
      )}
    </div>
  );
}

export default function VerifyCertificatePage() {
  return (
    <Suspense
      fallback={
        <div className="pt-32 pb-20 text-center">
          <div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-sm text-gray-500 font-poppins">Loading certificate verification portal...</p>
        </div>
      }
    >
      <CertificateVerificationContent />
    </Suspense>
  );
}

