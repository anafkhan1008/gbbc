import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Front from '@/components/Front'
import Activities from '@/components/Activities'
import Cards from '@/components/Cards'

import Footer from '@/components/Footer'
import {Box} from '@mui/material'

export default function Home() {
  return (
    <Box sx={{overflow : 'hidden'}} >
    <Navbar/>
    <Front/>
    <Activities/>
    <Cards/>
  
     <Footer/>
    </Box>
  )
}
