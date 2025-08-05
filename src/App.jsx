import React, { useState } from 'react';
import { ChevronRight, Users, Globe, Shield, Award, DollarSign, CheckCircle, Star, TrendingUp, Clock, Gift, ArrowRight, Menu, X } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const signupLink = "https://mobileverify.net/sl/0mrmk";

  const stats = [
    { number: '29,050,134', label: 'Registered Users' },
    { number: '197', label: 'Countries' },
    { number: '100,350,863', label: 'Surveys Launched' },
    { number: '#1', label: 'Global Platform' }
  ];

  const benefits = [
    { icon: DollarSign, title: 'Earn Up to ₦2,500 Per Survey', desc: 'Complete surveys and earn real money directly to your bank account' },
    { icon: Clock, title: 'Flexible Schedule', desc: 'Work whenever you want, from anywhere in the world' },
    { icon: Shield, title: 'Data Protected', desc: 'Your personal information is never shared with third parties' },
    { icon: Award, title: 'Premium Surveys', desc: 'Access to high-quality surveys from prestigious global brands' }
  ];

  const steps = [
    { step: '01', title: 'Easy Regiatration', desc: 'Join our community in just a few seconds with your email address' },
    { step: '02', title: 'Complete Surveys', desc: 'Answer surveys and studies that match your profile every day' },
    { step: '03', title: 'Get Paid', desc: 'Request withdrawal of your earnings via bank transfer anytime' }
  ];

  const testimonials = [
    { name: 'Sarah M.', rating: 5, text: 'I\'ve earned over ₦36,500 in my first month! The surveys are interesting and the payment is always on time.' },
    { name: 'Michael T.', rating: 5, text: 'Great way to earn extra income in my spare time. The platform is user-friendly and trustworthy.' },
    { name: 'Emma L.', rating: 5, text: 'Finally found a legitimate survey site that actually pays. Highly recommend Surveoo!' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                surveoo
              </div>
            </div>
            <div className="hidden md:block">
              <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Join Now
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-50 py-5 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              #1 Global Survey Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Your Opinions Into Real Money
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              In today's digital economy, your opinions have real value. Companies around the world are desperately seeking consumer insights to improve their products and services, and they're willing to pay handsomely for your thoughts. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center group">
                Start Now - Sign Up
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Why Your Opinion Matters More Than Ever
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              In an increasingly competitive marketplace, companies are fighting harder than ever for consumer attention and loyalty. The brands that succeed are those that truly understand their customers' needs, preferences, and pain points. This is where you come in. Your everyday experiences as a consumer, your purchasing decisions, your brand preferences, and even your frustrations with products and services provide invaluable insights that companies are willing to pay premium prices to access.
            </p>

            <p className="text-lg mb-8">
              Market research has evolved dramatically over the past decade. Gone are the days when companies relied solely on focus groups and expensive research firms. Today's leading brands understand that authentic consumer feedback comes from real people living real lives, making real purchasing decisions. They need to understand how you shop, what influences your choices, what problems you face, and what solutions you're seeking. This shift has created an unprecedented opportunity for ordinary people to earn significant income simply by sharing their honest opinions.
            </p>

            <p className="text-lg mb-8">
              The beauty of the survey economy is its accessibility and flexibility. Unlike traditional part-time jobs that require specific schedules, locations, or skill sets, participating in market research surveys can be done from anywhere, at any time, by anyone. Whether you're waiting for an appointment, relaxing at home in the evening, or have a few minutes during your lunch break, you can turn these moments into earning opportunities. Many of our most successful members treat survey completion as their "micro-business," consistently earning hundreds or even thousands of dollars per month by dedicating just a few hours each week to sharing their thoughts.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl my-12">
              <p className="text-lg text-gray-800 font-medium mb-4">
                Consider this: Every time you make a purchase, visit a website, try a new product, or experience a service, you're generating valuable data points that companies desperately need. Instead of giving this information away for free through your regular consumer behavior, why not get paid for it?
              </p>
            </div>

            <p className="text-lg mb-8">
              Surveoo has revolutionized this process by creating a seamless connection between companies seeking insights and consumers willing to share them. We've eliminated the middlemen, the complicated processes, and the unreliable payment systems that have plagued the industry for years. Our platform ensures that you're matched with surveys that are relevant to your demographic profile and interests, maximizing both your earning potential and the value you provide to our research partners.
            </p>
          </div>

          <div className="text-center mt-12">
            <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Start Sharing Your Valuable Opinions
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Surveoo Works: Your Path to Consistent Earnings
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                We've spent years perfecting our system to make earning money from surveys as straightforward and profitable as possible. Our three-step process eliminates confusion and gets you earning money quickly, while our advanced matching algorithms ensure you receive surveys that align with your interests and demographic profile.
              </p>
              <p className="mb-8">
                Unlike other platforms that overwhelm you with irrelevant surveys or make the sign-up process unnecessarily complicated, Surveoo focuses on simplicity and results. We believe that your time is valuable, so we've streamlined every aspect of the experience to maximize your earning potential while minimizing the time spent on administrative tasks.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white p-8 rounded-xl shadow-sm text-center group hover:shadow-lg transition-all">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{step.desc}</p>

                {/* Detailed explanations for each step */}
                {index === 0 && (
                  <div className="text-sm text-gray-600 leading-relaxed mt-4">
                    <p>Registration takes less than 60 seconds and requires only basic information. We'll ask about your demographics, interests, and lifestyle to ensure you receive the most relevant and highest-paying surveys. The more complete your profile, the more survey opportunities you'll receive.</p>
                  </div>
                )}

                {index === 1 && (
                  <div className="text-sm text-gray-600 leading-relaxed mt-4">
                    <p>Our system matches you with 3-10 new surveys daily based on your profile. Each survey clearly displays the estimated completion time and payout before you begin. Most surveys take 5-20 minutes to complete and cover topics from consumer products to entertainment preferences.</p>
                  </div>
                )}

                {index === 2 && (
                  <div className="text-sm text-gray-600 leading-relaxed mt-4">
                    <p>Request payouts as soon as you reach the minimum threshold. We process bank transfers within 2-5 business days with no hidden fees. Track your earnings in real-time through your dashboard and set up automatic withdrawal schedules if you prefer.</p>
                  </div>
                )}

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Science Behind Survey Matching</h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Our proprietary matching algorithm considers over 50 different data points to connect you with the most relevant surveys. This isn't random selection – it's precision targeting that benefits both you and our research partners. When you receive surveys that align with your genuine experiences and interests, you provide more valuable insights, which allows us to offer higher payouts.
              </p>
              <p className="mb-6">
                The system learns from your survey completion patterns, feedback ratings, and demographic responses to continuously improve the quality of survey matches. This means that the longer you're a member, the better the surveys become, and the higher your average earnings per survey tend to be. Our most experienced members often earn 20-30% more per survey than new users simply because they receive better-matched opportunities.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Get Started - Join Now
            </a>
          </div>
        </div>
      </section>

      {/* Earning Potential */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Your Realistic Earning Potential
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              Let's talk numbers. While we can't guarantee specific earnings (because they depend on your activity level, demographic profile, and the surveys available in your region), we can provide realistic expectations based on our member data. The average active Surveoo member earns between 140,500-₦262,500 per month, with our most dedicated users earning ₦362,500 monthly. These aren't get-rich-quick numbers, but they represent meaningful supplemental income that can make a real difference in your financial situation.
            </p>

            <p className="text-lg mb-8">
              Your earning potential depends on several factors that are largely within your control. Geographic location plays a role – members in major metropolitan areas and developed countries typically see more survey opportunities. Age and income demographics matter too, as certain market research studies target specific age groups or income brackets. However, we have high-earning members across all demographics, so don't let these factors discourage you from getting started.
            </p>

            <p className="text-lg mb-8">
              The most significant factor in your earning potential is consistency. Members who log in daily and complete their available surveys earn significantly more than those who participate sporadically. This isn't just about quantity – regular participation also improves your member rating, which gives you access to higher-paying premium surveys and exclusive research opportunities. Think of it like building a reputation; the more reliable you are, the more valuable you become to our research partners.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Member Earnings Examples:</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">₦60,500/month</div>
                  <div className="text-sm text-gray-600">Casual participant<br />3-4 surveys weekly</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">₦160,500/month</div>
                  <div className="text-sm text-gray-600">Regular participant<br />1-2 surveys daily</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">₦262,500/month</div>
                  <div className="text-sm text-gray-600">Dedicated participant<br />3-5 surveys daily</div>
                </div>
              </div>
            </div>

            <p className="text-lg mb-8">
              Beyond the base survey earnings, Surveoo offers several ways to boost your income. Our referral program pays you for every friend you bring to the platform. Bonus surveys appear regularly for members with high completion rates. We also run seasonal campaigns and special research projects that offer premium payouts for qualified participants. Some of our members have earned over ₦160,500 from a single specialized research study.
            </p>

            <p className="text-lg mb-8">
              It's important to understand that survey availability fluctuates based on market research needs. Some weeks you might have 20+ surveys available, while other weeks might offer fewer opportunities. This is normal and reflects the natural cycles of market research. However, our massive network of research partners ensures that there are always opportunities available for active members. We work with over 500 brands and research companies globally, so when one sector is quiet, others are typically active.
            </p>
          </div>

          <div className="text-center mt-12">
            <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Start Building Your Survey Income
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Surveoo Stands Apart
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-8">
                The online survey industry is crowded with platforms promising easy money, but few deliver on their promises. We've built Surveoo to address every major complaint and frustration that survey takers have experienced with other platforms. Our commitment to transparency, fair compensation, and member satisfaction has made us the preferred choice for millions of users worldwide.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all group">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fair and Transparent Payments</h3>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  Many survey platforms frustrate users with confusing point systems, high payout thresholds, or hidden fees. Surveoo uses straightforward dollar amounts for all payouts, maintains low minimum withdrawal limits, and never charges fees for standard bank transfers. You'll always know exactly how much you're earning and when you can access your money.
                </p>
                <p>
                  Our payment processing is handled by established financial partners with bank-level security. We maintain segregated accounts for member payments, ensuring your earnings are always protected. Most members receive their payments within 2-3 business days of requesting withdrawal.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Over Quantity</h3>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  We deliberately limit the number of surveys you receive to ensure each one is relevant and well-compensated. Rather than overwhelming you with dozens of low-paying, irrelevant surveys, we focus on sending you 5-10 high-quality opportunities that match your profile and interests.
                </p>
                <p>
                  This approach benefits everyone: you spend less time screening surveys and more time earning money, while our research partners receive higher-quality responses from engaged participants. It's a sustainable model that creates better outcomes for all parties involved.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-xl mb-6 opacity-90">Join millions of users who have discovered a better way to earn money from surveys</p>
            <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Sign Up Now
            </a>
          </div>
        </div>
      </section>

      {/* Trust and Security */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Your Privacy and Security Are Our Priority
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              In an era where data breaches and privacy violations dominate headlines, protecting your personal information isn't just important – it's essential. Surveoo operates under strict data protection protocols that exceed industry standards. We understand that sharing your opinions and demographic information requires trust, and we've built our entire infrastructure around earning and maintaining that trust.
            </p>

            <p className="text-lg mb-8">
              Your personal data is encrypted using bank-level security protocols and stored in secure, geographically distributed data centers. We never sell, rent, or share your personal information with third parties outside of the specific research studies you choose to participate in. Even then, your responses are aggregated and anonymized before being shared with research partners. The brands you're providing feedback about never see your individual responses or personal details.
            </p>

            <p className="text-lg mb-8">
              Our privacy policy is written in plain English, not legal jargon, because we believe transparency starts with clear communication. You'll always know what information we collect, how it's used, and what rights you have regarding your data. You can request copies of your data, ask for corrections, or delete your account entirely at any time. These aren't just legal requirements – they're fundamental principles that guide how we operate.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl my-12">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Security Commitments:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Protection</h4>
                  <p className="text-sm text-gray-600">256-bit SSL encryption, secure data centers, regular security audits, and compliance with international privacy laws including GDPR and CCPA.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Financial Security</h4>
                  <p className="text-sm text-gray-600">Segregated payment accounts, PCI-compliant payment processing, fraud monitoring, and secure banking partnerships.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Account Protection</h4>
                  <p className="text-sm text-gray-600">Two-factor authentication options, suspicious activity monitoring, secure password requirements, and account recovery procedures.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Transparency</h4>
                  <p className="text-sm text-gray-600">Clear privacy policies, regular security updates, open communication about data usage, and responsive customer support.</p>
                </div>
              </div>
            </div>

            <p className="text-lg mb-8">
              We also maintain strict partnerships with our research clients. Every company that accesses survey data through our platform must meet our security and privacy standards. We regularly audit our partners and immediately terminate relationships with any organization that doesn't maintain our high standards. This vetting process ensures that your opinions are only shared with legitimate, reputable companies conducting genuine market research.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Data Protected</h3>
              <p className="text-gray-600">Your personal information is never shared with third parties. We use bank-level encryption to keep your data safe and secure at all times.</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Surveys</h3>
              <p className="text-gray-600">We partner only with prestigious brands and companies to bring you the highest-paying surveys on the market from trusted sources.</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Controlled Partners</h3>
              <p className="text-gray-600">All our survey partners are vetted and verified. We work only with the most important and reputable players in the market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Stories from Real Members
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
              <p className="mb-8">
                The best testament to Surveoo's value comes from our members themselves. These aren't cherry-picked success stories or fabricated testimonials – they're genuine experiences from people just like you who decided to turn their spare time into earning time. Their stories illustrate the real potential of consistent survey participation and the impact that supplemental income can have on everyday life.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-900">- {testimonial.name}</div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories That Inspire</h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Jennifer, a single mother from Texas, started using Surveoo to earn extra money for her daughter's school supplies. What began as earning ₦12,500-20,000 per month quickly grew to ₦262,500+ as she became more consistent with her survey completion. "I love that I can do this while my daughter is sleeping or watching TV," she says. "It's like having a part-time job that works around my schedule instead of the other way around."
              </p>
              <p className="mb-6">
                Marcus, a college student in California, uses Surveoo earnings to offset his textbook costs and social expenses. "I was skeptical at first because I'd tried other survey sites that were total scams," he explains. "But Surveoo actually pays what they promise, when they promise it. I've earned over ₦262,500 in the past year, which has made a huge difference in my college experience."
              </p>
              <p className="mb-6">
                Robert and Linda, a retired couple from Florida, have turned survey participation into a fun activity they do together. "We compete to see who can earn more each month," Linda laughs. "Together, we're earning about ₦132,500 monthly, which covers our dining out budget and gives us extra money for travel. It's amazing how sharing our opinions about products we already use can generate real income."
              </p>
            </div>
          </div>

          <div className="text-center">
            <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Join Thousands of Happy Users
            </a>
          </div>
        </div>
      </section>

      {/* Common Concerns */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Addressing Your Concerns
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl mb-8">
              We understand that you might have questions or concerns about participating in online surveys. After all, the internet is full of scams and empty promises about easy money. We've been in this industry long enough to know exactly what worries potential members, and we want to address these concerns directly and honestly.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">"Is this really legitimate?"</h3>
            <p className="text-lg mb-8">
              This is by far the most common question we receive, and it's completely understandable. The paid survey industry has been plagued by scams, pyramid schemes, and platforms that promise huge earnings but never pay out. Surveoo is different because we're a legitimate business with real revenue streams, real partnerships with Fortune 500 companies, and a proven track record of paying our members consistently for over a decade.
            </p>

            <p className="text-lg mb-8">
              Our business model is straightforward: companies pay us to conduct market research, and we share a significant portion of that payment with the survey participants (you). We make money when you make money, which creates a sustainable relationship where everyone benefits. We're not selling you anything, we're not asking for upfront payments, and we're not recruiting you into a multi-level marketing scheme. We're simply connecting your opinions with companies that need them.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">"How much time will this really take?"</h3>
            <p className="text-lg mb-8">
              Time investment varies based on your goals and the earning level you want to achieve. If you're looking to earn ₦100,000-262,500 per month, you can expect to spend about 30-45 minutes per day completing surveys. For higher earnings in the ₦162,500-₦262,500 range, you might dedicate 60-90 minutes daily. The beauty of survey participation is that this time can be broken up throughout your day – 10 minutes here, 15 minutes there.
            </p>

            <p className="text-lg mb-8">
              Many members find that survey completion becomes a relaxing routine. Instead of mindlessly scrolling social media or watching TV, they're earning money while sharing their thoughts about products and services they already have opinions about. It's productive downtime that generates real financial returns.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">"What if I don't qualify for surveys?"</h3>
            <p className="text-lg mb-8">
              Survey qualification is a reality in market research – not every survey will be a match for your demographic profile. However, our advanced matching system significantly reduces the number of surveys you won't qualify for. While other platforms might have qualification rates as low as 10-20%, Surveoo members typically qualify for 60-70% of the surveys they attempt.
            </p>

            <p className="text-lg mb-8">
              When you don't qualify for a survey, we still value your time. Our system tracks your attempt and factors it into your member rating, which influences the quality of future survey matches. Plus, we often provide small compensation for your time even when you don't qualify, something many other platforms don't offer.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">"Are there any hidden costs or fees?"</h3>
            <p className="text-lg mb-8">
              Absolutely not. Registration is completely free, and standard bank transfers are free. We never charge membership fees, processing fees, or maintenance fees. The only potential cost is if you choose expedited payment options (like same-day transfers), which carry small convenience fees clearly disclosed upfront. However, standard bank transfers, which take 2-5 business days, are always free.
            </p>

            <p className="text-lg mb-8">
              We make our money from the research fees paid by companies, not from our members. Your success is our success, which is why we're motivated to provide the best possible experience and ensure you earn as much as possible from your survey participation.
            </p>
          </div>

          <div className="text-center mt-12">
            <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Start Earning Today
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Financial Future Starts Today
          </h2>
          <div className="prose prose-lg max-w-none text-white/90 leading-relaxed mb-12">
            <p className="text-xl mb-8">
              Every day you wait is money left on the table. While you're reading this, our members are completing surveys and earning real money. The companies need your opinions right now, and they're willing to pay premium rates to get them. The question isn't whether this opportunity is real – it's whether you're ready to take advantage of it.
            </p>

            <p className="text-lg mb-8">
              Think about what an extra ₦32,500, ₦62,500, or even ₦122,500 per month could mean for your life. That could be your car payment, your grocery budget, your vacation fund, or your emergency savings. It could be the difference between financial stress and financial breathing room. All it takes is the decision to start and the commitment to be consistent.
            </p>

            <p className="text-lg mb-8">
              Surveoo isn't get-rich-quick scheme, and we don't promise overnight wealth. What we offer is something better: a legitimate, sustainable way to earn meaningful income by sharing your opinions with companies that desperately need your insights. It's real work that provides real value and generates real money.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Easy Registration</div>
                <div className="text-sm opacity-75">No credit card required</div>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Instant Access</div>
                <div className="text-sm opacity-75">Start earning immediately</div>
              </div>
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Bank Transfer Payments</div>
                <div className="text-sm opacity-75">Direct to your account</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-2xl font-bold mb-2">Join Over 29 Million Users</div>
            <div className="text-lg opacity-90">Who Have Already Discovered the Power of Paid Surveys</div>
          </div>

          <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors mb-6 inline-block">
            Start Earning With Surveoo
          </a>

          <div className="text-sm opacity-75 mb-8">
            ✓ Takes less than 60 seconds to register ✓ Start earning today ✓ Available worldwide
          </div>

          <div className="mt-12 p-6 bg-white/5 rounded-xl">
            <div className="text-lg font-semibold mb-2">Still have questions?</div>
            <div className="text-sm opacity-90 mb-4">
              Our customer support team is available 24/7 to help you get started and maximize your earnings.
              Join now and discover why millions of people trust Surveoo with their time and opinions.
            </div>
            <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-white/20 text-white px-6 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium">
              Join Now - It's Free!
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-4">
              surveoo
            </div>
            <p className="text-gray-400 mb-6">Turn your opinions into real money</p>
            
            <div className="mb-6">
              <a href={signupLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Join Surveoo Today
              </a>
            </div>
            
            <div className="text-sm text-gray-500">
              © 2024 Surveoo. All rights reserved. • Privacy Policy • Terms of Service • Contact Support
            </div>
            <div className="mt-4 text-xs text-gray-600">
              Surveoo is a legitimate market research platform connecting consumers with companies seeking valuable insights.
              Earnings vary based on participation level and demographic factors. All payments are processed securely through established financial partners.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;