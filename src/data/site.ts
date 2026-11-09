import heroEngineer from '../assets/images/hero-engineer.jpg'
import boilerWorcester from '../assets/images/boiler-worcester.jpg'
import boilerRepair from '../assets/images/boiler-repair.jpg'
import copper from '../assets/images/copper.jpg'
import radiator from '../assets/images/radiator.jpg'
import bathroomMain from '../assets/images/bathroom-main.jpg'
import bathroomSink from '../assets/images/bathroom-sink.jpg'
import bathroomBlue from '../assets/images/bathroom-blue.jpg'
import bathroomTub from '../assets/images/bathroom-tub.jpg'
import kitchenWhite from '../assets/images/kitchen-white.jpg'
import kitchensMontage from '../assets/images/kitchens-montage.jpg'
import kitchenA from '../assets/images/kitchen-a.jpg'
import kitchenB from '../assets/images/kitchen-b.jpg'
import kitchenC from '../assets/images/kitchen-c.jpg'
import kitchenD from '../assets/images/kitchen-d.jpg'
import kitchenE from '../assets/images/kitchen-e.jpg'
import kitchenF from '../assets/images/kitchen-f.jpg'
import electrician from '../assets/images/electrician.jpg'
import electrician2 from '../assets/images/electrician2.jpg'
import electricianWide from '../assets/images/electrician-wide.jpg'
import logoBanner from '../assets/images/logo-banner.jpg'
import gassafeLogo from '../assets/images/gassafe-logo.jpg'

export const images = {
  heroEngineer,
  boilerWorcester,
  boilerRepair,
  copper,
  radiator,
  bathroomMain,
  bathroomSink,
  bathroomBlue,
  bathroomTub,
  kitchenWhite,
  kitchensMontage,
  kitchenA,
  kitchenB,
  kitchenC,
  kitchenD,
  kitchenE,
  kitchenF,
  electrician,
  electrician2,
  electricianWide,
  logoBanner,
  gassafeLogo,
}

export const business = {
  name: 'Abacus Plumbing & Heating Services',
  category: 'Boiler supplier',
  owner: 'Peter Strachan',
  phoneDisplay: '07966 478062',
  phoneHref: 'tel:+447966478062',
  whatsappDisplay: '07966 478062',
  whatsappHref: 'https://wa.me/447966478062?text=Hi%20Abacus%2C%20I%27d%20like%20to%20ask%20about%20a%20plumbing%20or%20heating%20job.',
  email: 'abacus15@yahoo.co.uk',
  emailHref: 'mailto:abacus15@yahoo.co.uk',
  address: '31 Cunliffe Street, Edgeley, Stockport, SK3 9LG',
  area: 'Stockport & Greater Manchester',
  rating: 4.7,
  reviewCount: 27,
  established: 'Family-owned',
}

export type Service = {
  title: string
  description: string
  image: string
  alt: string
  cta: string
}

export const services: Service[] = [
  {
    title: 'Boiler Supply, Installation & Replacement',
    description:
      'We supply and fit new combi and system boilers for residential properties, with replacement and upgrades carried out to current standards.',
    image: boilerWorcester,
    alt: 'New Worcester Bosch condensing boiler installation',
    cta: 'Enquire about a boiler',
  },
  {
    title: 'Boiler Repairs & Servicing',
    description:
      'Fast response to boiler breakdowns, fault finding, annual servicing and power flushing to keep your heating reliable.',
    image: boilerRepair,
    alt: 'Engineer repairing a gas boiler',
    cta: 'Report a breakdown',
  },
  {
    title: 'Plumbing Services',
    description:
      'Leaking taps, burst pipes, overflows, water mains, cylinders, pumps and complete plumbing installations.',
    image: copper,
    alt: 'Copper pipework and plumbing fittings',
    cta: 'Ask about plumbing',
  },
  {
    title: 'Bathroom Refurbishment',
    description:
      'Modern bathrooms, walk-in showers, wet rooms and full refurbishments with quality tiling and finishes.',
    image: bathroomMain,
    alt: 'Refurbished bathroom with twin basins and shower',
    cta: 'Plan a bathroom',
  },
  {
    title: 'Kitchen Refurbishment',
    description:
      'Kitchen improvement and fitting services with attention to functional layouts and attractive finishes.',
    image: kitchenA,
    alt: 'Modern fitted kitchen with island and extractor',
    cta: 'Plan a kitchen',
  },
  {
    title: 'Central Heating & Landlord Services',
    description:
      'Central heating repairs, underfloor heating, radiator upgrades, plus landlord gas and electrical safety checks.',
    image: radiator,
    alt: 'Engineer fitting a heated towel radiator',
    cta: 'Landlord enquiry',
  },
]

export type Stat = { label: string; detail: string }

export const stats: Stat[] = [
  { label: 'Boiler supplier', detail: 'Gas Safe registered' },
  { label: '4.7 / 5', detail: '27 Google reviews' },
  { label: '12 Months', detail: 'Workmanship guarantee' },
  { label: 'NHS', detail: 'Discounted rates' },
]

export type GalleryCategory = 'Boilers & Heating' | 'Plumbing' | 'Bathrooms' | 'Kitchens' | 'Electrical'

export type GalleryItem = {
  id: number
  src: string
  alt: string
  category: GalleryCategory
  wide?: boolean
}

export const galleryItems: GalleryItem[] = [
  { id: 1, src: boilerWorcester, alt: 'Worcester Bosch boiler installation', category: 'Boilers & Heating' },
  { id: 2, src: bathroomMain, alt: 'Refurbished bathroom with twin basins', category: 'Bathrooms', wide: true },
  { id: 3, src: kitchenWhite, alt: 'Fitted white kitchen with island', category: 'Kitchens', wide: true },
  { id: 4, src: radiator, alt: 'Heated towel radiator installation', category: 'Boilers & Heating' },
  { id: 5, src: boilerRepair, alt: 'Boiler repair and servicing', category: 'Boilers & Heating' },
  { id: 6, src: copper, alt: 'Copper pipework and fittings', category: 'Plumbing' },
  { id: 7, src: bathroomBlue, alt: 'Blue family bathroom', category: 'Bathrooms' },
  { id: 8, src: kitchenB, alt: 'Classic fitted kitchen with island', category: 'Kitchens' },
  { id: 9, src: bathroomSink, alt: 'Glass basin and chrome tap', category: 'Bathrooms' },
  { id: 10, src: bathroomTub, alt: 'Freestanding bath in a refurbished bathroom', category: 'Bathrooms' },
  { id: 11, src: kitchenC, alt: 'Traditional kitchen with range cooker', category: 'Kitchens' },
  { id: 12, src: electrician2, alt: 'Electrical safety testing', category: 'Electrical' },
  { id: 13, src: kitchenD, alt: 'Wood-finished kitchen with breakfast bar', category: 'Kitchens' },
  { id: 14, src: electrician, alt: 'Electrical installation work', category: 'Electrical' },
  { id: 15, src: kitchenE, alt: 'Contemporary open-plan kitchen', category: 'Kitchens', wide: true },
  { id: 16, src: kitchenF, alt: 'Kitchen with staircase and island', category: 'Kitchens' },
  { id: 17, src: electricianWide, alt: 'Electrician testing a consumer unit', category: 'Electrical', wide: true },
  { id: 18, src: kitchensMontage, alt: 'Selection of completed fitted kitchens', category: 'Kitchens', wide: true },
]

export type Review = { quote: string; name: string; source: string }

export const reviews: Review[] = [
  {
    quote:
      'Abacus fitted out a new shower room complete with new shower panelling, done to time, cost and great quality. Since then I have used them for all plumbing and heating jobs and landlord gas certificates. Highly recommended.',
    name: 'Brendan — Manchester landlord',
    source: 'Google review',
  },
  {
    quote:
      'Peter and his team moved the boiler in my house from upstairs to the cellar with next to no fuss. The new boiler has saved us so much money heating the house. 10/10 — I have already passed his number on twice.',
    name: 'Boiler replacement client',
    source: 'Google review',
  },
  {
    quote:
      'I asked Peter to revamp the kitchen and replace the bathroom. Excellent communication throughout and he kept within my deadlines. The photos show the high standard of his workmanship. Very pleased with the outcome.',
    name: 'Kitchen & bathroom client',
    source: 'Google review',
  },
]

export type Step = { title: string; description: string }

export const steps: Step[] = [
  { title: 'Get in Touch', description: 'Call or send an enquiry with your plumbing, heating or home improvement requirements.' },
  { title: 'Discuss Your Needs', description: 'We talk through the job, the property and what you would like to achieve.' },
  { title: 'Arrange the Visit', description: 'We agree a convenient time and provide a clear, no-obligation quotation.' },
  { title: 'Get the Job Done', description: 'Work is completed to a high standard and backed by our workmanship guarantee.' },
]

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: 'What plumbing and heating services do you offer?',
    answer:
      'We cover plumbing repairs and installations, boiler installation, replacement, servicing and breakdowns, central heating, landlord gas safety certificates, bathrooms, kitchens and general home improvements.',
  },
  {
    question: 'Do you install and replace boilers?',
    answer:
      'Yes. We install and replace combi and system boilers and can advise on the right option for your property. Get in touch with details of your current system for a quotation.',
  },
  {
    question: 'Can I contact you about a boiler breakdown?',
    answer:
      'Yes. Call 07966 478062 to discuss the problem. We offer emergency call-outs and a fast response, with availability depending on the day.',
  },
  {
    question: 'Are you Gas Safe registered?',
    answer:
      'Yes. Abacus is Gas Safe registered, so you can be confident that gas work is carried out safely and legally by a qualified engineer.',
  },
  {
    question: 'Do you undertake bathroom and kitchen refurbishment?',
    answer:
      'Yes. We handle bathroom upgrades, walk-in showers, wet rooms, tiling and complete kitchen improvement and fitting projects.',
  },
  {
    question: 'Do you provide landlord safety checks?',
    answer:
      'Yes. We carry out landlord gas and electrical safety checks, and currently offer 10% off landlord gas safety certificates. Please ask for details.',
  },
  {
    question: 'How can I request a quote?',
    answer:
      'Use the enquiry form below or call 07966 478062 and describe the work you need. Quotes are free and without obligation.',
  },
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
]
