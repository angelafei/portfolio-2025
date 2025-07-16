// import React from 'react';
// import './tagCloud.css';

// const tags = [
//   { label: 'Front-end Development', className: 'tag-blue' },
//   { label: 'Handmade Crafts', className: 'tag-pink' },
//   { label: 'Minimal Design', className: 'tag-yellow' },
//   { label: 'UI/UX', className: 'tag-green' },
//   { label: 'Nature Walks', className: 'tag-lavender' },
//   { label: 'ReactJS', className: 'tag-mint' },
//   { label: 'Simplicity', className: 'tag-peach' },
//   { label: 'Cat', className: 'tag-sky' },
//   { label: 'Dog', className: 'tag-beige' },
//   { label: 'HTML5', className: 'tag-blue' },
//   { label: 'CSS3', className: 'tag-pink' },
//   { label: 'Adobe Creative Suites', className: 'tag-yellow' },
//   { label: 'Adobe Experience Manager', className: 'tag-green' },
//   { label: 'Travel', className: 'tag-lavender' },
//   { label: 'Sustainability', className: 'tag-mint' },
//   { label: 'VueJS', className: 'tag-peach' },
//   { label: 'AngularJS', className: 'tag-sky' },
//   { label: 'Map Libraries', className: 'tag-beige' },
//   { label: 'Mandarin', className: 'tag-blue' },
//   { label: 'NodeJS', className: 'tag-pink' },
//   { label: 'Mocha', className: 'tag-yellow' },
//   { label: 'Chai', className: 'tag-green' },
//   { label: 'Microsoft Office Suiutes', className: 'tag-lavender' },
//   { label: 'Git', className: 'tag-mint' },
//   { label: 'Sinon', className: 'tag-peach' },
//   { label: 'Selenium', className: 'tag-sky' },
// ];

// const TagCloud = () => {
//   return (
//     <section className="about-tags">
//       <h2 className="tag-title">Skills & Interests</h2>
//       <div className="tag-container">
//         {tags.map((tag, index) => (
//           <span
//             key={index}
//             className={`tag ${tag.className}`}
//           >
//             {tag.label}
//           </span>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TagCloud;

"use client"; // This is a client component

import React from 'react';
import './tagCloud.css';

const tagGroups = [
  {
    title: 'Front-end',
    style: 'badge-yellow',
    tags: ['ReactJS', 'VueJS', 'AngularJS', 'HTML5', 'GraphQL', 'Map Libraries', 'Charts Libraries', 'D3', 'FrabricJS']
  },
  {
    title: 'Styling (Front-end)',
    style: 'badge-mint',
    tags: ['CSS3', 'Bootstrap', 'Tailwind', 'Sass']
  },
  {
    title: 'Back-end',
    style: 'badge-blue',
    tags: ['NodeJS', 'PHP', 'Python']
  },
  {
    title: 'Testing',
    style: 'badge-pink',
    tags: ['Mocha', 'Chai', 'Sinon', 'Cypress', 'Selenium', 'Robot Framework']
  },
  {
    title: 'Other Development Tools',
    style: 'badge-green',
    tags: ['Gulp', 'Git', 'Webpack', 'turbopack', 'Babel', 'Apps Script']
  },
  {
    title: 'Other Tools',
    style: 'badge-purple',
    tags: ['Photoshop', 'Illustrator', 'Dreamweaver', 'Adobe Experience Manager', 'Microsoft Office Suite']
  },
  {
    title: 'OS',
    style: 'badge-orange',
    tags: ['Mac', 'Windows', 'Linux']
  },
  
  {
    title: 'Soft Skills & Hobbies',
    style: 'badge-greyblue',
    tags: ['Handmade Crafts', 'Reading', 'Baking', 'Cooking', 'Travel', 'Tarrot', 'Nature Walks', ]
  },
  {
    title: 'More',
    style: 'badge-beige',
    tags: ['Pet Friend', 'Slow Living', 'Inner Peace', 'Meditation', 'Mindfulness', 'Simplicity', 'Sustainability']
  },
  // {
  //   title: 'Fun Things',
  //   style: 'badge-peach',
  //   tags: ['Cat', 'Dog']
  // },
  // {
  //   title: 'Fun Things',
  //   style: 'badge-peach',
  //   tags: ['Tarrot', 'Sewing']
  // }
  // tags: ['UI/UX', 'Adobe Creative Suite', 'Minimal Design', 'Accessibility', 'Map Libraries', 'AEM']
  // 小狐狸錢包
  // 背包

];

const TagCloud = () => {
  return (
    <section className="tag-cloud-section">
      <div className="tags-wrapper">
        <h3 className="tag-title">Skills & Interests</h3>
        <div className="tag-group-container">
          {tagGroups.map((group, idx) => (
            <div key={idx} className="tag-group">
              <h4 className="tag-group-title">{group.title}</h4>
              <div className="tag-container">
                {group.tags.map((tag, i) => (
                  <span key={i} className={`${group.style} tag-badge`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TagCloud;