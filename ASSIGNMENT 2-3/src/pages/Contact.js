import React from 'react';

import {Layout} from '../layout';

const Contact = () => <Layout>
    <b><h1>Contact Page</h1></b>
    <form className='flex flex-col
    space-y-10 w-1/2 m-auto'>
         <div className='flex flex-col
         text-left'>
            <label>Name:</label>
            <input type='text' />
        </div>
         <div className='flex flex-col
         text-left'>
            <label>Email:</label>
            <input type='email' />
        </div>
        <div className='flex flex-col
         text-left'>
            <label>Message</label>
            <input type='text' />
            <textarea className='p-2 rounded'></textarea>
            </div>
    </form>
  

   </Layout>;
export default Contact; 