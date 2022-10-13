import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import AddButton from '../components/AddButton'
import ArsipButton from '../components/ArsipButton'
import NoteList from '../components/NoteList'
import { getData } from '../data'

export default function Home({dataNote}) {

  // const dataNote = getData;

  // const [notes, setNotes] = useState(getData);

  //   useEffect(() => {
  //       fectData()
  //   }, []);

  //   const fectData = async() => {
  //     const response = await fetch('http://localhost:5000/note');
  //     const data =  await response.json();
  //     setNote(data);
  // }


  const filterArchive = dataNote.filter(function (el) {
      return el.archive === false
  });
    
    console.log(filterArchive);

  return (
    
    <>
      <Head>
        <title>Wee Note</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="max-w-md mx-auto px-4 py-5 overflow-x-hidden">

        <div className='grid grid-cols-2 gap-2 pb-5'>
          <Link href="/add" passHref>
            <AddButton />
          </Link>

          <Link href="/archive" passHref>
            <ArsipButton />
          </Link>
        </div>
    
        <NoteList dataNote={filterArchive}/> 

      </div>
       

    </>
  )
}

export const getServerSideProps = async () =>{
  const response = await fetch("https://6347b41a0484786c6e8665bf.mockapi.io/notes");
  const data = await response.json();

  return {
    props : {
      dataNote : data
    }
  }
}

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:5000/note");
//   const data = await response.json();
//   return {
//     props:{
//       products: data
//     }
     
//   }
// }