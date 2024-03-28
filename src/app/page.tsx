"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import moment from 'moment';
import './home.css'
import 'moment/locale/id';
import GetDataNavbar from '@/components/navbar/_useNavbar.Hook';

export default function Home() {
  moment.locale('id');
  const search = GetDataNavbar();
  const [sources, setSources] = useState([]);
  const [content, setContent] = useState([]);
  const berita = async () => {
    try {
      const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${search.activeSearch}&apiKey=928f59e26b19451b80445399319932de`); 
      setContent(data.data.articles); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    berita();
  }, [search.activeSearch]);
  return (
    <main className="flex min-h-screen bg-[#FAFAFA] w-full flex-col items-center justify-start m-0">
      <div className="mt-[10vh] overflow-y-auto w-full items-center flex flex-col">
      <div className='flex bg-gradient-to-b lg:px-10 px-3 to-[#667A9E] from-[#786187] py-2 w-full items-start justify-center'>
        <div className='lg:mr-5 mr-0 flex flex-col'>
        <div className='w-full bg-black bg-clip-content'>
        <div className='scrolling-text flex h-full w-[50%] overflow-x-hidden justify-center items-start overflow-y-hidden  whitespace-nowrap'>
           <h1 className='xl:text-[68px] md:text-[48px] text-[20px] text-white '>Headline News</h1>
        </div>
        </div>
        {content.slice(0,1).map((item, index) => (
          <div  key={index} className=''>
            <img src={item.urlToImage} className='w-full h-full'/>
            <div className='flex flex-row w-full text-white'>
              <h6>{item.source.name== null ? ' Anonymous' : ` ${item.source.name}`}</h6>
            </div>
            <div className='flex flex-row w-full text-white'>
              <h6>{item.author== null ? 'Penulis : Anonymous' : `Penulis : ${item.author}`}</h6>
            </div>
            <Link href={item.url}>
              <h4  className='hover:text-sky-300 text-bold text-white'>{item.title}</h4>
        </Link>
            <h6>{item.description == null ? 'Deskripsi tidak tersedia': `${item.description}`}</h6>
            <h6>{item.publishedAt == null ? 'Tanggal publikasi tidak tersedia' : moment(item.publishedAt).format('llll')}</h6>
          </div>
        ))}
        </div>
        <div className='h-full w-1/5 justify-start lg:flex hidden flex-col'>
        <div className='border-b-2 border-b-white'>
          <h4 className='text-bold text-white'>Other Topics</h4>
        </div>
          <div className=' flex flex-col h-full justify-evenly'>
          {content.slice(1,3).map((item, index) => (
          <div  key={index} className='w-full my-2 h-full flex flex-col'>
            <div className='w-4/4 h-3/4' >
              <img src={item.urlToImage} className='w-full h-full'/>
            </div>
            <div className='w-4/4 flex flex-col'>
             <div className='flex flex-row w-full text-white'>
              <h6>{item.source.name== null ? ' Anonymous' : ` ${item.source.name}`}</h6>
            </div>
            <div className='flex flex-row w-full text-white'>
              <h6>{item.author== null ? 'Penulis : Anonymous' : `Penulis : ${item.author}`}</h6>
            </div>
            <Link href={item.url}>
              <h4  className='hover:text-sky-300 text-bold text-white'>{item.title}</h4>
            </Link>
            <h6>{item.description == null ? 'Deskripsi tidak tersedia': `${item.description}`}</h6>
            <h6>{item.publishedAt == null ? 'Tanggal publikasi tidak tersedia' : moment(item.publishedAt).format('llll')}</h6>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
      <div className='flex lg:px-10 px-3  py-2 w-full items-start justify-center'>
        <div className='lg:flex hidden lg:mr-5 mr-0 lg:w-1/2 w-full flex flex-col '>
        {content.slice(3,7).map((item, index) => (
          <>
          <div className='flex flex-row my-5 w-full bg-[#FEFEFE] shadow-md '>
          <div  key={index} className='h-20 w-56'>
            <img src={item.urlToImage} className='w-full h-full'/>
          </div>
          <div className='flex flex-col ml-5'>
          <div className='w-4/4 flex flex-col'>
             <div className='flex flex-row w-full text-black'>
              <h6>{item.source.name== null ? ' Anonymous' : ` ${item.source.name}`}</h6>
            </div>
            <div className='flex flex-row w-full text-black'>
              <h6>{item.author== null ? 'Penulis : Anonymous' : `Penulis : ${item.author}`}</h6>
            </div>
            <Link href={item.url}>
              <h4  className='hover:text-sky-300 text-bold text-white'>{item.title}</h4>
            </Link>
            <h6>{item.description == null ? 'Deskripsi tidak tersedia': `${item.description}`}</h6>
            <h6>{item.publishedAt == null ? 'Tanggal publikasi tidak tersedia' : moment(item.publishedAt).format('llll')}</h6>
            </div>
          </div>
          </div>
          </>
        ))}
        </div>
        <div className='lg:hidden flex lg:mr-5 mr-0  w-full flex flex-col '>
        {content.slice(1,10).map((item, index) => (
          <>
          <div className='flex flex-row my-5 w-full bg-[#FEFEFE] shadow-md '>
          <div  key={index} className='h-20 w-56'>
            <img src={item.urlToImage} className='w-full h-full'/>
          </div>
          <div className='flex flex-col ml-5'>
          <div className='flex flex-row w-full text-black'>
              <h6>{item.source.name== null ? ' Anonymous' : ` ${item.source.name}`}</h6>
            </div>
            <div className='flex flex-row w-full text-black'>
              <h6>{item.author== null ? 'Penulis : Anonymous' : `Penulis : ${item.author}`}</h6>
            </div>
            <Link href={item.url}>
              <h4  className='hover:text-sky-300 text-bold text-white'>{item.title}</h4>
            </Link>
            <h6>{item.description == null ? 'Deskripsi tidak tersedia': `${item.description}`}</h6>
            <h6>{item.publishedAt == null ? 'Tanggal publikasi tidak tersedia' : moment(item.publishedAt).format('llll')}</h6>
          </div>
          </div>
          </>
        ))}
        </div>
        <div className='h-full lg:w-1/5 justify-start lg:flex hidden flex-col'>
          <div className=' flex flex-col h-full justify-evenly'>
          {content.slice(8,10).map((item, index) => (
          <div  key={index} className=' w-full shadow-md my-2 h-full flex flex-col'>
            <div className='w-4/4 h-3/4' >
              <img src={item.urlToImage} alt='foto tidak tersedia' className='w-full h-full'/>
            </div>
            <div className='w-4/4 flex flex-col'>
            <div className='flex flex-row w-full text-black'>
              <h6>{item.source.name== null ? ' Anonymous' : ` ${item.source.name}`}</h6>
            </div>
            <div className='flex flex-row w-full text-black'>
              <h6>{item.author== null ? 'Penulis : Anonymous' : `Penulis : ${item.author}`}</h6>
            </div>
            <Link href={item.url}>
              <h4  className='hover:text-sky-300 text-bold text-white'>{item.title}</h4>
            </Link>
            <h6>{item.description == null ? 'Deskripsi tidak tersedia': `${item.description}`}</h6>
            <h6>{item.publishedAt == null ? 'Tanggal publikasi tidak tersedia' : moment(item.publishedAt).format('llll')}</h6>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
      </div>
    </main>
  );
}
