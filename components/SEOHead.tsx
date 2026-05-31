import React, { useEffect } from 'react';
import { SEOMeta } from '../types';

interface SEOHeadProps extends SEOMeta {
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schemas?: object[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, schema, schemas, canonicalUrl, ogType = 'website', ogImage = 'https://kagurabachimanga.online/kagurabachi-manga-logo.png' }) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Open Graph tags
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:type': ogType,
      'og:site_name': 'Kagurabachi Manga',
      'og:image': ogImage,
    };
    if (canonicalUrl) {
      ogTags['og:url'] = canonicalUrl;
    }
    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Card tags
    const twitterTags: Record<string, string> = {
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage,
    };
    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Add Canonical Tag
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // Add Schema.org JSON-LD (primary schema)
    if (schema) {
      let scriptSchema = document.querySelector('#structured-data');
      if (!scriptSchema) {
        scriptSchema = document.createElement('script');
        scriptSchema.id = 'structured-data';
        scriptSchema.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptSchema);
      }
      scriptSchema.textContent = JSON.stringify(schema);
    }

    // Add additional schemas (e.g. FAQPage, BreadcrumbList)
    if (schemas && schemas.length > 0) {
      document.querySelectorAll('.structured-data-extra').forEach(el => el.remove());
      schemas.forEach((s, i) => {
        const el = document.createElement('script');
        el.className = 'structured-data-extra';
        el.setAttribute('type', 'application/ld+json');
        el.id = `structured-data-${i}`;
        el.textContent = JSON.stringify(s);
        document.head.appendChild(el);
      });
    }

  }, [title, description, schema, schemas, canonicalUrl, ogType, ogImage]);

  return null;
};

export default SEOHead;