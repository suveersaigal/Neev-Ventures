import { motion } from 'framer-motion'
import { useState } from 'react'
import SEO from '../components/SEO'

const getOfficeEmbedUrl = (fileUrl) =>
  `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`

const formatLabels = {
  ppt: 'PPT',
  doc: 'Document',
  canva: 'Canva',
  pdf: 'PDF',
}

const pptUrls = [
  'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Copy%20of%20ALL%20ABOUT%20BANKS%20%281%29%20%283%29.pptx',
  'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Neev%20Workshop%201%20%281%29%20%282%29.pptx',
  'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Neev%20Workshop%201%20%282%29%20%281%29.pptx',
]

const canvaViewUrl =
  'https://www.canva.com/design/DAGwWkWMhro/_6lNFxwTEfKM1S-OKOKV1g/view?utm_content=DAGwWkWMhro&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
const canvaEmbedUrl = `${canvaViewUrl}&embed`

const additionalCanvaViewUrl = 'https://www.canva.com/design/DAHEkrJh6A4/HqBsY_hjU8md5x946LASxw/view'
const additionalCanvaEmbedUrl = `${additionalCanvaViewUrl}?embed`
const googleSlidesPreviewUrl =
  'https://docs.google.com/presentation/d/1RWPXdqY0BLOF83Ss34Zckjh_8iq4xjuc/preview'
const googleSlidesEditUrl =
  'https://docs.google.com/presentation/d/1RWPXdqY0BLOF83Ss34Zckjh_8iq4xjuc/edit'

const resourceDocs = [
  {
    id: 15,
    title: 'Workshop PPT (Google Slides)',
    description: 'Google Slides deck (opens in Google Slides).',
    language: 'hindi',
    format: 'ppt',
    embed: 'https://docs.google.com/presentation/d/10vXWsVR3u6UzQXP4neNoZ1flrT4FETv1/preview',
    link: 'https://docs.google.com/presentation/d/10vXWsVR3u6UzQXP4neNoZ1flrT4FETv1/edit?slide=id.p1#slide=id.p1',
  },
  {
    id: 14,
    title: 'Workshop PPT (Google Slides)',
    description: 'Google Slides deck (opens in Google Slides).',
    language: 'hindi',
    format: 'ppt',
    embed: 'https://docs.google.com/presentation/d/1gMMOZBTc2teJrFvzena0ZhscILsVnZth/preview',
    link: 'https://docs.google.com/presentation/d/1gMMOZBTc2teJrFvzena0ZhscILsVnZth/edit?slide=id.p1#slide=id.p1',
  },
  {
    id: 13,
    title: 'Workshop PPT (Canva)',
    description: 'Canva deck (opens in Canva).',
    language: 'english',
    format: 'canva',
    embed: additionalCanvaEmbedUrl,
    link: additionalCanvaViewUrl,
  },
  {
    id: 12,
    title: 'Workshop PPT (Google Slides)',
    description: 'Google Slides deck (opens in Google Slides).',
    language: 'english',
    format: 'ppt',
    embed: googleSlidesPreviewUrl,
    link: googleSlidesEditUrl,
  },
  {
    id: 1,
    title: 'All About Banks',
    description: 'Hindi primer explaining how banks, savings, and digital accounts work.',
    language: 'hindi',
    format: 'ppt',
    embed: getOfficeEmbedUrl(pptUrls[0]),
  },
  {
    id: 2,
    title: 'All About Banks (English Canva)',
    description: 'English version of the “All About Banks” deck via Canva, ready for sharing and reuse.',
    language: 'english',
    format: 'canva',
    embed: canvaEmbedUrl,
    link: canvaViewUrl,
  },
  {
    id: 3,
    title: 'Budgeting and Saving',
    description: 'A comprehensive guide on managing personal finances, tracking expenses, and effective saving strategies.',
    language: 'hindi',
    format: 'ppt',
    embed: getOfficeEmbedUrl(pptUrls[1]),
  },
  {
    id: 4,
    title: 'Budgeting and Saving (English)',
    description: 'A comprehensive guide on managing personal finances, tracking expenses, and effective saving strategies.',
    language: 'english',
    format: 'ppt',
    embed: getOfficeEmbedUrl(pptUrls[2]),
  },
  {
    id: 5,
    title: 'UPI Workshop (Hindi)',
    description: 'Hindi PowerPoint covering the basics of UPI onboarding, safety, and everyday use cases.',
    language: 'hindi',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Copy%20of%20UPI%20workshop%20%281%29%20Hindi.pptx',
    ),
  },
  {
    id: 6,
    title: 'UPI Workshop (English)',
    description: 'English version of the UPI workshop with focus on digital payments and security tips.',
    language: 'english',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Copy%20of%20UPI%20workshop%20English.pptx',
    ),
  },
  {
    id: 7,
    title: 'Government Schemes (Hindi)',
    description: 'Hindi deck highlighting relevant government schemes for entrepreneurs and artisans.',
    language: 'hindi',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Government%20Schemes%20%281%29%20Hindi.pptx',
    ),
  },
  {
    id: 8,
    title: 'Government Schemes (English)',
    description: 'English deck outlining central schemes, eligibility, and how women entrepreneurs can benefit.',
    language: 'english',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Government%20Schemes%20%282%29%20English.pptx',
    ),
  },
  {
    id: 9,
    title: 'Marketing Workshop (English)',
    description: 'English presentation on basic marketing tactics for micro-businesses.',
    language: 'english',
    format: 'ppt',
    embed: getOfficeEmbedUrl(
      'https://yoaod3ugpbqutyxo.public.blob.vercel-storage.com/neev%20ventures/Marketing%20workshop%20English.pptx',
    ),
  },
  {
    id: 10,
    title: 'Business Fundamentals',
    description: 'An introductory guide covering branding, basic marketing concepts, and strategies for building strong customer relationships.',
    language: 'hindi',
    format: 'pdf',
    embed: '/our-model/Business%20Fundamentals%20Hindi.pdf',
    link: '/our-model/Business%20Fundamentals%20Hindi.pdf',
  },
  {
    id: 11,
    title: 'Business Fundamentals (English)',
    description: 'An introductory guide covering branding, basic marketing concepts, and strategies for building strong customer relationships.',
    language: 'english',
    format: 'pdf',
    embed: '/our-model/workshop%201%20kali-%20business%20fundamentals%20English.pdf',
    link: '/our-model/workshop%201%20kali-%20business%20fundamentals%20English.pdf',
  },
]

const Resources = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('hindi')

  return (
    <>
      <SEO
        title="Resources & Workshops"
        description="Free educational resources in Hindi and English. Download PowerPoints and view our Canva deck instantly."
        keywords="financial literacy, resources, PPT, Canva, women empowerment, Hindi resources, English resources"
      />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-['Urbanist'] font-bold text-black mb-6">
              Resources & Workshops
            </h1>
            <p className="font-['Urbanist'] font-normal text-black text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center">
              We provide free access to resources from our financial literacy and entrepreneurship workshops. These materials are available in both English and Hindi to ensure wider reach, inclusivity, and accessibility—so that more individuals and communities can learn, apply, and benefit from these insights in their own entrepreneurial journeys.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['hindi', 'english'].map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`px-8 py-3 rounded-full font-['Urbanist'] font-bold text-lg transition-all duration-300 shadow-md ${
                  selectedLanguage === lang
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white text-black border border-gray-200 hover:border-gray-400'
                }`}
              >
                {lang === 'hindi' ? 'हिंदी' : 'English'}
              </button>
            ))}
          </motion.div>

          <div className="space-y-10">
            {resourceDocs
              .filter((doc) => doc.language === selectedLanguage)
              .map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
                  className="rounded-3xl border border-gray-200 bg-white shadow-lg overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 sm:p-8 bg-gray-50 border-b border-gray-100 gap-4">
                    <div>
                      <h3 className="text-2xl font-['Urbanist'] font-bold text-black mb-2">{doc.title}</h3>
                      <p className="font-['Urbanist'] font-normal text-black text-base">{doc.description}</p>
                    </div>
                    <span className="shrink-0 px-4 py-2 rounded-full text-xs font-['Urbanist'] font-bold text-black border border-gray-300 bg-white uppercase tracking-wider shadow-sm">
                      {`${doc.language === 'hindi' ? 'Hindi' : 'English'} ${
                        formatLabels[doc.format] ?? doc.format
                      }`}
                    </span>
                  </div>
                  <div className="w-full">
                    {doc.embed ? (
                      <>
                        <iframe
                          title={doc.title}
                          src={doc.embed}
                          className="w-full h-[650px] border-none bg-white"
                          loading="lazy"
                        />
                        {doc.link && (
                          <div className="p-6 bg-white flex justify-end border-t border-gray-100">
                            <a
                              href={doc.link}
                              target="_blank"
                              rel="noreferrer"
                              className="px-8 py-3 rounded-full text-base font-['Urbanist'] font-bold text-white bg-black hover:bg-gray-800 shadow-lg transition-all duration-300"
                            >
                              {doc.format === 'canva' ? 'Open in Canva' : 'Open'}
                            </a>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="p-10 bg-white flex justify-center">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noreferrer"
                          className="px-8 py-3 rounded-full text-lg font-['Urbanist'] font-bold text-white bg-black hover:bg-gray-800 shadow-lg transition-all duration-300"
                        >
                          Open
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Resources
