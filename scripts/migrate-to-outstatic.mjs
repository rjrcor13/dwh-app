import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { doctorsData } from '../app/data/doctors.js';
import { faqsData } from '../app/data/faqs.js';
import { servicesData } from '../app/data/services.js';

const OUTSTATIC_DIR = path.join(__dirname, '..', 'outstatic', 'content');

function exportToMarkdown(collectionName, dataArray, mappingFn) {
  const collectionDir = path.join(OUTSTATIC_DIR, collectionName);
  
  if (!fs.existsSync(collectionDir)) {
    fs.mkdirSync(collectionDir, { recursive: true });
  }

  dataArray.forEach((item, index) => {
    try {
      const frontmatter = mappingFn(item, index);
      const { content, slug, ...rest } = frontmatter;
      
      const yamlStr = Object.entries(rest)
        .filter(([_, v]) => v !== undefined && v !== null)
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return `${key}: [${value.map(v => `"${String(v).replace(/"/g, '\\"')}"`).join(', ')}]`;
          }
          if (typeof value === 'object') {
            return `${key}: '${JSON.stringify(value).replace(/'/g, "''")}'`;
          }
          if (typeof value === 'string') {
            return `${key}: "${value.replace(/"/g, '\\"').replace(/\n/g, ' ')}"`;
          }
          return `${key}: ${value}`;
        }).join('\n');
      
      const fileContent = `---\n${yamlStr}\n---\n\n${content || ''}`;
      
      const fileName = slug ? `${slug}.md` : `item-${index + 1}.md`;
      fs.writeFileSync(path.join(collectionDir, fileName), fileContent);
      console.log(`Created ${collectionName}/${fileName}`);
    } catch (e) {
      console.error(`Error exporting item in ${collectionName}:`, e.message);
    }
  });
}

// 1. Doctors Migration
exportToMarkdown('doctors', doctorsData, (doc) => ({
  title: doc.name,
  status: 'published',
  author: { name: 'Admin', picture: 'https://avatars.githubusercontent.com/u/1?v=4' },
  slug: doc.slug,
  publishedAt: new Date().toISOString(),
  specialties: doc.specialties,
  hospital: doc.hospital,
  image: doc.image,
  clinicDays: doc.clinicDays,
  clinicHours: doc.clinicHours,
  gender: doc.gender,
  hmo: doc.hmo,
  clinicRoom: doc.clinicRoom,
  contactNumber: doc.contactNumber,
  content: doc.bio || 'No bio provided for this doctor.'
}));

// 2. FAQs Migration
exportToMarkdown('faqs', faqsData, (faq, index) => ({
  title: faq.question,
  status: 'published',
  author: { name: 'Admin', picture: 'https://avatars.githubusercontent.com/u/1?v=4' },
  slug: `faq-${index + 1}`,
  publishedAt: new Date().toISOString(),
  keywords: faq.keywords,
  content: faq.answer
}));

// 3. Services Migration
exportToMarkdown('services', servicesData, (service, index) => ({
  title: service.title,
  status: 'published',
  author: { name: 'Admin', picture: 'https://avatars.githubusercontent.com/u/1?v=4' },
  slug: service.slug || `service-${index + 1}`,
  publishedAt: new Date().toISOString(),
  description: service.description,
  fullContentData: service.fullContent, // we'll store JSON string or object
  icon: service.icon,
  content: service.description
}));

console.log('Migration complete!');
