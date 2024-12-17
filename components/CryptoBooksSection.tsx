'use client';

import React from 'react';

const CryptoBooksSection = () => {
  const books = [
    {
      title: "How to Leave Introduction to Blockchain Technology",
      author: "Tiana Laurence",
      description: "Blockchain technology has come a long way since the initial vision published by Satoshi Nakamoto in 2008. Big buzz words like 'bitcoin,' 'blockchain,' and 'cryptocurrency' are everywhere. Companies and governments have started to use blockchain technology in earnest and will increasingly do so for the foreseeable future. This book takes an in-depth look at blockchain technology and how users can take advantage of its potential.",
      price: "$35.99",
      affiliateLink: "https://amzn.to/3Pky7SB",
      imageUrl: "/book1.jpg"
    },
    {
      title: "Blockchain For Dummies",
      author: "Tiana Laurence",
      description: "Cryptocurrency, NFTs, smart contracts, and ever-more-important business and finance functions―they all run on blockchain. Blockchain For Dummies is the must-have guide to the basics of blockchain",
      price: "$19.99",
      affiliateLink: "https://amzn.to/4iBA0aL",
      // Make sure the filename matches exactly what's in your public folder
      imageUrl: "/book2.jpg"
    },
    {
      title: "Bitcoin For Dummies",
      author: "Prypto",
      description: "Learn the basics of Bitcoin, how to get started, and navigate the cryptocurrency world with confidence.",
      price: "$16.99",
      affiliateLink: "https://amzn.to/3ZFp57d",
      // Make sure the filename matches exactly what's in your public folder
      imageUrl: "/book3.jpg"
    }
  ];

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = '/placeholder.jpg'; // You can add a placeholder image
  };

  return React.createElement('div', { className: 'mt-8' },
    React.createElement('h2', { className: 'text-2xl font-bold mb-6 text-orange-800' }, 'Recommended Crypto Books'),
    React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
      books.map((book, index) => 
        React.createElement('div', { 
          key: index,
          className: 'bg-white rounded-lg shadow-md p-6'
        },
          React.createElement('img', {
            src: book.imageUrl,
            alt: book.title,
            className: 'w-full h-auto mb-4',
            onError: handleImageError,
            style: { maxHeight: '400px', objectFit: 'contain' }
          }),
          React.createElement('h3', { className: 'text-lg font-semibold mb-1' }, book.title),
          React.createElement('p', { className: 'text-sm text-gray-600 mb-2' }, `By ${book.author}`),
          React.createElement('p', { className: 'text-sm text-gray-700 mb-4' }, book.description),
          React.createElement('div', { className: 'flex justify-between items-center' },
            React.createElement('span', { className: 'text-lg' }, book.price),
            React.createElement('a', {
              href: book.affiliateLink,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'text-blue-600 hover:text-blue-800'
            }, 'View on Amazon')
          )
        )
      )
    ),
    React.createElement('p', { className: 'text-sm text-gray-500 mt-6' },
      '*As an Amazon Associate, we earn from qualifying purchases.'
    )
  );
};

export default CryptoBooksSection;