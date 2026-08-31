import React from 'react';

const contents: Record<string, React.ReactNode> = {
  'Sustainability': (
    <div className="space-y-6 text-left max-w-2xl mx-auto text-stone-600">
      <p>At Saaj, our commitment to sustainability is woven into the very fabric of our heritage. We believe in creating heirloom pieces that stand the test of time, minimizing our environmental footprint while preserving ancient crafts.</p>
      <p>We work exclusively with natural, biodegradable fibers sourced responsibly from local artisans. Our dyes are predominantly plant-based and safe for the earth.</p>
      <p>By empowering weaving communities and ensuring fair wages, we sustain not just the craft, but the livelihoods of those who keep our traditions alive.</p>
    </div>
  ),
  'Shipping': (
    <div className="space-y-6 text-left max-w-2xl mx-auto text-stone-600">
      <h2 className="font-serif text-2xl text-stone-800">Domestic Shipping</h2>
      <p>We offer complimentary shipping on all orders within India. Handcrafted items typically require 2-4 weeks for dispatch, as each piece is meticulously prepared to your specifications.</p>
      <h2 className="font-serif text-2xl text-stone-800 mt-8">International Shipping</h2>
      <p>We ship globally. International shipping rates are calculated at checkout based on the destination. Please note that customs duties and taxes are the responsibility of the recipient.</p>
    </div>
  ),
  'Returns': (
    <div className="space-y-6 text-left max-w-2xl mx-auto text-stone-600">
      <p>Due to the bespoke nature of our heritage couture, we do not accept returns or exchanges on custom-made or altered garments.</p>
      <p>For standard-sized, unworn items in their original condition with all tags attached, we accept returns within 7 days of delivery. A store credit will be issued upon quality inspection.</p>
      <p>Please contact our client care team to initiate a return request.</p>
    </div>
  ),
  'Garment Care': (
    <div className="space-y-6 text-left max-w-2xl mx-auto text-stone-600">
      <p>Your Saaj couture is a labor of love and requires delicate handling to maintain its pristine condition over generations.</p>
      <ul className="list-disc pl-5 space-y-3 mt-4">
        <li><strong className="text-stone-800">Dry Clean Only:</strong> We strongly recommend professional dry cleaning for all our handwoven silks and embroidered pieces.</li>
        <li><strong className="text-stone-800">Storage:</strong> Store your garments in a cool, dry place. Wrap sarees and lehengas in unbleached cotton or muslin cloth to allow the fabric to breathe and prevent tarnishing of zari work.</li>
        <li><strong className="text-stone-800">Airing:</strong> Refold your garments every few months to prevent creasing at the same folds. Air them out away from direct sunlight.</li>
      </ul>
    </div>
  ),
  'FAQs': (
    <div className="space-y-6 text-left max-w-2xl mx-auto text-stone-600">
      <h3 className="font-serif text-xl text-stone-800">Do you offer custom tailoring?</h3>
      <p>Yes, we offer bespoke tailoring services for our bridal couture and lehengas. Please book an appointment with our atelier.</p>
      <h3 className="font-serif text-xl text-stone-800 mt-8">How long does a bridal outfit take to make?</h3>
      <p>Depending on the intricacy of the embroidery and hand-weaving, a bridal ensemble can take anywhere from 3 to 6 months. We recommend starting the process well in advance.</p>
    </div>
  ),
  'Privacy Policy': (
    <div className="space-y-6 text-left max-w-2xl mx-auto text-stone-600">
      <p>Saaj Couture ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website.</p>
      <p>We collect and process data to fulfill your orders, provide a personalized shopping experience, and communicate with you about our latest collections and offers.</p>
      <p>We do not sell or share your personal information with third parties for their marketing purposes without your explicit consent.</p>
    </div>
  ),
  'Terms of Service': (
    <div className="space-y-6 text-left max-w-2xl mx-auto text-stone-600">
      <p>By accessing or using the Saaj website, you agree to be bound by these Terms of Service. All content, designs, and imagery on this site are the exclusive property of Saaj Couture and are protected by copyright laws.</p>
      <p>We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion. Prices for our products are subject to change without notice.</p>
    </div>
  ),
  'Cookie Policy': (
    <div className="space-y-6 text-left max-w-2xl mx-auto text-stone-600">
      <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Cookies are small data files stored on your device.</p>
      <p>You can choose to accept or decline cookies through your browser settings. However, declining cookies may prevent you from taking full advantage of the website.</p>
    </div>
  ),
};

export default function PlaceholderPage({ title }: { title: string }) {
  const content = contents[title] || (
    <p className="text-stone-600 leading-relaxed text-lg text-center max-w-3xl mx-auto">
      Welcome to the {title} page. This section is currently being updated by our team.
    </p>
  );

  return (
    <div className="min-h-screen bg-sand-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-5xl md:text-6xl text-stone-900 mb-12 text-center">{title}</h1>
        {content}
      </div>
    </div>
  );
}
