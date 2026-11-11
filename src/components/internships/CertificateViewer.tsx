'use client';

import React, { useRef, useState } from 'react';
import { Certificate } from '@/lib/internshipTypes';
import { SIGNATURE_DHARMESH, SIGNATURE_KRISHNA } from '@/lib/signatureAssets';
import { CheckCircle2, Download, Printer, ShieldCheck, X } from 'lucide-react';

interface CertificateViewerProps {
  certificate: Certificate;
  onClose?: () => void;
  isModal?: boolean;
}

export const CertificateViewer: React.FC<CertificateViewerProps> = ({
  certificate,
  onClose,
  isModal = true,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const certRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const formattedIssueDate = certificate.issue_date === '2026-11-15' ? '15 November 2026' : certificate.issue_date;

  const handleDownloadPNG = async () => {
    setIsDownloading(true);
    try {
      // Draw certificate onto an off-screen high-res canvas (Retina 2x)
      const canvas = document.createElement('canvas');
      const scale = 2;
      const width = 1100;
      const height = 750;
      canvas.width = width * scale;
      canvas.height = height * scale;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.scale(scale, scale);

        // 1. Background
        const grad = ctx.createLinearGradient(0, 0, 0, height);
        grad.addColorStop(0, '#FAF9F6');
        grad.addColorStop(1, '#FFFDF9');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);

        // 2. Outer Double Gold Border
        ctx.strokeStyle = '#D4AF37';
        ctx.lineWidth = 6;
        ctx.strokeRect(20, 20, width - 40, height - 40);
        ctx.lineWidth = 1.5;
        ctx.strokeRect(28, 28, width - 56, height - 56);

        // 3. Inner decorative border
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
        ctx.lineWidth = 1;
        ctx.strokeRect(36, 36, width - 72, height - 72);

        // 4. Header Texts
        ctx.textAlign = 'center';
        ctx.fillStyle = '#ED5B2D';
        ctx.font = '600 13px Poppins, sans-serif';
        ctx.fillText('CODING SKILLS ACADEMY • ISO 9001:2015 CERTIFIED INSTITUTION', width / 2, 85);

        ctx.fillStyle = '#1A1A1A';
        ctx.font = 'bold 36px Fredoka, Poppins, sans-serif';
        ctx.fillText('CERTIFICATE OF INTERNSHIP', width / 2, 130);

        ctx.fillStyle = '#666666';
        ctx.font = '500 14px Poppins, sans-serif';
        ctx.fillText('& PROJECT COMPLETION', width / 2, 155);

        // 5. Recipient section
        ctx.fillStyle = '#888888';
        ctx.font = 'italic 15px Georgia, serif';
        ctx.fillText('This certificate is proudly awarded to', width / 2, 210);

        ctx.fillStyle = '#ED5B2D';
        ctx.font = 'bold 40px Fredoka, Poppins, sans-serif';
        ctx.fillText(certificate.student_name, width / 2, 260);

        // Underline for name
        const textMetrics = ctx.measureText(certificate.student_name);
        const textWidth = textMetrics.width;
        ctx.strokeStyle = '#ED5B2D';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width / 2 - textWidth / 2 - 25, 272);
        ctx.lineTo(width / 2 + textWidth / 2 + 25, 272);
        ctx.stroke();

        // 6. Body Description
        ctx.fillStyle = '#333333';
        ctx.font = 'normal 15px Poppins, sans-serif';
        ctx.fillText(
          'for successfully completing the intensive hands-on internship programme as an',
          width / 2,
          315
        );
        ctx.font = 'bold 16px Poppins, sans-serif';
        ctx.fillText(
          `${certificate.role} within the ${certificate.department} department,`,
          width / 2,
          340
        );
        ctx.font = 'normal 15px Poppins, sans-serif';
        ctx.fillText(
          'demonstrating exemplary commitment, technical proficiency, and problem-solving excellence.',
          width / 2,
          365
        );

        // 7. Duration pill
        ctx.fillStyle = '#F3F2EE';
        ctx.beginPath();
        ctx.roundRect(width / 2 - 130, 395, 260, 30, 15);
        ctx.fill();
        ctx.strokeStyle = '#E0DDD5';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#444444';
        ctx.font = '600 13px Poppins, sans-serif';
        ctx.fillText(`Duration: ${certificate.duration}`, width / 2, 415);

        // 8. Bottom separator
        ctx.strokeStyle = '#E5E2DA';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(60, 465);
        ctx.lineTo(width - 60, 465);
        ctx.stroke();

        // 9. Helper to load image
        const loadImg = (src: string): Promise<HTMLImageElement> =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => resolve(img);
            img.src = src;
          });

        // Load Signatures (From embedded Base64 - 100% synchronous & reliable)
        const [sigDharmesh, sigKrishna] = await Promise.all([
          loadImg(SIGNATURE_DHARMESH),
          loadImg(SIGNATURE_KRISHNA),
        ]);

        // Draw Dharmesh (Coding Instructor) Signature (Balanced Size, Pulled Down for Equal Gap)
        if (sigDharmesh && sigDharmesh.width > 0) {
          ctx.drawImage(sigDharmesh, width / 2 - 88, 485, 176, 85);
        }
        ctx.textAlign = 'center';
        ctx.fillStyle = '#1A1A1A';
        ctx.font = 'bold 14px Fredoka, Poppins, sans-serif';
        ctx.fillText('Dharmesh', width / 2, 575);
        ctx.fillStyle = '#555555';
        ctx.font = '600 12px Poppins, sans-serif';
        ctx.fillText('Coding Instructor', width / 2, 593);
        ctx.font = '400 11px Poppins, sans-serif';
        ctx.fillStyle = '#888888';
        ctx.fillText('Coding Skills Academy', width / 2, 610);

        // Draw Mrs. Krishna (Founder & Director) Signature (Compact Sleek Size)
        if (sigKrishna && sigKrishna.width > 0) {
          ctx.drawImage(sigKrishna, width - 242, 517, 104, 45);
        }
        ctx.textAlign = 'center';
        ctx.fillStyle = '#1A1A1A';
        ctx.font = 'bold 14px Fredoka, Poppins, sans-serif';
        ctx.fillText('Mrs. Krishna', width - 190, 575);
        ctx.fillStyle = '#555555';
        ctx.font = '600 12px Poppins, sans-serif';
        ctx.fillText('Founder & Director', width - 190, 593);
        ctx.font = '400 11px Poppins, sans-serif';
        ctx.fillStyle = '#888888';
        ctx.fillText('Coding Skills Academy', width - 190, 610);

        // 10. Left: Credential ID & Issue Date
        ctx.textAlign = 'left';
        ctx.fillStyle = '#888888';
        ctx.font = '600 11px Poppins, sans-serif';
        ctx.fillText('CREDENTIAL ID', 80, 515);
        ctx.fillStyle = '#1A1A1A';
        ctx.font = 'bold 15px monospace';
        ctx.fillText(certificate.credential_id, 80, 537);

        ctx.fillStyle = '#888888';
        ctx.font = '600 11px Poppins, sans-serif';
        ctx.fillText('ISSUE DATE', 80, 570);
        ctx.fillStyle = '#333333';
        ctx.font = '600 13px Poppins, sans-serif';
        ctx.fillText(formattedIssueDate, 80, 590);

        ctx.fillStyle = '#059669';
        ctx.font = 'bold 12px Poppins, sans-serif';
        ctx.fillText('✓ VERIFIED CREDENTIAL', 80, 618);
        ctx.fillStyle = '#4B5563';
        ctx.font = '600 11px Poppins, sans-serif';
        ctx.fillText('ISO 9001:2015 CERTIFIED', 80, 636);

        // 11. Bottom verification link
        ctx.textAlign = 'center';
        ctx.font = '400 11px Poppins, sans-serif';
        ctx.fillStyle = '#999999';
        ctx.fillText(
          `Verify authenticity online at: https://codingskills.co.in/verify-certificate?id=${certificate.credential_id}`,
          width / 2,
          700
        );

        // Download PNG file directly
        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        const filename = `Certificate_${certificate.student_name.replace(/\s+/g, '_')}_${certificate.credential_id}.png`;
        a.href = dataUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch (err) {
      console.error('Download error:', err);
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=2&data=${encodeURIComponent(
    certificate.qr_code_url || `https://codingskills.co.in/verify-certificate?id=${certificate.credential_id}`
  )}`;

  const content = (
    <div className="relative w-full max-w-4xl mx-auto font-poppins text-dark-base select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between mb-3 print:hidden px-1">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            Verified Credential
          </span>
          <span className="text-xs text-white/70 font-mono">ID: {certificate.credential_id}</span>
        </div>

        {onClose && isModal && (
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors flex items-center space-x-1"
            aria-label="Close"
          >
            <span className="text-xs font-medium mr-1 hidden sm:inline text-white/80">Close</span>
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Certificate Frame */}
      <div
        ref={certRef}
        id="csa-certificate-print-area"
        className="relative bg-gradient-to-b from-[#FAF9F6] to-[#FFFDF9] border-8 border-double border-[#D4AF37] p-8 md:p-14 shadow-2xl rounded-2xl overflow-hidden print:p-8 print:shadow-none print:border-8 print:m-0 print:w-full"
        style={{
          boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
        }}
      >
        {/* Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <img src="/logo.png" alt="" className="w-96 h-96 object-contain" />
        </div>

        {/* Certificate Inner Frame Border */}
        <div className="border border-[#D4AF37]/50 p-6 md:p-10 rounded-xl relative z-10">
          {/* Header Section */}
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <img
                src="/logo.png"
                alt="Coding Skills Academy"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
              <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] font-bold text-secondary">
                Coding Skills Academy
              </span>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] md:text-[11px] font-semibold bg-primary/15 text-secondary border border-primary/25">
                ISO CERTIFIED: ISO 9001:2015
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-fredoka font-bold text-dark-base tracking-wide mt-3 uppercase text-gray-900">
              Certificate of Internship
            </h1>
            <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wider uppercase mt-1">
              & Project Completion
            </p>
          </div>

          <div className="my-6 md:my-8 text-center">
            <p className="text-xs md:text-sm text-gray-500 italic">This is proudly presented to</p>
            <h2 className="text-2xl md:text-4xl font-fredoka font-extrabold text-[#ED5B2D] mt-2 tracking-normal border-b-2 border-[#ED5B2D]/20 pb-2 inline-block px-8">
              {certificate.student_name}
            </h2>
          </div>

          {/* Description */}
          <p className="text-center text-xs md:text-sm text-gray-700 leading-relaxed max-w-2xl mx-auto">
            for successfully completing the intensive hands-on internship programme as an{' '}
            <strong className="text-gray-900 font-bold">{certificate.role}</strong> within the{' '}
            <span className="font-semibold text-gray-900">{certificate.department}</span> department, demonstrating
            exemplary commitment, technical proficiency, and problem-solving excellence.
          </p>

          {/* Duration & Period */}
          <div className="mt-4 text-center">
            <span className="inline-block bg-[#FAF9F6] border border-gray-200 px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600">
              Duration: {certificate.duration}
            </span>
          </div>

          {/* Footer Grid: Credentials, Signatures */}
          <div className="mt-10 md:mt-12 pt-6 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 items-end gap-6 text-center">
            {/* Left: Credential ID & QR Code */}
            <div className="text-left flex items-center space-x-3 justify-center sm:justify-start">
              <img
                src={qrUrl}
                alt="Verification QR"
                className="w-16 h-16 md:w-20 md:h-20 border border-gray-200 rounded p-1 bg-white shadow-sm shrink-0"
              />
              <div className="text-[10px] md:text-xs">
                <p className="text-gray-400 uppercase tracking-wider font-semibold">Credential ID</p>
                <p className="font-mono font-bold text-gray-900 text-xs md:text-sm">{certificate.credential_id}</p>
                <p className="text-gray-400 mt-1">Issue Date</p>
                <p className="font-semibold text-gray-700">{formattedIssueDate}</p>
                <p className="text-emerald-700 font-bold mt-1.5 flex items-center text-[10px]">
                  <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" /> ISO 9001:2015 Certified
                </p>
              </div>
            </div>

            {/* Center: Coding Instructor - Dharmesh (Aligned Equal Gap) */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-16 flex items-end justify-center mb-1">
                <img
                  src={SIGNATURE_DHARMESH}
                  alt="Dharmesh Signature"
                  className="h-12 md:h-13 w-auto object-contain translate-y-2"
                />
              </div>
              <div className="w-32 md:w-40 h-[1.5px] bg-gray-400 mb-1" />
              <p className="text-xs md:text-sm font-bold text-gray-900 font-fredoka">Dharmesh</p>
              <p className="text-[10px] md:text-xs font-semibold text-gray-700">Coding Instructor</p>
              <p className="text-[9px] md:text-[10px] text-gray-400">Coding Skills Academy</p>
            </div>

            {/* Right: Founder - Mrs. Krishna (Compacted) */}
            <div className="flex flex-col items-center sm:items-end justify-center">
              <div className="h-16 flex items-end justify-center sm:justify-end mb-1">
                <img
                  src={SIGNATURE_KRISHNA}
                  alt="Mrs. Krishna Signature"
                  className="h-7 md:h-8 w-auto object-contain"
                />
              </div>
              <div className="w-24 md:w-32 h-[1.5px] bg-gray-400 mb-1" />
              <p className="text-xs md:text-sm font-bold text-gray-900 font-fredoka">Mrs. Krishna</p>
              <p className="text-[10px] md:text-xs font-semibold text-gray-700">Founder & Director</p>
              <p className="text-[9px] md:text-[10px] text-gray-400">Coding Skills Academy</p>
            </div>
          </div>

          {/* Verification URL Footer */}
          <div className="mt-8 text-center text-[9px] md:text-[10px] text-gray-400">
            Verify authenticity online at:{' '}
            <span className="text-secondary font-mono">
              https://codingskills.co.in/verify-certificate?id={certificate.credential_id}
            </span>
          </div>
        </div>
      </div>

      {/* Action Bar Below Certificate (Hidden in print) */}
      <div className="mt-5 print:hidden bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left w-full sm:w-auto">
          <p className="text-xs font-semibold text-gray-800 flex items-center">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5 shrink-0" />
            Authentic Digital Certificate of Completion
          </p>
          <p className="text-[11px] text-gray-500 mt-0.5">
            Download high-resolution 2x Retina PNG with embedded signatures or print/save as PDF.
          </p>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-end shrink-0">
          {/* Download High-Res Certificate */}
          <button
            onClick={handleDownloadPNG}
            disabled={isDownloading}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-secondary hover:bg-secondary/90 rounded-xl shadow-md hover:shadow-orange transition-all disabled:opacity-50"
          >
            <Download className="w-4 h-4 mr-2" />
            <span>{isDownloading ? 'Generating...' : 'Download Certificate (PNG)'}</span>
          </button>

          {/* Print / Save as PDF */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center px-4 py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-sm transition-all"
          >
            <Printer className="w-4 h-4 mr-1.5 text-gray-600" />
            <span>Print / PDF</span>
          </button>

          {onClose && isModal && (
            <button
              onClick={onClose}
              className="px-4 py-3 text-xs sm:text-sm font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors border border-transparent"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );

  if (!isModal) {
    return content;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">{content}</div>
    </div>
  );
};

export default CertificateViewer;
