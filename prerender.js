import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Routes to pre-render
const routes = [
  { path: '/about', title: 'About Us – Sri Vaitheswara Clinic (SVR Clinic), Mayiladuthurai', description: 'Learn about Sri Vaitheswara Clinic\'s 40+ year history of providing quality, affordable healthcare in Mayiladuthurai. Trusted by the community since 1980.' },
  { path: '/services', title: 'Medical Services – Sri Vaitheswara Clinic (SVR Clinic), Mayiladuthurai', description: 'Comprehensive medical services including Cardiology, ENT, Pediatrics, General Surgery, Urology, and General Medicine at affordable prices in Mayiladuthurai.' },
  { path: '/doctors', title: 'Our Expert Doctors – Sri Vaitheswara Clinic (SVR Clinic), Mayiladuthurai', description: 'Meet our team of highly qualified specialists including Cardiologist, ENT Surgeon, Pediatrician, General Surgeon, Urologist, and General Physician in Mayiladuthurai.' },
  { path: '/contact', title: 'Contact Us – Sri Vaitheswara Clinic (SVR Clinic), Mayiladuthurai', description: 'Contact Sri Vaitheswara Clinic in Mayiladuthurai. Call +91 77080 60368 or email sri.v.clinic@gmail.com for appointments and medicine orders.' },
  { path: '/location', title: 'Location & Directions – Sri Vaitheswara Clinic (SVR Clinic), Mayiladuthurai', description: 'Find Sri Vaitheswara Clinic at Pattamangala St, Kamarajar Salai, Mayiladuthurai. Easy access from bus stand, railway station. Open Mon-Sun 8 AM-10 PM.' }
];

// Read the built index.html
const distPath = join(__dirname, 'dist');
const indexPath = join(distPath, 'index.html');
const indexHtml = readFileSync(indexPath, 'utf-8');

// Generate static HTML for each route
routes.forEach(route => {
  // Replace meta tags for each route
  let html = indexHtml
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${route.description}"`)
    .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${route.title}"`)
    .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${route.description}"`)
    .replace(/<meta property="twitter:title" content=".*?"/, `<meta property="twitter:title" content="${route.title}"`)
    .replace(/<meta property="twitter:description" content=".*?"/, `<meta property="twitter:description" content="${route.description}"`)
    .replace(/<link rel="canonical" href=".*?"/, `<link rel="canonical" href="https://www.svrclinic.com${route.path}"`);

  // Create directory and write file
  const routePath = join(distPath, route.path);
  mkdirSync(routePath, { recursive: true });
  writeFileSync(join(routePath, 'index.html'), html);
  
  console.log(`✓ Pre-rendered ${route.path}`);
});

console.log('\n✓ Pre-rendering complete!');
