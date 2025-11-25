import React from 'react';
import EmojiForm from '@/components/EmojiForm';
import Link from 'next/link';

const HomePage = () => {
    
  return (
    <section className='main'>
        <h1>Emojify your text!</h1>
        <EmojiForm />
    </section>
  )
}

export default HomePage